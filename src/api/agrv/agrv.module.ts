import { Module } from '@nestjs/common';
import { AgrvService } from './agrv.service';
import { AgrvController } from './agrv.controller';

@Module({
  controllers: [AgrvController],
  providers: [AgrvService],
})
export class AgrvModule {}
