import { Module } from '@nestjs/common';
import { BrandService } from './brand/brand.service';
import { CatalogItemService } from './catalog-item/catalog-item-client.service';
import { CatalogItemResolver } from './catalog-item/catalog-item.resolver';

@Module({
  providers: [CatalogItemService, CatalogItemResolver, BrandService],
  exports: [CatalogItemResolver]
})
export class CatalogModule {}
