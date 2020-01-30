#!/usr/bin/env bash

set -e

docker-compose up -d postgres

WAIT_FOR_PG_ISREADY="while ! pg_isready --quiet; do sleep 1; done;"
docker-compose exec postgres bash -c "$WAIT_FOR_PG_ISREADY"

for ENV in development test
do
  # Create database for this environment if it doesn't already exist.
  docker-compose exec postgres \
    su - postgres -c "psql $ENV -c '' || createdb $ENV"

  # Run migrations in this environment.
  docker-compose run --rm -e NODE_ENV=$ENV todo npx knex migrate:latest
done

docker-compose up -d