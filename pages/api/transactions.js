import connectToDatabase from '../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const client = await connectToDatabase();
  const db = client.db('finance');
  const collection = db.collection('transactions');

  switch (req.method) {
    case 'GET':
      try {
        const transactions = await collection.find({}).toArray();
        res.status(200).json(transactions);
      } catch (error) {
        console.error('GET error:', error);
        res.status(500).json({ error: 'Failed to fetch transactions' });
      }
      break;

    case 'POST':
      try {
        const transaction = req.body;
        const result = await collection.insertOne({
          ...transaction,
          amount: parseFloat(transaction.amount) || 0,
          date: new Date(transaction.date) || new Date(),
          description: transaction.description || 'No description',
        });
        res.status(201).json(result);
      } catch (error) {
        console.error('POST error:', error);
        res.status(500).json({ error: 'Failed to create transaction' });
      }
      break;

    case 'PUT':
      try {
        const { _id, ...updateData } = req.body;
        await collection.updateOne(
          { _id: new ObjectId(_id) },
          { $set: { ...updateData, amount: parseFloat(updateData.amount), date: new Date(updateData.date) } }
        );
        res.status(200).json({ message: 'Transaction updated' });
      } catch (error) {
        console.error('PUT error:', error);
        res.status(500).json({ error: 'Failed to update transaction' });
      }
      break;

    case 'DELETE':
      try {
        const { _id } = req.body;
        await collection.deleteOne({ _id: new ObjectId(_id) });
        res.status(200).json({ message: 'Transaction deleted' });
      } catch (error) {
        console.error('DELETE error:', error);
        res.status(500).json({ error: 'Failed to delete transaction' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}