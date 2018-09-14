import { Injectable } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { CatalogItem } from 'schemas/graphql';

const REDIS_HOST = process.env.REDIS_HOST || 'localhost';
const REDIS_PORT = process.env.REDIS_PORT || 6379;

@Injectable()
export class CatalogItemService {
  @Client({
    transport: Transport.REDIS,
    options: { url: `redis://${REDIS_HOST}:${REDIS_PORT}` }
  })
  client: ClientProxy;

  public async getCatalogItems(): Promise<CatalogItem[]> {
    const response = await this.client.send<CatalogItem[]>(
      { type: 'get-catalog-items' },
      { someImaginaryParams: 42 }
    );
    return response.toPromise();
  }
}
