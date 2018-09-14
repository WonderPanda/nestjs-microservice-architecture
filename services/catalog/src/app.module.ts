import { Module } from '@nestjs/common';
import { CatalogController } from './catalog/catalog.controller';

@Module({
  imports: [],
  controllers: [CatalogController],
  providers: []
})
export class AppModule {}
