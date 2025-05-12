import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AgrvService } from './agrv.service';
import { CreateAgrvDto } from './dto/create-agrv.dto';
import { UpdateAgrvDto } from './dto/update-agrv.dto';

@Controller('agrv')
export class AgrvController {
  constructor(private readonly agrvService: AgrvService) {}

  @Post()
  create(@Body() createAgrvDto: CreateAgrvDto) {
    return this.agrvService.create(createAgrvDto);
  }

  @Get()
  findAll() {
    return this.agrvService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agrvService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgrvDto: UpdateAgrvDto) {
    return this.agrvService.update(+id, updateAgrvDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agrvService.remove(+id);
  }
}
