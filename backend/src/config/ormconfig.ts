import overload from '../types/globals';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import entities from '../database/entities';

overload();

export function ormConfig(): TypeOrmModuleOptions {
  const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DB_HOST ?? '0.0.0.0',
    port: parseInt(process.env.DB_PORT ?? '35000'),
    username: process.env.DB_USERNAME ?? 'admin',
    password: process.env.DB_PASSWORD ?? 'admin',
    database: process.env.DB_DATABASE ?? 'igreja',
    entities: entities,
    synchronize: process.env.NODE_ENV === 'production',
    migrations: ['database/migrations/*.js'],
    cli: {
      migrationsDir: 'src/database/migrations',
    },
  };
  console.log('OrmConfig:'.yellow, JSON.stringify(config).dim);
  return config;
}

export default ormConfig();
