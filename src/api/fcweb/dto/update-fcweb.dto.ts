import { PartialType } from '@nestjs/mapped-types';
import { CreateFcwebDto } from './create-fcweb.dto';

export class UpdateFcwebDto extends PartialType(CreateFcwebDto) {}
