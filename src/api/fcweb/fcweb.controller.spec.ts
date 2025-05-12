import { Test, TestingModule } from '@nestjs/testing';
import { FcwebController } from './fcweb.controller';
import { FcwebService } from './fcweb.service';

describe('FcwebController', () => {
  let controller: FcwebController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FcwebController],
      providers: [FcwebService],
    }).compile();

    controller = module.get<FcwebController>(FcwebController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
