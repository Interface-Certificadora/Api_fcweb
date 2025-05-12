import { Module } from '@nestjs/common';
import { FcwebService } from './fcweb.service';
import { FcwebController } from './fcweb.controller';

@Module({
  controllers: [FcwebController],
  providers: [FcwebService],
})
export class FcwebModule {}
