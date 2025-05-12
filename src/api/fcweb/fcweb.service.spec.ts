import { Test, TestingModule } from '@nestjs/testing';
import { FcwebService } from './fcweb.service';

describe('FcwebService', () => {
  let service: FcwebService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FcwebService],
    }).compile();

    service = module.get<FcwebService>(FcwebService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
