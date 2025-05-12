import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers['authorization'];

    // Verifica se o header Authorization está presente e correto
    if (!authHeader || !authHeader.startsWith('Basic ')) {
      throw new UnauthorizedException(
        'Header Authorization inválido ou ausente',
      );
    }

    // Decodifica o valor em Base64
    const base64Credentials = authHeader.replace('Basic ', '');
    const credentials = Buffer.from(base64Credentials, 'base64').toString(
      'utf-8',
    );
    const [usuario, senha] = credentials.split(':');

    // Validação simples de exemplo (substitua pela lógica real)
    const User = process.env.USERAPI || '';
    const Pass = process.env.PASSAPI || '';
    if (usuario === User && senha === Pass) {
      return true; // Permite acesso
    }

    // Se usuário/senha inválidos
    throw new UnauthorizedException('Usuário ou senha inválidos');
  }
}
