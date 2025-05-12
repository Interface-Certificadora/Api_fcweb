import {
  IsOptional,
  IsString,
  IsNumber,
  IsDateString,
  IsDefined,
  IsNotEmpty,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/**
 * DTO para criação de registros do módulo FCWeb.
 * Cada campo representa uma propriedade do model Prisma 'fcweb'.
 * Utilize este DTO para garantir validação e tipagem dos dados recebidos na API.
 */
export class CreateFcwebDto {
  /** Alerta do sistema */
  /** Alerta do sistema */
  @ApiProperty({
    description: 'Alerta do sistema',
    example: 'Alerta de vencimento',
    required: false,
  })
  @IsOptional()
  @IsString()
  s_alerta?: string;

  /** Referência do registro */
  @ApiProperty({
    description: 'Referência do registro',
    example: 'REF123',
    required: false,
  })
  @IsOptional()
  @IsString()
  referencia?: string;

  /** ID do boleto */
  @ApiProperty({
    description: 'ID do boleto',
    example: 'BLT123',
    required: false,
  })
  @IsOptional()
  @IsString()
  id_boleto?: string;

  /** ID para cancelamento de boleto removido */
  @ApiProperty({
    description: 'ID para cancelamento de boleto removido',
    example: 'CANCEL123',
    required: false,
  })
  @IsOptional()
  @IsString()
  id_cancelar_bol_rem?: string;

  /** Unidade responsável */
  @ApiProperty({
    description: 'Unidade responsável',
    example: 'Unidade Centro',
    required: false,
  })
  @IsOptional()
  @IsString()
  unidade?: string;

  /** Responsável pelo registro */
  @ApiProperty({
    description: 'Responsável pelo registro',
    example: 'João Silva',
    required: false,
  })
  @IsOptional()
  @IsString()
  responsavel?: string;

  /** Usuário que criou o registro (obrigatório) */
  @ApiProperty({
    description: 'Usuário que criou o registro',
    example: 'admin',
    required: true,
  })
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  criou_fc!: string;

  /** Andamento do processo */
  @ApiProperty({
    description: 'Andamento do processo',
    example: 'Em análise',
    required: false,
  })
  @IsOptional()
  @IsString()
  andamento?: string;

  /** Prioridade do atendimento */
  @ApiProperty({
    description: 'Prioridade do atendimento',
    example: 'Alta',
    required: false,
  })
  @IsOptional()
  @IsString()
  prioridade?: string;

  /** Descrição da solicitação */
  @ApiProperty({
    description: 'Descrição da solicitação',
    example: 'Solicitação de novo boleto',
    required: false,
  })
  @IsOptional()
  @IsString()
  solicitacao?: string;

  /** Venda associada */
  @ApiProperty({
    description: 'Venda associada',
    example: 'VENDA123',
    required: false,
  })
  @IsOptional()
  @IsString()
  venda?: string;

  /** CPF do cliente */
  @ApiProperty({
    description: 'CPF do cliente',
    example: '123.456.789-00',
    required: false,
  })
  @IsOptional()
  @IsString()
  cpf?: string;

  /** CNPJ do cliente */
  @ApiProperty({
    description: 'CNPJ do cliente',
    example: '12.345.678/0001-99',
    required: false,
  })
  @IsOptional()
  @IsString()
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

  /** Vencimento do boleto */
  @ApiProperty({
    description: 'Vencimento do boleto',
    example: '2025-12-31',
    required: false,
    type: String,
  })
  @IsOptional()
  @IsDateString()
  vectoboleto?: Date;

  /** Campo único identificador */
  @ApiProperty({
    description: 'Campo único identificador',
    example: 'UNICO123',
    required: false,
  })
  @IsOptional()
  @IsString()
  unico?: string;

  /** Contador */
  @ApiProperty({
    description: 'Contador',
    example: 'Contador XPTO',
    required: false,
  })
  @IsOptional()
  @IsString()
  contador?: string;

  /** Observações do contador */
  @ApiProperty({
    description: 'Observações do contador',
    example: 'Observação importante',
    required: false,
  })
  @IsOptional()
  @IsString()
  obscont?: string;

  /** Comissão do parceiro */
  @ApiProperty({
    description: 'Comissão do parceiro',
    example: 10.5,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  comissaoparceiro?: number;

  /** Código SCP */
  @ApiProperty({
    description: 'Código SCP',
    example: 'SCP001',
    required: false,
  })
  @IsOptional()
  @IsString()
  scp?: string;

  /** Tipo CD */
  @ApiProperty({ description: 'Tipo CD', example: 'Tipo A', required: false })
  @IsOptional()
  @IsString()
  tipocd?: string;

  /** Valor CD */
  @ApiProperty({ description: 'Valor CD', example: '1000', required: false })
  @IsOptional()
  @IsString()
  valorcd?: string;

  /** Custo CD */
  @ApiProperty({ description: 'Custo CD', example: '500', required: false })
  @IsOptional()
  @IsString()
  custocd?: string;

  /** Custo CD parceiro */
  @ApiProperty({
    description: 'Custo CD parceiro',
    example: '250',
    required: false,
  })
  @IsOptional()
  @IsString()
  custoCdpar?: string;

  /** Status do pagamento */
  @ApiProperty({
    description: 'Status do pagamento',
    example: 'Pago',
    required: false,
  })
  @IsOptional()
  @IsString()
  estatos_pgto?: string;

  /** Pagamento via Efi */
  @ApiProperty({
    description: 'Pagamento via Efi',
    example: 'sim',
    required: false,
  })
  @IsOptional()
  @IsString()
  pgto_efi?: string;

  /** Forma de pagamento */
  @ApiProperty({
    description: 'Forma de pagamento',
    example: 'boleto',
    required: false,
  })
  @IsOptional()
  @IsString()
  formapgto?: string;

  /** Voucher Soluti */
  @ApiProperty({
    description: 'Voucher Soluti',
    example: 'VOUCHER123',
    required: false,
  })
  @IsOptional()
  @IsString()
  vouchersoluti?: string;

  /** Código da parcela */
  @ApiProperty({
    description: 'Código da parcela',
    example: 'PARC123',
    required: false,
  })
  @IsOptional()
  @IsString()
  ct_parcela?: string;

  /** Telefone principal */
  @ApiProperty({
    description: 'Telefone principal',
    example: '(16)99999-9999',
    required: false,
  })
  @IsOptional()
  @IsString()
  telefone?: string;

  /** Telefone secundário */
  @ApiProperty({
    description: 'Telefone secundário',
    example: '(16)98888-8888',
    required: false,
  })
  @IsOptional()
  @IsString()
  telefone2?: string;

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

  /** RG */
  @ApiProperty({ description: 'RG', example: '123456789', required: false })
  @IsOptional()
  @IsString()
  rg?: string;

  /** CEI */
  @ApiProperty({ description: 'CEI', example: '12345678901', required: false })
  @IsOptional()
  @IsString()
  cei?: string;

  /** Endereço */
  @ApiProperty({
    description: 'Endereço',
    example: 'Rua Exemplo',
    required: false,
  })
  @IsOptional()
  @IsString()
  endereco?: string;

  /** Número da rua */
  @ApiProperty({
    description: 'Número da rua',
    example: '123',
    required: false,
  })
  @IsOptional()
  @IsString()
  nrua?: string;

  /** Bairro */
  @ApiProperty({ description: 'Bairro', example: 'Centro', required: false })
  @IsOptional()
  @IsString()
  bairro?: string;

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

  /** UF */
  @ApiProperty({ description: 'UF', example: 'SP', required: false })
  @IsOptional()
  @IsString()
  uf?: string;

  /** Inscrição Municipal */
  @ApiProperty({
    description: 'Inscrição Municipal',
    example: 12345,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  im?: number;

  /** Cidade */
  @ApiProperty({
    description: 'Cidade',
    example: 'Ribeirão Preto',
    required: false,
  })
  @IsOptional()
  @IsString()
  cidade?: string;

  /** Observação */
  @ApiProperty({
    description: 'Observação',
    example: 'Observação geral',
    required: false,
  })
  @IsOptional()
  @IsString()
  observacao?: string;

  /** Vencimento CD */
  @ApiProperty({
    description: 'Vencimento CD',
    example: '2025-12-31',
    required: false,
  })
  @IsOptional()
  @IsDateString()
  vctoCD?: string;

  /** Histórico */
  @ApiProperty({
    description: 'Histórico',
    example: 'Histórico do cliente',
    required: false,
  })
  @IsOptional()
  @IsString()
  historico?: string;

  /** Arquivo */
  @ApiProperty({
    description: 'Arquivo',
    example: 'documento.pdf',
    required: false,
  })
  @IsOptional()
  @IsString()
  arquivo?: string;

  /** Nome do arquivo */
  @ApiProperty({
    description: 'Nome do arquivo',
    example: 'documento.pdf',
    required: false,
  })
  @IsOptional()
  @IsString()
  nomearquivo?: string;

  /** Observação de renovação */
  @ApiProperty({
    description: 'Observação de renovação',
    example: 'Renovação automática',
    required: false,
  })
  @IsOptional()
  @IsString()
  obsrenovacao?: string;

  /** Data de aprovação */
  @ApiProperty({
    description: 'Data de aprovação',
    example: '2025-12-31',
    required: false,
  })
  @IsOptional()
  @IsDateString()
  dt_aprovacao?: string;

  /** Hora de aprovação */
  @ApiProperty({
    description: 'Hora de aprovação',
    example: '14:00:00',
    required: false,
  })
  @IsOptional()
  @IsDateString()
  hr_aprovacao?: string;

  /** Comissão */
  @ApiProperty({ description: 'Comissão', example: 15.5, required: false })
  @IsOptional()
  @IsNumber()
  comicao?: number;

  /** Validação */
  @ApiProperty({
    description: 'Validação',
    example: 'validado',
    required: false,
  })
  @IsOptional()
  @IsString()
  validacao?: string;

  /** NFE */
  @ApiProperty({ description: 'NFE', example: '123456', required: false })
  @IsOptional()
  @IsString()
  nfe?: string;

  /** URL da nota */
  @ApiProperty({
    description: 'URL da nota',
    example: 'https://nota.exemplo.com',
    required: false,
  })
  @IsOptional()
  @IsString()
  urlnota?: string;

  /** ID FCW Soluti */
  @ApiProperty({
    description: 'ID FCW Soluti',
    example: '12345678901',
    required: false,
  })
  @IsOptional()
  @IsString()
  id_fcw_soluti?: string;

  /** Data da agenda */
  @ApiProperty({
    description: 'Data da agenda',
    example: '2025-12-31',
    required: false,
  })
  @IsOptional()
  @IsDateString()
  dt_agenda?: string;

  /** Hora da agenda */
  @ApiProperty({
    description: 'Hora da agenda',
    example: '14:00:00',
    required: false,
  })
  @IsOptional()
  @IsDateString()
  hr_agenda?: string;

  /** Observação da agenda */
  @ApiProperty({
    description: 'Observação da agenda',
    example: 'Cliente confirmou presença',
    required: false,
  })
  @IsOptional()
  @IsString()
  obs_agenda?: string;

  /** Registro CNH */
  @ApiProperty({
    description: 'Registro CNH',
    example: '123456789',
    required: false,
  })
  @IsOptional()
  @IsString()
  reg_cnh?: string;

  /** ID do agendamento */
  @ApiProperty({
    description: 'ID do agendamento',
    example: 1,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  id_agendamento?: number;

  /** Data de revogação */
  @ApiProperty({
    description: 'Data de revogação',
    example: '2025-12-31',
    required: false,
  })
  @IsOptional()
  @IsDateString()
  dt_revogacao?: string;
}
