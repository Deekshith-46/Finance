const { MongoClient } = require('mongodb');

let client;
let clientPromise;

const uri = process.env.MONGODB_URI;
const options = {};

if (!uri) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

async function connectToDatabase() {
  if (client) {
    return client;
  }
  client = await MongoClient.connect(uri, options);
  return client;
}

module.exports = connectToDatabase;