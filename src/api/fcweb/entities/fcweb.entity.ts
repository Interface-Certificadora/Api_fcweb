import { ApiProperty } from '@nestjs/swagger';

/**
 * Entidade que representa o registro do módulo FCWeb.
 * Baseada no model Prisma 'fcweb'.
 * Utilizada para respostas e mapeamento de dados.
 */
export class FcwebEntity {
  /** Identificador único (chave primária) */
  @ApiProperty({ example: 1 })
  id: number;

  /** Alerta do sistema */
  @ApiProperty({ example: 'Alerta de vencimento', required: false })
  s_alerta?: string;

  /** Referência do registro */
  @ApiProperty({ example: 'REF123', required: false })
  referencia?: string;

  /** ID do boleto */
  @ApiProperty({ example: 'BLT123', required: false })
  id_boleto?: string;

  /** ID para cancelamento de boleto removido */
  @ApiProperty({ example: 'CANCEL123', required: false })
  id_cancelar_bol_rem?: string;

  /** Unidade responsável */
  @ApiProperty({ example: 'Unidade Centro', required: false })
  unidade?: string;

  /** Responsável pelo registro */
  @ApiProperty({ example: 'João Silva', required: false })
  responsavel?: string;

  /** Usuário que criou o registro */
  @ApiProperty({ example: 'admin' })
  criou_fc: string;

  /** Andamento do processo */
  @ApiProperty({ example: 'Em análise', required: false })
  andamento?: string;

  /** Prioridade do atendimento */
  @ApiProperty({ example: 'Alta', required: false })
  prioridade?: string;

  /** Descrição da solicitação */
  @ApiProperty({ example: 'Solicitação de novo boleto', required: false })
  solicitacao?: string;

  /** Venda associada */
  @ApiProperty({ example: 'VENDA123', required: false })
  venda?: string;

  /** CPF do cliente */
  @ApiProperty({ example: '123.456.789-00', required: false })
  cpf?: string;

  /** CNPJ do cliente */
  @ApiProperty({ example: '12.345.678/0001-99', required: false })
  cnpj?: string;

  /** Nome do cliente */
  @ApiProperty({ example: 'Empresa Exemplo', required: false })
  nome?: string;

  /** Razão social do cliente */
  @ApiProperty({ example: 'Empresa Exemplo Ltda.', required: false })
  razaosocial?: string;

  /** Vencimento do boleto */
  @ApiProperty({ example: '2025-12-31', required: false, type: String })
  vectoboleto?: Date;

  /** Campo único identificador */
  @ApiProperty({ example: 'UNICO123', required: false })
  unico?: string;

  /** Contador */
  @ApiProperty({ example: 'Contador XPTO', required: false })
  contador?: string;

  /** Observações do contador */
  @ApiProperty({ example: 'Observação importante', required: false })
  obscont?: string;

  /** Comissão do parceiro */
  @ApiProperty({ example: 10.5, required: false })
  comissaoparceiro?: number;

  /** Código SCP */
  @ApiProperty({ example: 'SCP001', required: false })
  scp?: string;

  /** Tipo CD */
  @ApiProperty({ example: 'Tipo A', required: false })
  tipocd?: string;

  /** Valor CD */
  @ApiProperty({ example: '1000', required: false })
  valorcd?: string;

  /** Custo CD */
  @ApiProperty({ example: '500', required: false })
  custocd?: string;

  /** Custo CD parceiro */
  @ApiProperty({ example: '250', required: false })
  custoCdpar?: string;

  /** Status do pagamento */
  @ApiProperty({ example: 'Pago', required: false })
  estatos_pgto?: string;

  /** Pagamento via Efi */
  @ApiProperty({ example: 'sim', required: false })
  pgto_efi?: string;

  /** Forma de pagamento */
  @ApiProperty({ example: 'boleto', required: false })
  formapgto?: string;

  /** Voucher Soluti */
  @ApiProperty({ example: 'VOUCHER123', required: false })
  vouchersoluti?: string;

  /** Código da parcela */
  @ApiProperty({ example: 'PARC123', required: false })
  ct_parcela?: string;

