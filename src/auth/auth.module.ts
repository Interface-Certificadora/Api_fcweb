import { Global, Module } from '@nestjs/common';
import { AuthGuard } from './auth.guard';

@Global()
@Module({
  providers: [AuthGuard],
})
export class AuthModule {}
