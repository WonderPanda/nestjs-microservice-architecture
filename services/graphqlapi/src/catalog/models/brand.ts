import { Field, ID, ObjectType } from 'type-graphql';
import { CatalogItem } from './catalog-item';

@ObjectType()
export class Brand {
  @Field(type => ID)
  id: string;

  @Field({ description: 'The name of the brand' })
  name: string;

  @Field(type => [CatalogItem], {
    nullable: true,
    description: 'Items that this brand sells '
  })
  items?: CatalogItem[];
}
