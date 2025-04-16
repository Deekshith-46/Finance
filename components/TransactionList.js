// import { Button } from './ui/button';
// import { Trash2, Edit } from 'lucide-react';

// export default function TransactionList({ transactions, onEdit, onDelete }) {
//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full bg-white rounded-lg shadow-md">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="px-4 py-2 text-left">Amount</th>
//             <th className="px-4 py-2 text-left">Date</th>
//             <th className="px-4 py-2 text-left">Description</th>
//             <th className="px-4 py-2 text-left">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {transactions.length === 0 ? (
//             <tr>
//               <td colSpan="4" className="text-center py-4">No transactions found</td>
//             </tr>
//           ) : (
//             transactions.map((transaction) => (
//                 <tr key={transaction._id} className="border-t">
//                   <td className="px-4 py-2">${parseFloat(transaction.amount).toFixed(2)}</td>
//                   <td className="px-4 py-2">{new Date(transaction.date).toLocaleDateString()}</td>
//                   <td className="px-4 py-2">{transaction.description}</td>
//                   <td className="px-4 py-2 flex space-x-2">
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       onClick={() => onEdit(transaction)}
//                     >
//                       <Edit className="h-4 w-4" />
//                     </Button>
//                     <Button
//                       variant="destructive"
//                       size="sm"
//                       onClick={() => onDelete(transaction._id)}
//                     >
//                       <Trash2 className="h-4 w-4" />
//                     </Button>
//                   </td>
//                 </tr>
//               ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

import { Button } from './ui/button';
import { Trash2, Edit } from 'lucide-react';

export default function TransactionList({ transactions, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white/20 backdrop-blur-md rounded-xl shadow-2xl border border-white/30">
        <thead>
          <tr className="bg-gradient-to-r from-pink-600 to-purple-700 text-white">
            <th className="px-6 py-4 text-left font-bold">Amount</th>
            <th className="px-6 py-4 text-left font-bold">Date</th>
            <th className="px-6 py-4 text-left font-bold">Description</th>
            <th className="px-6 py-4 text-left font-bold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center py-6 text-pink-300 animate-pulse">No transactions found</td>
            </tr>
          ) : (
            transactions.map((transaction, index) => (
              <tr
                key={transaction._id}
                className={`border-t ${index % 2 === 0 ? 'bg-white/10' : 'bg-white/20'} hover:bg-pink-100/20 transition-all duration-300 animate-fade-in`}
              >
                <td className="px-6 py-4 text-black">${parseFloat(transaction.amount).toFixed(2)}</td>
                <td className="px-6 py-4 text-black">{new Date(transaction.date).toLocaleDateString()}</td>
                <td className="px-6 py-4 text-black">{transaction.description}</td>
                <td className="px-6 py-4 flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-pink-500 text-white hover:bg-pink-600 border-pink-400"
                    onClick={() => onEdit(transaction)}
                  >
                    <Edit className="h-5 w-5 text-white" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    className="bg-red-500 text-white hover:bg-red-600 border-red-400"
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