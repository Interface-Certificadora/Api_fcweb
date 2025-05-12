import {
  IsOptional,
  IsString,
  IsNotEmpty,
  IsEnum,
  IsDefined,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class CreateImportDadosDto {
  @ApiProperty({
    description: 'Alerta do sistema',
    example: 'ATIVADO',
    enum: ['ATIVADO', 'DESATIVADO'],
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsEnum(['ATIVADO', 'DESATIVADO'], { message: 'Alerta inválido' })
  @IsDefined({ message: 'Alerta do sistema é obrigatório' })
  @IsNotEmpty({ message: 'Alerta do sistema não pode ser vazio' })
  s_alerta?: string;

  /** Referência do registro */
  @ApiProperty({
    description: 'Referência do registro',
    example: '14-04-2025.10:21:13',
    required: true,
  })
  @IsString()
  @IsNotEmpty({ message: 'Referência do registro não pode ser vazio' })
  @IsDefined({ message: 'Referência do registro é obrigatória' })
  referencia: string;

  /** Unidade responsável */
  @ApiProperty({
    description: 'Unidade responsável',
    example: '1',
    required: true,
  })
  @IsString()
  @IsNotEmpty({ message: 'Unidade responsável não pode ser vazio' })
  @IsDefined({ message: 'Unidade responsável é obrigatória' })
  unidade: string;

  /** Usuário que criou o registro (obrigatório) */
  @ApiProperty({
    description: 'Serviço responsável pela importação',
    example: 'admin',
    enum: ['API', 'MATRIZ', 'CENTRAL'],
    required: false,
  })
  @IsString()
  @IsOptional()
  @IsNotEmpty({
    message: 'Serviço responsável pela importação não pode ser vazio',
  })
  @IsEnum(['API', 'MATRIZ', 'CENTRAL'], { message: 'Serviço inválido' })
  criou_fc?: string;

  /** CPF do cliente */
  @ApiProperty({
    description: 'CPF do cliente',
    example: '12345678900',
    required: false,
  })
  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'CPF não pode ser vazio' })
  @Transform(({ value }) => value.replace(/\D/g, ''))
  cpf: string;

  /** CNPJ do cliente */
  @ApiProperty({
    description: 'CNPJ do cliente',
    example: '12345678000199',
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'CNPJ não pode ser vazio' })
  @Transform(({ value }) => value.replace(/\D/g, ''))
  cnpj?: string;

  /** Nome do cliente */
  @ApiProperty({
    description: 'Nome do cliente',
    example: 'Empresa Exemplo',
    required: false,
  })
  @IsOptional()
  @IsString()
  nome?: string;

  /** Razão social do cliente */
  @ApiProperty({
    description: 'Razão social do cliente',
    example: 'Empresa Exemplo Ltda.',
    required: false,
  })
  @IsOptional()
  @IsString()
  razaosocial?: string;

  /** Contador */
  @ApiProperty({
    description: 'Contador',
    example: 'Contador XPTO',
    required: false,
  })
  @IsOptional()
  @IsString()
  contador?: string;

  /** Observação do contador */
  @ApiProperty({
    description: 'Observação do contador',
    example:
      'Criado Por: {nome do usuário} - Empreendimento: {nome do empreendimento} - vendedor: {nome do vendedor} - ( {data e hora ex: 08/05/2025 14:58:32} )',
    required: false,
  })
  @IsOptional()
  @IsString()
  obscont?: string;

  /** Tipo CD */
  @ApiProperty({
    description: 'Tipo CD',
    example: 'A1PF',
    enum: ['A1PF', 'A3PF', 'A1PJ', 'A3PJ', 'A3PF Bird5000'],
    required: true,
  })
  @IsDefined({ message: 'Tipo CD é obrigatório' })
  @IsNotEmpty({ message: 'Tipo CD não pode ser vazio' })
  @IsEnum(['A1PF', 'A3PF', 'A1PJ', 'A3PJ', 'A3PF Bird5000'], {
    message: 'Tipo CD inválido',
  })
  @IsString()
  tipocd: string;

  /** Valor CD */
  @ApiProperty({ description: 'Valor CD', example: '1000', required: true })
  @IsDefined({ message: 'Valor CD é obrigatório' })
  @IsNotEmpty({ message: 'Valor CD não pode ser vazio' })
  @IsString()
  valorcd: string;

  /** Forma de pagamento */
  @ApiProperty({
    description: 'Forma de pagamento',
    example: 'boleto',
    default: 'PENDURA',
    required: false,
  })
  @IsOptional()
  @IsString()
  formapgto?: string;

  /** Telefone principal */
  @ApiProperty({
    description: 'Telefone principal',
    example: '(16)99999-9999',
    required: false,
  })
  @IsOptional()
  @IsString()
  @Transform(({ value }) => value.replace(/\D/g, ''))
  telefone?: string;

  /** E-mail */
  @ApiProperty({
    description: 'E-mail',
    example: 'email@exemplo.com',
    required: false,
  })
  @IsOptional()
  @IsString()
  email?: string;

  /** Data de nascimento */
  @ApiProperty({
    description: 'Data de nascimento',
    example: '1990-01-01',
    required: false,
  })
  @IsOptional()
  @IsString()
  dtnascimento?: string;
}
