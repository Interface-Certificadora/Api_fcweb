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
      'Documentação da API FCWeb\n\n' +
        'Bem-vindo à documentação automática da API FCWeb, gerada com Swagger.\n\n' +
        '🔐 Autenticação\n\n' +
        'Esta API utiliza autenticação do tipo Basic Auth. Para acessar os endpoints protegidos, é obrigatório enviar um cabeçalho "Authorization" com suas credenciais codificadas.\n\n' +
        'Como autenticar:\n\n' +
        '1. Combine seu usuário e senha separados por dois-pontos:\n' +
        '   usuario:senha\n\n' +
        '2. Codifique essa string em Base64.</br> Exemplo:</br>' +
        '   <code>usuario:senha → dXN1YXJpbzpzZW5oYQ==</code>\n\n' +
        '3. Envie o seguinte cabeçalho na requisição:</br>' +
        '   <code>Authorization: Basic dXN1YXJpbzpzZW5oYQ==</code>\n\n' +
        'Exemplo com curl:\n\n' +
        '<code>curl -X GET https://sua-api.com/exemplo \\\n' +
        '  -H "Authorization: Basic dXN1YXJpbzpzZW5oYQ=="</code>\n\n' +
        '💡 Dica: No Swagger UI, clique no botão "Authorize" no topo da página, insira seu usuário e senha, e as requisições já incluirão o cabeçalho automaticamente.\n\n' +
        '🌐 Ambientes disponíveis:\n\n' +
        '- Produção: <code>https://apifcweb.redebrasilrp.com.br</code>\n' +
        '- Desenvolvimento: <code>http://localhost:7879</code>',
    )
    .setVersion('1.0')
    .addServer(`https://apifcweb.redebrasilrp.com.br`, 'Produção')
    // .addServer(`http://localhost:7879`, 'Desenvolvimento')
    .addBasicAuth({
      type: 'http',
      name: 'Basic',
      description: 'Basic Auth',
    })
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
