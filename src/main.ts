import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClientExceptionFilter } from './prisma/prisma.filter';

const PORT = process.env.PORT || 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new PrismaClientExceptionFilter());

  // Configuração do Swagger para documentação automática
  // Documentação acessível em http://localhost:3000/api-docs
  const { SwaggerModule, DocumentBuilder } = await import('@nestjs/swagger');
  const config = new DocumentBuilder()
    .setTitle('API FCWeb')
    .setDescription(
      'Documentação automática da API FCWeb, gerada com Swagger.\n\nPara autenticação é obrigatório usar Basic Auth com usuario e senha\n\nProdução: https://apifcweb.redebrasilrp.com.br\n\nDesenvolvimento: http://localhost:7879',
    )
    .setVersion('1.0')
    .addServer(`https://apifcweb.redebrasilrp.com.br`, 'Produção')
    .addServer(`http://localhost:7879`, 'Desenvolvimento')
    .addBasicAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  //cors
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Accept,Authorization',
    credentials: true,
  });

  await app.listen(PORT);
  console.log(`API rodando em http://localhost:${PORT}`);
  console.log(`Swagger disponível em http://localhost:${PORT}/api-docs`);
}
bootstrap();
