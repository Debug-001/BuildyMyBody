import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017/authcodes';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async function handler(req, res) {
  const { code } = req.body;

  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  try {
    if (!client.isConnected()) await client.connect();
    const database = client.db('authcodes'); 
    const collection = database.collection('codes');
    const existingCode = await collection.findOne({ code: code });
    if (existingCode) {
      return res.status(200).json({ message: 'Authentication completed, product verified.' });
    } else {
      return res.status(404).json({ message: 'Code not found.' });
    }
  } catch (error) {
    console.error('Error verifying code:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}