import { Module } from '@nestjs/common';
import { SamplesModule } from './samples/sample.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [SamplesModule, UsersModule],
  controllers: [],
  providers: [],
})
export class ModulesModule {}
