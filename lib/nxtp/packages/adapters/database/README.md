# Local Setup

- Run Postgres locally:

```sh
docker run -p 5432:5432 -e POSTGRES_PASSWORD=qwerty postgres
```

- Run database migrations:

```sh
yarn workspace @connext/cartographer-poller dbmate up
```

- Install [`dbmate`](https://github.com/amacneil/dbmate) (instructions for Mac OS / Unix):

```sh
brew install dbmate
```

- Create `.env` to point at local database (or export DATABASE_URL):

```sh
DATABASE_URL=postgres://postgres:qwerty@localhost:5432/connext?sslmode=disable
```

# Updating DB Schema

In order to update the database schema, create a new migration:

```sh
yarn workspace @connext/nxtp-adapters-database dbmate new migration_name
```

Edit the migration file and run the migration:

```sh
yarn workspace @connext/nxtp-adapters-database dbmate up
```

Create the Typescript schema using [Zapatos](https://jawj.github.io/zapatos/):

```sh
yarn workspace @connext/nxtp-adapters-database zapatos
```