  /** Telefone principal */
  @ApiProperty({ example: '(16)99999-9999', required: false })
  telefone?: string;

  /** Telefone secundário */
  @ApiProperty({ example: '(16)98888-8888', required: false })
  telefone2?: string;

  /** E-mail */
  @ApiProperty({ example: 'email@exemplo.com', required: false })
  email?: string;

  /** Data de nascimento */
  @ApiProperty({ example: '1990-01-01', required: false })
  dtnascimento?: string;

  /** RG */
  @ApiProperty({ example: '123456789', required: false })
  rg?: string;

  /** CEI */
  @ApiProperty({ example: '12345678901', required: false })
  cei?: string;

  /** Endereço */
  @ApiProperty({ example: 'Rua Exemplo', required: false })
  endereco?: string;

  /** Número da rua */
  @ApiProperty({ example: '123', required: false })
  nrua?: string;

  /** Bairro */
  @ApiProperty({ example: 'Centro', required: false })
  bairro?: string;

  /** Complemento */
  @ApiProperty({ example: 'Apto 10', required: false })
  complemento?: string;

  /** CEP */
  @ApiProperty({ example: '14000-000', required: false })
  cep?: string;

  /** UF */
  @ApiProperty({ example: 'SP', required: false })
  uf?: string;

  /** Inscrição Municipal */
  @ApiProperty({ example: 12345, required: false })
  im?: number;

  /** Cidade */
  @ApiProperty({ example: 'Ribeirão Preto', required: false })
  cidade?: string;

  /** Observação */
  @ApiProperty({ example: 'Observação geral', required: false })
  observacao?: string;

  /** Vencimento CD */
  @ApiProperty({ example: '2025-12-31', required: false, type: String })
  vctoCD?: Date;

  /** Histórico */
  @ApiProperty({ example: 'Histórico do cliente', required: false })
  historico?: string;

  /** Arquivo */
  @ApiProperty({ example: 'documento.pdf', required: false })
  arquivo?: string;

  /** Nome do arquivo */
  @ApiProperty({ example: 'documento.pdf', required: false })
  nomearquivo?: string;

  /** Observação de renovação */
  @ApiProperty({ example: 'Renovação automática', required: false })
  obsrenovacao?: string;

  /** Data de aprovação */
  @ApiProperty({ example: '2025-12-31', required: false, type: String })
  dt_aprovacao?: Date;

  /** Hora de aprovação */
  @ApiProperty({ example: '14:00:00', required: false, type: String })
  hr_aprovacao?: Date;

  /** Comissão */
  @ApiProperty({ example: 15.5, required: false })
  comicao?: number;

  /** Validação */
  @ApiProperty({ example: 'validado', required: false })
  validacao?: string;

  /** NFE */
  @ApiProperty({ example: '123456', required: false })
  nfe?: string;

  /** URL da nota */
  @ApiProperty({ example: 'https://nota.exemplo.com', required: false })
  urlnota?: string;

  /** ID FCW Soluti */
  @ApiProperty({ example: '12345678901', required: false })
  id_fcw_soluti?: string;

  /** Data da agenda */
  @ApiProperty({ example: '2025-12-31', required: false, type: String })
  dt_agenda?: Date;

  /** Hora da agenda */
  @ApiProperty({ example: '14:00:00', required: false, type: String })
  hr_agenda?: Date;

  /** Observação da agenda */
  @ApiProperty({ example: 'Cliente confirmou presença', required: false })
  obs_agenda?: string;

  /** Registro CNH */
  @ApiProperty({ example: '123456789', required: false })
  reg_cnh?: string;

  /** ID do agendamento */
  @ApiProperty({ example: 1, required: false })
  id_agendamento?: number;

  /** Data de revogação */
  @ApiProperty({ example: '2025-12-31', required: false, type: String })
  dt_revogacao?: Date;

  /** Data de criação do registro */
  @ApiProperty({ example: '2025-05-09T14:00:00Z' })
  createdAt: Date;

  /** Data de atualização do registro */
  @ApiProperty({ example: '2025-05-09T14:10:00Z', required: false })
  updatedAt?: Date;
}
