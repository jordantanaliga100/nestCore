import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
  });

  // GLOBALS
  app.setGlobalPrefix('api/v1/');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // OPENAPI
  const config = new DocumentBuilder()
    .setVersion('1.0.0')
    .setTitle('Nestjs Masterclass - Blog App API')
    .setDescription(
      `Use the base url http://localhost:3000/api/v1/ to access the endpoints`,
    )
    .setTermsOfService('http://localhost:3000/api/v1/terms-of-service')
    .setLicense('MIT', 'https://opensource.org/licenses/MIT')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory());

  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}
bootstrap();
