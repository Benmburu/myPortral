//Connecting to database.

import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://kdeftec:oDr2MTdA2Tnm2C0A@cluster0.z0fwvzd.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB Atlas connection string

let cachedClient = null;

async function connectToDatabase() {
  if (cachedClient && cachedClient.isConnected()) {
    return cachedClient;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db();

  cachedClient = client;

  return client;
}

export default connectToDatabase;
