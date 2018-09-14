# Nestjs Microservice Architecture

## Project Goals

This project aims to demonstrate a real world example application of a microservice architecture leveraging best of class Node and Typescript tooling.

## Running the Project

### Docker

Docker is awesome.

Just use `docker-compose up -d` at the root of the repository. Once the services are running you the API can be viewed at
`localhost:4200/graphql`

If you'd prefer to only run the backend data services (currently Redis and RabbitMQ) so you can hack on the Nest services, just use the data only compose file.
`docker-compose -f docker-compose.data-only.yml up -d`

### Locally

Make sure that you've copied over the `.env.example` file for each service into `.env` so that the services can be configured properly.


### Making changes to Services

If you've made a change to a service and want to redeploy it with docker compose without bringing down the other services,
just use `docker-compose up -d --no-deps --build <serviceName>` where serviceName is one of the named services from the
docker-compose.yml file. 

## GraphQL

GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data.

This project uses GraphQL as the glue between microservices and is therefore agnostic to the datastores used be the individual services.

An example query that can be executed in the playground at `http://localhost:4200/graphql` is
```
{
  getCatalogItems {
    id
    name
    description
    price
  }
}
```