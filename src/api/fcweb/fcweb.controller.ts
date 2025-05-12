import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { FcwebService } from './fcweb.service';
import { CreateFcwebDto } from './dto/create-fcweb.dto';
import { UpdateFcwebDto } from './dto/update-fcweb.dto';
import { CreateImportDadosDto } from './dto/create-inport-dados.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import {
  ApiBasicAuth,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { FcwebEntity } from './entities/fcweb.entity';
import { FcwebAllEntity } from './entities/fcwebAll.entity';

@Controller('fcweb')
export class FcwebController {
  constructor(private readonly fcwebService: FcwebService) {}

  @Post()
  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Cria um novo registro',
    tags: ['FCWeb'],
    description: 'Cria um novo registro',
  })
  @ApiBasicAuth()
  @ApiOkResponse({ description: 'Created', type: FcwebEntity })
  @ApiUnauthorizedResponse({
    description:
      'Usuário ou senha inválidos || Header Authorization inválido ou ausente',
    type: String,
  })
  @ApiForbiddenResponse({
    description: 'Forbidden || Error',
    type: String,
  })
  async create(@Body() createFcwebDto: CreateFcwebDto) {
    return this.fcwebService.create(createFcwebDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Busca todos os registros',
    tags: ['FCWeb'],
    description: 'Busca todos os registros',
  })
  @ApiBasicAuth()
  @ApiUnauthorizedResponse({
    description:
      'Usuário ou senha inválidos || Header Authorization inválido ou ausente',
    type: String,
  })
  @ApiForbiddenResponse({
    description: 'Forbidden || Error',
    type: String,
  })
  @ApiOkResponse({ type: [FcwebAllEntity] })
  async findAll() {
    try {
      return await this.fcwebService.findAll();
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Busca um registro por ID',
    tags: ['FCWeb'],
    description: 'Busca um registro por ID',
  })
  @ApiBasicAuth()
  @ApiUnauthorizedResponse({
    description:
      'Usuário ou senha inválidos || Header Authorization inválido ou ausente',
    type: String,
  })
  @ApiForbiddenResponse({
    description: 'Forbidden || Error',
    type: String,
  })
  @ApiOkResponse({ type: FcwebEntity })
  findOne(@Param('id') id: string) {
    return this.fcwebService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualiza um registro',
    tags: ['FCWeb'],
    description: 'Atualiza um registro',
  })
  @UseGuards(AuthGuard)
  @ApiBasicAuth()
  @ApiUnauthorizedResponse({
    description:
      'Usuário ou senha inválidos || Header Authorization inválido ou ausente',
    type: String,
  })
  @ApiForbiddenResponse({
    description: 'Forbidden || Error',
    type: String,
  })
  @ApiOkResponse({ type: FcwebEntity })
  update(@Param('id') id: string, @Body() updateFcwebDto: UpdateFcwebDto) {
    return this.fcwebService.update(+id, updateFcwebDto);
  }

  @Post('import')
  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Importa dados',
    tags: ['FCWeb'],
    description: 'Importa dados',
  })
  @ApiBasicAuth()
  @ApiUnauthorizedResponse({
    description:
      'Usuário ou senha inválidos || Header Authorization inválido ou ausente',
    type: String,
  })
  @ApiForbiddenResponse({
    description: 'Forbidden || Error',
    type: String,
  })
  @ApiOkResponse({ type: FcwebEntity })
  async InportData(@Body() dados: CreateImportDadosDto) {
    return this.fcwebService.InportData(dados);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deleta um registro',
    tags: ['FCWeb'],
    description: 'Deleta um registro',
  })
  @UseGuards(AuthGuard)
  @ApiBasicAuth()
  @ApiUnauthorizedResponse({
    description:
      'Usuário ou senha inválidos || Header Authorization inválido ou ausente',
    type: String,
  })
  @ApiForbiddenResponse({
    description: 'Forbidden || Error',
    type: String,
  })
  @ApiOkResponse({ type: String })
  remove(@Param('id') id: string) {
    return this.fcwebService.remove(+id);
  }
}
