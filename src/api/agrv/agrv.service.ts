import { Injectable } from '@nestjs/common';
import { CreateAgrvDto } from './dto/create-agrv.dto';
import { UpdateAgrvDto } from './dto/update-agrv.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class AgrvService {
  constructor(private prisma: PrismaService) {}

  async create(createAgrvDto: CreateAgrvDto) {
    try {
      const MaxPolo = await this.prisma.aGRV.findFirst({
        orderBy: { numeropolo: 'desc' },
        select: { numeropolo: true },
      });

      const dados = {
        ...createAgrvDto,
        ...(!createAgrvDto.senha && {
          senha: createAgrvDto.whatsapp,
          email2: createAgrvDto.whatsapp,
        }),
        ...(createAgrvDto.senha && {
          senha: createAgrvDto.senha,
          email2: createAgrvDto.senha,
        }),
        ...(!createAgrvDto.numeropolo
          ? { numeropolo: MaxPolo?.numeropolo + 1 }
          : { numeropolo: createAgrvDto.numeropolo }),
      };
      const agrv = await this.prisma.aGRV.create({ data: dados });
      return agrv;
    } catch (error) {
      throw new HttpException(
        { message: error.message || 'Erro ao criar registro' },
        HttpStatus.BAD_REQUEST,
      );
    } finally {
      this.prisma.$disconnect();
    }
  }

  async findAll() {
    try {
      const agrv = await this.prisma.aGRV.findMany();
      return agrv;
    } catch (error) {
      throw new HttpException(
        { message: error.message || 'Erro ao buscar registros' },
        HttpStatus.BAD_REQUEST,
      );
    } finally {
      this.prisma.$disconnect();
    }
  }

  async findOne(id: number) {
    try {
      const agrv = await this.prisma.aGRV.findUnique({ where: { idagrv: id } });
      return agrv;
    } catch (error) {
      throw new HttpException(
        { message: error.message || 'Erro ao buscar registro' },
        HttpStatus.BAD_REQUEST,
      );
    } finally {
      this.prisma.$disconnect();
    }
  }

  async update(id: number, updateAgrvDto: UpdateAgrvDto) {
    try {
      const agrv = await this.prisma.aGRV.update({
        where: { idagrv: id },
        data: updateAgrvDto,
      });
      return agrv;
    } catch (error) {
      throw new HttpException(
        { message: error.message || 'Erro ao atualizar registro' },
        HttpStatus.BAD_REQUEST,
      );
    } finally {
      this.prisma.$disconnect();
    }
  }

  async remove(id: number) {
    try {
      await this.prisma.aGRV.update({
        where: { idagrv: id },
        data: { painel_agrv: null, email: null, senha: null, numeropolo: null },
      });
      return { message: `Registro ${id} deletado com sucesso` };
    } catch (error) {
      throw new HttpException(
        { message: error.message || 'Erro ao deletar registro' },
        HttpStatus.BAD_REQUEST,
      );
    } finally {
      this.prisma.$disconnect();
    }
  }
}
