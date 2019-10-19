import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { expressApp } from '../express/server';
import { ExpressAdapter } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressApp),
  );
  await app.listen(3000);
}
bootstrap();
