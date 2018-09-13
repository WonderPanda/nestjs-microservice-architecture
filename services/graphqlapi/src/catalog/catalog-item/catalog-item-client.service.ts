import { Injectable } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { CatalogItem } from 'schemas/graphql';

@Injectable()
export class CatalogItemService {
  @Client({ transport: Transport.REDIS })
  client: ClientProxy;

  public async getCatalogItems(): Promise<CatalogItem[]> {
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
