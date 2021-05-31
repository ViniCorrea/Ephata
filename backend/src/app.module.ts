import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { ModulesModule } from './modules';
import OrmConfig from '@config/ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(OrmConfig), ModulesModule],
})
export class AppModule implements NestModule {
  constructor(private connection: Connection) {}

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware);
  }
}
