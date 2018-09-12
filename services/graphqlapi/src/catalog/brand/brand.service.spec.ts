import { Test, TestingModule } from '@nestjs/testing';
import { BrandService } from './brand.service';

describe('BrandService', () => {
  let service: BrandService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrandService],
    }).compile();
    service = module.get<BrandService>(BrandService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
