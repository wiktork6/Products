import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        //   //remove not valid properties from request (not defined in dto)
        // whitelist: true,
        //   //instead of removing will throw an error
        // forbidNonWhitelisted: true,
      }));
  await app.listen(process.env.PORT);
}
bootstrap();
