import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateFcwebDto } from './dto/create-fcweb.dto';
import { UpdateFcwebDto } from './dto/update-fcweb.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateImportDadosDto } from './dto/create-inport-dados.dto';

@Injectable()
export class FcwebService {
  constructor(private readonly prisma: PrismaService) {}
  create(createFcwebDto: CreateFcwebDto) {
    try {
      const fcweb = this.prisma.fcweb.create({ data: createFcwebDto });
      return fcweb;
    } catch (error) {
      throw new HttpException(
        { message: error.message || 'Erro ao criar registro' },
        HttpStatus.BAD_REQUEST,
      );
    } finally {
      this.prisma.$disconnect();
    }
  }

  findAll() {
    try {
      const fcweb = this.prisma.fcweb.findMany();
      return fcweb;
    } catch (error) {
      throw new HttpException(
        { message: error.message || 'Erro ao buscar registros' },
        HttpStatus.BAD_REQUEST,
      );
    } finally {
      this.prisma.$disconnect();
    }
  }

  findOne(id: number) {
    try {
      const fcweb = this.prisma.fcweb.findUnique({ where: { id } });
      return fcweb;
    } catch (error) {
      throw new HttpException(
        { message: error.message || 'Erro ao buscar registro' },
        HttpStatus.BAD_REQUEST,
      );
    } finally {
      this.prisma.$disconnect();
    }
  }

  update(id: number, data: UpdateFcwebDto) {
    try {
      const fcweb = this.prisma.fcweb.update({ where: { id }, data });
      return fcweb;
    } catch (error) {
      throw new HttpException(
        { message: error.message || 'Erro ao atualizar registro' },
        HttpStatus.BAD_REQUEST,
      );
    } finally {
      this.prisma.$disconnect();
    }
  }

  remove(id: number) {
    try {
      // const fcweb = this.prisma.fcweb.delete({ where: { id } });
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

  async InportData(dados: CreateImportDadosDto) {
    try {
      const dadosImport = {
        ...dados,
        ...(!dados.formapgto && { formapgto: 'PENDURA' }),
        ...(!dados.criou_fc && { criou_fc: 'API' }),
      };
      const fcweb = await this.prisma.fcweb.create({ data: dadosImport });
      return fcweb;
    } catch (error) {
      throw new HttpException(
        { message: error.message || 'Erro ao importar dados' },
        HttpStatus.BAD_REQUEST,
      );
    } finally {
      this.prisma.$disconnect();
    }
  }
}
