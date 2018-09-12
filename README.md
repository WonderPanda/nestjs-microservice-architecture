# Nestjs Microservice Architecture

## Project Goals

This project aims to demonstrate a real world example application of a microservice architecture leveraging best of class Node and Typescript tooling.

## Running the Project

Docker is awesome.

Just use `docker-compose up -d` at the root of the repository. Once the services are running you the API can be viewed at
`localhost:4200/graphql`


#### Making changes to Services

If you've made a change to a service and want to redeploy it with docker compose without bringing down the other services,
just use `docker-compose up -d --no-deps --build <serviceName>` where serviceName is one of the named services from the
docker-compose.yml file. 