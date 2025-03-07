import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS (pra fazer uma requisicao diretamente com html)
  app.enableCors({
    origin: '*', // Permite requisições de qualquer origem (use com cautela)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
  });

  await app.listen(3000); 
}
bootstrap();