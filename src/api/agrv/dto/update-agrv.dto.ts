import { PartialType } from '@nestjs/mapped-types';
import { CreateAgrvDto } from './create-agrv.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateAgrvDto extends PartialType(CreateAgrvDto) {
  @ApiProperty({
    description: 'Link da CNH',
    example: 'https://exemplo.com/cnh',
  })
  @IsString()
  @IsOptional()
  linkcnh: string;

  @ApiProperty({
    description: 'Link da foto do perfil',
    example: 'https://exemplo.com/fotoperfil',
  })
  @IsString()
  @IsOptional()
  linkfotoperfil: string;

  @ApiProperty({ description: 'Celular', example: '(16)99999-9999' })
  @IsString()
  @IsOptional()
  celular: string;

  @ApiProperty({ description: 'Fixo', example: '(16)3333-3333' })
  @IsString()
  @IsOptional()
  fixo: string;

  @ApiProperty({ description: 'Email 2', example: 'email2@exemplo.com' })
  @IsString()
  @IsOptional()
  email2: string;

  @ApiProperty({ description: 'Permissão de acesso', example: 'admin' })
  @IsString()
  @IsOptional()
  permissaoacesso: string;

  @ApiProperty({ description: 'Nome do banco', example: 'Banco Exemplo' })
  @IsString()
  @IsOptional()
  nomebanco: string;

  @ApiProperty({ description: 'Número do banco', example: '123456' })
  @IsString()
  @IsOptional()
  numerobanco: string;

  @ApiProperty({ description: 'Número da agência', example: '1234' })
  @IsString()
  @IsOptional()
  numeroagencia: string;

  @ApiProperty({ description: 'Número da conta', example: '123456789' })
  @IsString()
  @IsOptional()
  numeroconta: string;

  @ApiProperty({ description: 'Tipo da conta', example: 'Conta Corrente' })
  @IsString()
  @IsOptional()
  tipocontabanco: string;

  @ApiProperty({ description: 'Nome do polo', example: 'Polo Exemplo' })
  @IsString()
  @IsOptional()
  nomepolo: string;

  @ApiProperty({ description: 'Município do polo', example: 'Ribeirão Preto' })
  @IsString()
  @IsOptional()
  municipiopolo: string;

  @ApiProperty({
    description: 'Link do logo do polo',
    example: 'https://exemplo.com/logo',
  })
  @IsString()
  @IsOptional()
  linklogopolo: string;

  @ApiProperty({ description: 'Tipo de PIX', example: 'Chave PIX' })
  @IsString()
  @IsOptional()
  tipopix: string;

  @ApiProperty({ description: 'Observações', example: 'Observação' })
  @IsString()
  @IsOptional()
  obs: string;
}
