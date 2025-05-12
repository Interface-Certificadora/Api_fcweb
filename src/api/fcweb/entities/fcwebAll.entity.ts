import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class FcwebAllEntity {
  @ApiProperty({ description: 'ID do registro' })
  @IsNumber()
  id: number;

  @ApiProperty({ description: 'Nome do cliente' })
  @IsString()
  nome: string;

  @ApiProperty({ description: 'Razão social do cliente' })
  @IsString()
  razaosocial: string;

  @ApiProperty({ description: 'Andamento do processo' })
  @IsString()
  andamento: string;

  @ApiProperty({ description: 'Usuário que criou o registro' })
  @IsString()
  criou_fc: string;

  @ApiProperty({ description: 'Forma de pagamento' })
  @IsString()
  formapgto: string;

  @ApiProperty({ description: 'Status do pagamento' })
  @IsString()
  estatos_pgto: string;

  @ApiProperty({ description: 'Valor do CD' })
  @IsString()
  valorcd: string;
}
