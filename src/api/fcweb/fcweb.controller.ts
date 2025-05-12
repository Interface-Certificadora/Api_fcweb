import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FcwebService } from './fcweb.service';
import { CreateFcwebDto } from './dto/create-fcweb.dto';
import { UpdateFcwebDto } from './dto/update-fcweb.dto';
import { CreateImportDadosDto } from './dto/create-inport-dados.dto';

@Controller('fcweb')
export class FcwebController {
  constructor(private readonly fcwebService: FcwebService) {}

  @Post()
  async create(@Body() createFcwebDto: CreateFcwebDto) {
    return this.fcwebService.create(createFcwebDto);
  }

  @Get()
  async findAll() {
    try {
      return await this.fcwebService.findAll();
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fcwebService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFcwebDto: UpdateFcwebDto) {
    return this.fcwebService.update(+id, updateFcwebDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fcwebService.remove(+id);
  }

  @Post('import')
  async InportData(@Body() dados: CreateImportDadosDto) {
    return this.fcwebService.InportData(dados);
  }
}
