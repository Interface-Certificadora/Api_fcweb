import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClientExceptionFilter } from './prisma/prisma.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new PrismaClientExceptionFilter());

  // Configuração do Swagger para documentação automática
  // Documentação acessível em http://localhost:3000/api-docs
  const { SwaggerModule, DocumentBuilder } = await import('@nestjs/swagger');
  const config = new DocumentBuilder()
    .setTitle('API FCWeb')
    .setDescription('Documentação automática da API FCWeb, gerada com Swagger.')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
  console.log('API rodando em http://localhost:3000');
  console.log('Swagger disponível em http://localhost:3000/api-docs');
}
bootstrap();
