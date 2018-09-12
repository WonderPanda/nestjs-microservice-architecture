import { Test, TestingModule } from '@nestjs/testing';
import { CatalogItemService } from './catalog-item-client.service';

describe('CatalogItemService', () => {
  let service: CatalogItemService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatalogItemService]
    }).compile();
    service = module.get<CatalogItemService>(CatalogItemService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
