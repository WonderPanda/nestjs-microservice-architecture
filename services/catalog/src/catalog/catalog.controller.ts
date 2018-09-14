import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('catalog')
export class CatalogController {
  @MessagePattern({ type: 'get-catalog-items' })
  public async getCatalogItems(): Promise<{}[]> {
    return [
      {
        id: '123',
        name: 'Epic TShirt',
        description: 'A truly epic t-shirt for those who are daring',
        price: 2900
      }
    ];
  }
}
