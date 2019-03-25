import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('catalog')
export class CatalogController {
  @MessagePattern({ type: 'get-catalog-items' })
  public async getCatalogItems(): Promise<{}[]> {
    return [
      {
        id: '1',
        name: 'Epic TShirt',
        description: 'A truly epic t-shirt for those who are daring',
        price: 2900
      },
      {
        id: '2',
        name: 'Noob TShirt',
        description: `Boring t-shirt for noobs who don't deserve better`,
        price: 1100
      }
    ];
  }
}
