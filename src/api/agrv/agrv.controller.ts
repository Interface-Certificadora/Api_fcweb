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
import { AgrvService } from './agrv.service';
import { CreateAgrvDto } from './dto/create-agrv.dto';
import { UpdateAgrvDto } from './dto/update-agrv.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import {
  ApiBasicAuth,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AgrvEntity } from './entities/agrv.entity';

@Controller('agrv')
export class AgrvController {
  constructor(private readonly agrvService: AgrvService) {}

  @Post()
  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Cria um novo registro',
    tags: ['AGRV'],
    description: 'Cria um novo registro de AGRV (Agente de regitro externo)',
  })
  @ApiBasicAuth()
  @ApiOkResponse({ description: 'Created', type: AgrvEntity })
  @ApiUnauthorizedResponse({
    description:
      'Usuário ou senha inválidos || Header Authorization inválido ou ausente',
    type: String,
  })
  @ApiForbiddenResponse({
    description: 'Forbidden || Error',
    type: String,
  })
  create(@Body() createAgrvDto: CreateAgrvDto) {
    return this.agrvService.create(createAgrvDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Busca todos os registros',
    tags: ['AGRV'],
    description: 'Busca todos os registros de AGRV (Agente de regitro externo)',
  })
  @ApiBasicAuth()
  @ApiOkResponse({ type: [AgrvEntity] })
  @ApiUnauthorizedResponse({
    description:
      'Usuário ou senha inválidos || Header Authorization inválido ou ausente',
    type: String,
  })
  @ApiForbiddenResponse({
    description: 'Forbidden || Error',
    type: String,
  })
  findAll() {
    return this.agrvService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Busca um registro por ID',
    tags: ['AGRV'],
    description: 'Busca um registro por ID de AGRV (Agente de regitro externo)',
  })
  @ApiBasicAuth()
  @ApiOkResponse({ type: AgrvEntity })
  @ApiUnauthorizedResponse({
    description:
      'Usuário ou senha inválidos || Header Authorization inválido ou ausente',
    type: String,
  })
  @ApiForbiddenResponse({
    description: 'Forbidden || Error',
    type: String,
  })
  findOne(@Param('id') id: string) {
    return this.agrvService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Atualiza um registro',
    tags: ['AGRV'],
    description: 'Atualiza um registro de AGRV (Agente de regitro externo)',
  })
  @ApiBasicAuth()
  @ApiOkResponse({ type: AgrvEntity })
  @ApiUnauthorizedResponse({
    description:
      'Usuário ou senha inválidos || Header Authorization inválido ou ausente',
    type: String,
  })
  @ApiForbiddenResponse({
    description: 'Forbidden || Error',
    type: String,
  })
  update(@Param('id') id: string, @Body() updateAgrvDto: UpdateAgrvDto) {
    return this.agrvService.update(+id, updateAgrvDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Deleta um registro',
    tags: ['AGRV'],
    description: 'Deleta um registro de AGRV (Agente de regitro externo)',
  })
  @ApiBasicAuth()
  @ApiOkResponse({ type: String })
  @ApiUnauthorizedResponse({
    description:
      'Usuário ou senha inválidos || Header Authorization inválido ou ausente',
    type: String,
  })
  @ApiForbiddenResponse({
    description: 'Forbidden || Error',
    type: String,
  })
  remove(@Param('id') id: string) {
    return this.agrvService.remove(+id);
  }
}
