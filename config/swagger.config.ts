import { DocumentBuilder } from '@nestjs/swagger';

export const config = new DocumentBuilder()
  .setVersion('1.0.0')
  .setTitle('Nestjs Masterclass - Blog App API')
  .setDescription(
    `Use the base url http://localhost:3000/api/v1/ to access the endpoints`,
  )
  .setTermsOfService('http://localhost:3000/api/v1/terms-of-service')
  .setLicense('MIT', 'https://opensource.org/licenses/MIT')
  .build();
