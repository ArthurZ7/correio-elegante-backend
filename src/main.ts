import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json } from 'body-parser';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.use(json({ limit: '100mb' }));
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(5000);
}
bootstrap();
