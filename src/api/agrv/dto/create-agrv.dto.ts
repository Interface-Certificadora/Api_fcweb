import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsNumber,
  IsDateString,
  IsNotEmpty,
} from 'class-validator';

/**
 * DTO para criação de AGRV
 * Todos os campos validados e documentados para Swagger
 */
export class CreateAgrvDto {
  /** Nome completo */
  @ApiProperty({ description: 'Nome completo', example: 'Maria Silva' })
  @IsString()
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  nome: string;

  /** CPF */
  @ApiProperty({
    description: 'CPF',
    example: '12345678900',
    required: true,
  })
  @IsString()
  @IsNotEmpty({ message: 'O CPF é obrigatório' })
  cpf: string;

  /** Data de nascimento */
  @ApiProperty({
    description: 'Data de nascimento',
    example: '1990-01-01',
    required: true,
  })
  @IsDateString(
    { strict: true },
    { message: 'A data de nascimento deve ser uma data válida' },
  )
  @IsNotEmpty({ message: 'A data de nascimento é obrigatória' })
  nascimento: string;

  /** RG */
  @ApiProperty({ description: 'RG', example: '123456789', required: false })
  @IsOptional()
  @IsString()
  rg?: string;

  /** Logradouro */
  @ApiProperty({
    description: 'Logradouro',
    example: 'Rua Exemplo',
    required: false,
  })
  @IsOptional()
  @IsString()
  logradouro?: string;

  /** Número */
  @ApiProperty({ description: 'Número', example: '123', required: false })
  @IsOptional()
  @IsString()
  numero?: string;

  /** Complemento */
  @ApiProperty({
    description: 'Complemento',
    example: 'Apto 10',
    required: false,
  })
  @IsOptional()
  @IsString()
  complemento?: string;

  /** CEP */
  @ApiProperty({ description: 'CEP', example: '14000-000', required: false })
  @IsOptional()
  @IsString()
  cep?: string;

  /** Município */
  @ApiProperty({
    description: 'Município',
    example: 'Ribeirão Preto',
    required: false,
  })
  @IsOptional()
  @IsString()
  municipio?: string;

  /** Código do município */
  @ApiProperty({
    description: 'Código do município',
    example: '3543402',
    required: false,
  })
  @IsOptional()
  @IsString()
  codmunicipio?: string;

  /** UF */
  @ApiProperty({ description: 'UF', example: 'SP', required: false })
  @IsOptional()
  @IsString()
  uf?: string;

  /** WhatsApp */
  @ApiProperty({
    description: 'WhatsApp',
    example: '16999999999',
    required: true,
  })
  @IsString()
  @IsNotEmpty({ message: 'O WhatsApp é obrigatório' })
  whatsapp: string;

  /** E-mail */
  @ApiProperty({
    description: 'E-mail',
    example: 'email@exemplo.com',
    required: true,
  })
  @IsString()
  @IsNotEmpty({ message: 'O e-mail é obrigatório' })
  email: string;

  /** Senha */
  @ApiProperty({
    description: 'Senha',
    example: 'senhaSegura123',
    required: false,
  })
  @IsOptional()
  @IsString()
  senha?: string;

  /** Chave Pix */
  @ApiProperty({
    description: 'Chave Pix',
    example: '123.456.789-00',
    required: false,
  })
  @IsOptional()
  @IsString()
  chavepix?: string;

  /** Número do polo */
  @ApiProperty({ description: 'Número do polo', example: 100, required: false })
  @IsOptional()
  @IsNumber()
  numeropolo?: number;

  /** UF do polo */
  @ApiProperty({ description: 'UF do polo', example: 'SP', required: false })
  @IsOptional()
  @IsString()
  ufpolo?: string;

  /** Certificado A1 PJ 12 meses */
  @ApiProperty({ description: 'A1 PJ 12 meses', example: 1, required: true })
  @IsNumber()
  @IsNotEmpty({ message: 'O valor de A1 PJ 12 meses é obrigatório' })
  a1pj_12m: number;

  /** Certificado A3 PJ 36 meses */
  @ApiProperty({ description: 'A3 PJ 36 meses', example: 1, required: true })
  @IsNumber()
  @IsNotEmpty({ message: 'O valor de A3 PJ 36 meses é obrigatório' })
  a3pj_36m: number;

  /** Certificado A1 PF 12 meses */
  @ApiProperty({ description: 'A1 PF 12 meses', example: 1, required: true })
  @IsNumber()
  @IsNotEmpty({ message: 'O valor de A1 PF 12 meses é obrigatório' })
  a1pf_12m: number;

  /** Certificado A3 PF 36 meses */
  @ApiProperty({ description: 'A3 PF 36 meses', example: 1, required: true })
  @IsNumber()
  @IsNotEmpty({ message: 'O valor de A3 PF 36 meses é obrigatório' })
  a3pf_36m: number;

  /** Bairro */
  @ApiProperty({ description: 'Bairro', example: 'Centro' })
  @IsString()
  bairro: string;

  /** Painel AGRV */
  @ApiProperty({ description: 'Painel AGRV', example: 1 })
  @IsNumber()
  painel_agrv: number;
}
