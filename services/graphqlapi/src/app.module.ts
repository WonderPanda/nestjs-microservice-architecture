import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatalogModule } from './catalog/catalog.module';

// Only generate the TS interfaces when not running in production
const env = process.env.GRAPHQL_ENV;

const gqlModule =
  env === 'production'
    ? GraphQLModule.forRoot()
    : GraphQLModule.forRoot({
        autoSchemaFile: join(process.cwd(), 'src/schema.gql')
      });

@Module({
  imports: [gqlModule, CatalogModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
