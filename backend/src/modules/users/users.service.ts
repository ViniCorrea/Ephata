import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CivilStatus, Gender } from '../../types/commons';
import { formatPhone, isValidPhone } from '../../utils/phone';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UserEntity } from '../../database/entities/user.entity';
import AppError from '../../errors/BaseError';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<UserEntity> {
    //#region Validação dos campos
    if (
      !createUserDto.birthDate.match(
        /^[0-9]{1,2}\/[0-9]{1,2}\/(?:[0-9]{2}|[0-9]{4})$/i,
      )
    ) {
      throw new AppError({
        message: 'Data de nascimento inválida!',
        status: 500,
      });
    }
    if (
      !Object.keys(Gender)
        .map((gender) => gender.toLowerCase())
        .includes(createUserDto.gender)
    ) {
      throw new AppError({
        message: 'Gênero inválido!',
        status: 500,
      });
    }
    if (
      !Object.keys(CivilStatus)
        .map((status) => status.toLowerCase())
        .includes(createUserDto.civilStatus)
    ) {
      throw new AppError({
        message: 'Estado civil inválido!',
        status: 500,
      });
    }
    if (createUserDto.phoneNumber && !isValidPhone(createUserDto.phoneNumber)) {
      throw new AppError({
        message: `Número de celular "${createUserDto.phoneNumber}" inválido!`,
        status: 500,
      });
    }
    //#endregion

    const user = new UserEntity();

    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    user.phoneNumber = createUserDto.phoneNumber
      ? formatPhone(createUserDto.phoneNumber)
      : '';
    user.birthDate = new Date(
      createUserDto.birthDate.split('/').reverse().join('/'),
    );
    user.civilStatus =
      CivilStatus[createUserDto.civilStatus.toLowerCase().capitalize()];
    user.gender = Gender[createUserDto.gender.toLowerCase().capitalize()];

    return this.usersRepository.save(user);
  }

  async findAll(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<UserEntity> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
