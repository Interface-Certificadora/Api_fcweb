import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { FcwebModule } from './api/fcweb/fcweb.module';
import { AgrvModule } from './api/agrv/agrv.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, FcwebModule, AgrvModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
