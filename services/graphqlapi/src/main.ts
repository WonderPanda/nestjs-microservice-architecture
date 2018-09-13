import { Transport } from '@nestjs/common/enums/transport.enum';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.REDIS,
    options: { retryAttempts: 5, retryDelay: 1000 }
  });

  // await app.startAllMicroservicesAsync();
  await app.listen(3000);
}
bootstrap();
