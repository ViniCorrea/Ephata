import overload from '@globals';
import { NestFactory } from '@nestjs/core';
import { enable as enableColors } from 'colors';

overload();

enableColors();

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
