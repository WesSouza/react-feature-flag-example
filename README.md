# React Feature Flag Example

This is a sample project created with [create-react-app](https://github.com/facebook/create-react-app) that showcases the usage of feature flags (or feature toggles) using React.

See [src/components/Feature.js](./src/components/Feature.js) for more details.


## Configuring GraphQL

This app expects a GraphQL endpoint that satisfies this schema:

```graphql
type Query {
  systemFeatures: [String!]!
}
```

It should be added to a `.env.local` file as such:

```
REACT_APP_GRAPHQL_ENDPOINT=https://example.org/graphql
```

We recommend forking [this pad](https://launchpad.graphql.com/8vz0375wpq).


## Installing and running

```sh
yarn
yarn start
```
