// import { useState, useEffect } from 'react';
// import TransactionForm from '../components/TransactionForm';
// import TransactionList from '../components/TransactionList';
// import MonthlyChart from '../components/MonthlyChart';
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';

// export default function Home() {
//   const [transactions, setTransactions] = useState([]);
//   const [editingTransaction, setEditingTransaction] = useState(null);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchTransactions();
//   }, []);

//   const fetchTransactions = async () => {
//     try {
//       const response = await fetch('/api/transactions');
//       const data = await response.json();
//       console.log('Fetched transactions:', data);
//       if (response.ok) {
//         setTransactions(data);
//         setError(null);
//       } else {
//         setError(data.error || 'Failed to fetch transactions');
//       }
//     } catch (error) {
//       console.error('Fetch error:', error);
//       setError('Failed to fetch transactions');
//     }
//   };

//   const handleAddTransaction = async (formData) => {
//     try {
//       const response = await fetch('/api/transactions', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });
//       if (response.ok) {
//         await fetchTransactions();
//       } else {
//         const errorData = await response.json();
//         throw new Error(errorData.error || 'Failed to add transaction');
//       }
//     } catch (error) {
//       console.error('Add error:', error);
//       throw error;
//     }
//   };

//   const handleEditTransaction = async (formData) => {
//     try {
//       const response = await fetch('/api/transactions', {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ _id: editingTransaction._id, ...formData }),
//       });
//       if (response.ok) {
//         await fetchTransactions();
//         setIsDialogOpen(false);
//         setEditingTransaction(null);
//       } else {
//         const errorData = await response.json();
//         throw new Error(errorData.error || 'Failed to update transaction');
//       }
//     } catch (error) {
//       console.error('Edit error:', error);
//       throw error;
//     }
//   };

//   const handleDeleteTransaction = async (id) => {
//     try {
//       const response = await fetch('/api/transactions', {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ _id: id }),
//       });
//       if (response.ok) {
//         await fetchTransactions();
//       } else {
//         const errorData = await response.json();
//         throw new Error(errorData.error || 'Failed to delete transaction');
//       }
//     } catch (error) {
//       console.error('Delete error:', error);
//       throw error;
//     }
//   };

//   return (
//     <div className="container mx-auto p-4 max-w-4xl">
//       <h1 className="text-3xl font-bold text-center mb-8">Personal Finance Visualizer</h1>
//       {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//       <div className="grid gap-6">
//         <TransactionForm onSubmit={handleAddTransaction} />
//         <MonthlyChart transactions={transactions} />
//         <TransactionList
//           transactions={transactions}
//           onEdit={(transaction) => {
//             setEditingTransaction(transaction);
//             setIsDialogOpen(true);
//           }}
//           onDelete={handleDeleteTransaction}
//         />
//       </div>
//       <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Edit Transaction</DialogTitle>
//           </DialogHeader>
//           <TransactionForm
//             onSubmit={handleEditTransaction}
//             initialData={editingTransaction}
//           />
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

// import { useState, useEffect } from 'react';
// import TransactionForm from '../components/TransactionForm';
// import TransactionList from '../components/TransactionList';
// import MonthlyChart from '../components/MonthlyChart';
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';

// export default function Home() {
//   const [transactions, setTransactions] = useState([]);
//   const [editingTransaction, setEditingTransaction] = useState(null);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchTransactions();
//   }, []);

//   const fetchTransactions = async () => {
//     try {
//       const response = await fetch('/api/transactions');
//       const data = await response.json();
//       console.log('Fetched transactions:', data);
//       if (response.ok) {
//         setTransactions(data);
//         setError(null);
//       } else {
//         setError(data.error || 'Failed to fetch transactions');
//       }
//     } catch (error) {
//       console.error('Fetch error:', error);
//       setError('Failed to fetch transactions');
//     }
//   };

//   const handleAddTransaction = async (formData) => {
//     try {
//       const response = await fetch('/api/transactions', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });
//       if (response.ok) {
//         await fetchTransactions();
//       } else {
//         const errorData = await response.json();
//         throw new Error(errorData.error || 'Failed to add transaction');
//       }
//     } catch (error) {
//       console.error('Add error:', error);
//       throw error;
//     }
//   };

