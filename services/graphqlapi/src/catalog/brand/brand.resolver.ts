import { BrandService } from './brand.service';
import { Query } from '@nestjs/graphql';
import { Brand } from '../models/brand';

export class BrandResolver {
  constructor(private readonly brandService: BrandService) {}

  @Query(returns => [Brand], { name: 'brands' })
  public async getBrands(): Promise<Brand[]> {
    return [
      {
        id: '1',
        name: 'Nike',
        items: [
          {
            id: '123',
            name: 'Stuff',
            price: 4200,
            brand: {
              id: '1',
              name: 'Nike'
            }
          }
        ]
      }
    ];
  }
}
