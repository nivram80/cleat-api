import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './src/schema.js';
import mongoose from 'mongoose';

const port = 3000;
const app = express();

app.use('/', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

const uri = "mongodb://admin:MsHsDbiCmqG1MA7M@cleat-db-shard-00-00-itt5r.mongodb.net:27017,cleat-db-shard-00-01-itt5r.mongodb.net:27017,cleat-db-shard-00-02-itt5r.mongodb.net:27017/Cleat?ssl=true&replicaSet=cleat-db-shard-0&authSource=admin";
mongoose.connect(uri, { useMongoClient: true });
const db = mongoose.connection;

db.on('error', () => {
  console.log('---FAILED TO CONNECT TO MONGOOSE')
});

db.once('open', () => {
  console.log('+++CONNECTED TO MONGOOSE')
});

app.listen(port);
console.log('+++GRAPHQL API SERVER RUNNING AT LOCALHOST: ' + port);
