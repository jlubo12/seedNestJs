import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/modules/app';

export async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);
}
