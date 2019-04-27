const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer, gql } = require('apollo-server-express');

const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');

const PORT = 8000;
const mongoDB = 'mongodb://localhost/test_pack'

const app = express();

app.use(cors('*'));

mongoose.connect(mongoDB, {useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context: {
  //   models
  // }
});

server.applyMiddleware({ app });
// server.applyMiddleware({ app, path: '/graphql' });

app.listen(PORT || 8000, () => {
  console.log(`App running on port: ${PORT}!`);
})