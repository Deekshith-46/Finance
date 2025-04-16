import { Button } from './ui/button';
import { Trash2, Edit } from 'lucide-react';

export default function TransactionList({ transactions, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white/20 backdrop-blur-md rounded-xl shadow-lg border border-gray-300">
        <thead>
          <tr className="bg-gradient-to-r from-blue-400 to-purple-400 text-white">
            <th className="px-6 py-4 text-left font-bold">Amount</th>
            <th className="px-6 py-4 text-left font-bold">Date</th>
            <th className="px-6 py-4 text-left font-bold">Description</th>
            <th className="px-6 py-4 text-left font-bold">Category</th>
            <th className="px-6 py-4 text-left font-bold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center py-6 text-gray-500">No transactions found</td>
            </tr>
          ) : (
            transactions.map((transaction, index) => (
              <tr
                key={transaction._id}
                className={`border-t ${index % 2 === 0 ? 'bg-white/10' : 'bg-white/20'} hover:bg-blue-100/20 transition-all duration-300`}
              >
                <td className="px-6 py-4 text-gray-700">₹{parseFloat(transaction.amount).toFixed(2)}</td>
                <td className="px-6 py-4 text-gray-700">{new Date(transaction.date).toLocaleDateString()}</td>
                <td className="px-6 py-4 text-gray-700">{transaction.description}</td>
                <td className="px-6 py-4 text-gray-700">{transaction.category}</td>
                <td className="px-6 py-4 flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-blue-400 text-white hover:bg-blue-500 border-blue-300"
                    onClick={() => onEdit(transaction)}
                  >
                    <Edit className="h-5 w-5 text-white" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    className="bg-red-400 text-white hover:bg-red-500 border-red-300"
                    onClick={() => onDelete(transaction._id)}
                  >
                    <Trash2 className="h-5 w-5 text-white" />
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}