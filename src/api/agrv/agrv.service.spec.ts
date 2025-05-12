import { Test, TestingModule } from '@nestjs/testing';
import { AgrvService } from './agrv.service';

describe('AgrvService', () => {
  let service: AgrvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgrvService],
    }).compile();

    service = module.get<AgrvService>(AgrvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
