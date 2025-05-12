import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { FcwebModule } from './api/fcweb/fcweb.module';
import { AgrvModule } from './api/agrv/agrv.module';

@Module({
  imports: [PrismaModule, FcwebModule, AgrvModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