//   const handleEditTransaction = async (formData) => {
//     try {
//       const response = await fetch('/api/transactions', {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ _id: editingTransaction._id, ...formData }),
//       });
//       if (response.ok) {
//         await fetchTransactions();
//         setIsDialogOpen(false);
//         setEditingTransaction(null);
//       } else {
//         const errorData = await response.json();
//         throw new Error(errorData.error || 'Failed to update transaction');
//       }
//     } catch (error) {
//       console.error('Edit error:', error);
//       throw error;
//     }
//   };

//   const handleDeleteTransaction = async (id) => {
//     try {
//       const response = await fetch('/api/transactions', {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ _id: id }),
//       });
//       if (response.ok) {
//         await fetchTransactions();
//       } else {
//         const errorData = await response.json();
//         throw new Error(errorData.error || 'Failed to delete transaction');
//       }
//     } catch (error) {
//       console.error('Delete error:', error);
//       throw error;
//     }
//   };

//   return (
//     <div className="container mx-auto p-4 max-w-4xl">
//       <h1 className="text-3xl font-bold text-center mb-8">Personal Finance Visualizer</h1>
//       {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//       <div className="grid gap-6">
//         <TransactionForm onSubmit={handleAddTransaction} />
//         <MonthlyChart transactions={transactions} />
//         <TransactionList
//           transactions={transactions}
//           onEdit={(transaction) => {
//             setEditingTransaction(transaction);
//             setIsDialogOpen(true);
//           }}
//           onDelete={handleDeleteTransaction}
//         />
//       </div>
//       <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Edit Transaction</DialogTitle>
//           </DialogHeader>
//           <TransactionForm
//             onSubmit={handleEditTransaction}
//             initialData={editingTransaction}
//           />
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }


import { useState, useEffect } from 'react';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import MonthlyChart from '../components/MonthlyChart';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';

export default function Home() {
  const [transactions, setTransactions] = useState([]);
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await fetch('/api/transactions');
      const data = await response.json();
      console.log('Fetched transactions:', data);
      if (response.ok) {
        setTransactions(data);
        setError(null);
      } else {
        setError(data.error || 'Failed to fetch transactions');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setError('Failed to fetch transactions');
    }
  };

  const handleAddTransaction = async (formData) => {
    try {
      const response = await fetch('/api/transactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        await fetchTransactions();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to add transaction');
      }
    } catch (error) {
      console.error('Add error:', error);
      throw error;
    }
  };

  const handleEditTransaction = async (formData) => {
    try {
      const response = await fetch('/api/transactions', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _id: editingTransaction._id, ...formData }),
      });
      if (response.ok) {
        await fetchTransactions();
        setIsDialogOpen(false);
        setEditingTransaction(null);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update transaction');
      }
    } catch (error) {
      console.error('Edit error:', error);
      throw error;
    }
  };

  const handleDeleteTransaction = async (id) => {
    try {
      const response = await fetch('/api/transactions', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _id: id }),
      });
      if (response.ok) {
        await fetchTransactions();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to delete transaction');
      }
    } catch (error) {
      console.error('Delete error:', error);
      throw error;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  p-6 text-white">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent animate-pulse">
          Personal Finance Visualizer
        </h1>
      </header>
      {error && (
        <p className="text-red-300 bg-red-900 p-3 rounded-lg shadow-lg mb-6 text-center animate-fade-in">{error}</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <TransactionForm onSubmit={handleAddTransaction} />
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20">
          <h2 className="text-2xl font-semibold text-pink-700 mb-4">Monthly Expenses Overview</h2>
          <MonthlyChart transactions={transactions} />
        </div>
      </div>
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20">
        <h2 className="text-2xl font-semibold text-pink-300 mb-4">Transaction History</h2>
        <TransactionList
          transactions={transactions}
          onEdit={(transaction) => {
            setEditingTransaction(transaction);
            setIsDialogOpen(true);
          }}
          onDelete={handleDeleteTransaction}
        />
      </div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-indigo-900">Edit Transaction</DialogTitle>
          </DialogHeader>
          <TransactionForm
            onSubmit={handleEditTransaction}
            initialData={editingTransaction}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}