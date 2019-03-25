import { Query, Resolver } from '@nestjs/graphql';
// import { CatalogItem } from '../../schemas/graphql';
import { CatalogItemService } from './catalog-item-client.service';
import { CatalogItem } from '../models/catalog-item';

@Resolver(of => CatalogItem)
export class CatalogItemResolver {
  constructor(private readonly catalogItemService: CatalogItemService) {}

  @Query(returns => [CatalogItem])
  public async getCatalogItems(): Promise<CatalogItem[]> {
    return this.catalogItemService.getCatalogItems();
  }
}
