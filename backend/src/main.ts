import { NestFactory } from '@nestjs/core';
import { enable as enableColors } from 'colors';
import { AppModule } from './app.module';
import overload from './types/globals';

overload();

enableColors();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const ambiente = (nome = process.env.NODE_ENV || 'development'): string =>
    ({
      development: 'desenvolvimento',
      production: 'produção',
    }[nome] || nome);

  await app.listen(
    process.env.PORT || 3000,
    process.env.HOSTNAME || 'localhost',
    () => {
      const server = app.getHttpServer();
      const fullAddress = server.address() as {
        address: string;
        family: string;
        port: number;
      };
      const address = fullAddress['address'];
      const port = fullAddress['port'];
      console.log(
        `🔥 Servidor rodando em ${address}:${port} no ambiente de ${ambiente()}`,
      );
    },
  );
}
bootstrap();
