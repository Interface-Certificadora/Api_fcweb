import { Test, TestingModule } from '@nestjs/testing';
import { AgrvController } from './agrv.controller';
import { AgrvService } from './agrv.service';

describe('AgrvController', () => {
  let controller: AgrvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgrvController],
      providers: [AgrvService],
    }).compile();

    controller = module.get<AgrvController>(AgrvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
