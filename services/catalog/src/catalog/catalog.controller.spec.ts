import { Test, TestingModule } from '@nestjs/testing';
import { CatalogController } from './catalog.controller';

describe('Catalog Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [CatalogController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: CatalogController = module.get<CatalogController>(CatalogController);
    expect(controller).toBeDefined();
  });
});
