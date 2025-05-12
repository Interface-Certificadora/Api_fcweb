import { ApiProperty } from '@nestjs/swagger';

/**
 * Entity que representa o registro completo de AGRV.
 * Todos os campos estão documentados para Swagger e possuem tipos claros.
 */
export class AgrvEntity {
  /** Identificador único do AGRV */
  @ApiProperty({ example: 1 })
  idagrv: number;

  /** Nome completo */
  @ApiProperty({ example: 'Maria Silva' })
  nome: string;

  /** CPF */
  @ApiProperty({ example: '123.456.789-00' })
  cpf: string;

  /** Data de nascimento */
  @ApiProperty({ example: '1990-01-01', type: String })
  nascimento: Date;

  /** RG */
  @ApiProperty({ example: '123456789' })
  rg: string;

  /** Link da CNH */
  @ApiProperty({ example: 'https://exemplo.com/cnh' })
  linkcnh: string;

  /** Link da foto do perfil */
  @ApiProperty({ example: 'https://exemplo.com/fotoperfil' })
  linkfotoperfil: string;

  /** Logradouro */
  @ApiProperty({ example: 'Rua Exemplo' })
  logradouro: string;

  /** Número */
  @ApiProperty({ example: '123' })
  numero: string;

  /** Complemento */
  @ApiProperty({ example: 'Apto 10' })
  complemento: string;

  /** CEP */
  @ApiProperty({ example: '14000-000' })
  cep: string;

  /** Município */
  @ApiProperty({ example: 'Ribeirão Preto' })
  municipio: string;

  /** Código do município */
  @ApiProperty({ example: '3543402' })
  codmunicipio: string;

  /** UF */
  @ApiProperty({ example: 'SP' })
  uf: string;

  /** WhatsApp */
  @ApiProperty({ example: '(16)99999-9999' })
  whatsapp: string;

  /** Celular */
  @ApiProperty({ example: '(16)98888-8888' })
  celular: string;

  /** Telefone fixo */
  @ApiProperty({ example: '(16)3333-3333' })
  fixo: string;

  /** E-mail principal */
  @ApiProperty({ example: 'email@exemplo.com' })
  email: string;

  /** E-mail secundário */
  @ApiProperty({ example: 'email2@exemplo.com' })
  email2: string;

  /** Permissão de acesso */
  @ApiProperty({ example: 'admin' })
  permissaoacesso: string;

  /** Senha (criptografada) */
  @ApiProperty({ example: 'senhaSegura123' })
  senha: string;

  /** Chave Pix */
  @ApiProperty({ example: '123.456.789-00' })
  chavepix: string;

  /** Nome do banco */
  @ApiProperty({ example: 'Banco Exemplo' })
  nomebanco: string;

  /** Número do banco */
  @ApiProperty({ example: '123456' })
  numerobanco: string;

  /** Número da agência */
  @ApiProperty({ example: '1234' })
  numeroagencia: string;

  /** Número da conta */
  @ApiProperty({ example: '123456789' })
  numeroconta: string;

  /** Tipo da conta bancária */
  @ApiProperty({ example: 'Conta Corrente' })
  tipocontabanco: string;

  /** Nome do polo */
  @ApiProperty({ example: 'Polo Exemplo' })
  nomepolo: string;

  /** Número do polo */
  @ApiProperty({ example: 100 })
  numeropolo: number;

  /** Link do logo do polo */
  @ApiProperty({ example: 'https://exemplo.com/logo' })
  linklogopolo: string;

  /** Município do polo */
  @ApiProperty({ example: 'Ribeirão Preto' })
  municipiopolo: string;

  /** UF do polo */
  @ApiProperty({ example: 'SP' })
  ufpolo: string;

  /** Certificado A1 PJ 12 meses */
  @ApiProperty({ example: 1 })
  a1pj_12m: number;

  /** Certificado A3 PJ 36 meses */
  @ApiProperty({ example: 1 })
  a3pj_36m: number;

  /** Certificado A1 PF 12 meses */
  @ApiProperty({ example: 1 })
  a1pf_12m: number;

  /** Certificado A3 PF 36 meses */
  @ApiProperty({ example: 1 })
  a3pf_36m: number;

  /** Data de criação do registro */
  @ApiProperty({ example: '2024-05-09T10:00:00Z', type: String })
  createdAt: Date;

  /** Data de atualização do registro */
  @ApiProperty({ example: '2024-05-09T12:00:00Z', type: String })
  updatedAt: Date;

  /** Tipo de Pix */
  @ApiProperty({ example: 'CPF' })
  tipopix: string;

  /** Bairro */
  @ApiProperty({ example: 'Centro' })
  bairro: string;

  /** Painel AGRV */
  @ApiProperty({ example: 1 })
  painel_agrv: number;

  /** Observações */
  @ApiProperty({ example: 'Observação' })
  obs: string;

  constructor(partial: Partial<AgrvEntity>) {
    Object.assign(this, partial);
  }
}
