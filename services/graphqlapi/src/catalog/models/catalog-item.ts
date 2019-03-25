import { Field, ID, ObjectType } from 'type-graphql';
import { Brand } from './brand';

@ObjectType()
export class CatalogItem {
  @Field(type => ID)
  id: string;

  @Field({ description: 'The name of the catalog item' })
  name: string;

  @Field({ nullable: true, description: 'The description of the catalog item' })
  description?: string;

  @Field(type => Number, {
    description: 'The price of the catalog item'
  })
  price: number;

  @Field(type => Brand, { description: 'The brand that produces this item' })
  brand: Brand;
}
