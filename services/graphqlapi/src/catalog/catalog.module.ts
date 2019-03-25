import { Module } from '@nestjs/common';
import { BrandService } from './brand/brand.service';
import { CatalogItemService } from './catalog-item/catalog-item-client.service';
import { CatalogItemResolver } from './catalog-item/catalog-item.resolver';
import { BrandResolver } from './brand/brand.resolver';

@Module({
  providers: [
    CatalogItemService,
    CatalogItemResolver,
    BrandService,
    BrandResolver
  ],
  exports: [CatalogItemResolver]
})
export class CatalogModule {}
