import { useState, useEffect } from 'react';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import MonthlyChart from '../components/MonthlyChart';
import CategoryPieChart from '../components/CategoryPieChart';
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
        setError(errorData.error || 'Failed to add transaction');
      }
    } catch (error) {
      console.error('Add error:', error);
      setError('An error occurred while adding the transaction');
    }
  };

  const handleEditTransaction = async (formData) => {
    try {
      if (!editingTransaction?._id) {
        setError('No transaction selected for editing');
        return;
      }
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
        setError(errorData.error || 'Failed to update transaction');
      }
    } catch (error) {
      console.error('Edit error:', error);
      setError('An error occurred while updating the transaction');
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
        setError(errorData.error || 'Failed to delete transaction');
      }
    } catch (error) {
      console.error('Delete error:', error);
      setError('An error occurred while deleting the transaction');
    }
  };

  // Calculate total expenses
  const totalExpenses = transactions.reduce((sum, trans) => sum + parseFloat(trans.amount || 0), 0).toFixed(2);

  // Get category breakdown
  const categoryBreakdown = transactions.reduce((acc, trans) => {
    acc[trans.category] = (acc[trans.category] || 0) + parseFloat(trans.amount || 0);
    return acc;
  }, {});
  const categoryData = Object.keys(categoryBreakdown).map(key => ({
    name: key,
    value: categoryBreakdown[key],
  }));

  // Get most recent transactions (last 3)
  const recentTransactions = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br p-6">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
          Personal Finance Visualizer
        </h1>
      </header>
      {error && (
        <p className="text-red-400 bg-red-100 p-3 rounded-lg shadow-md mb-6 text-center">{error}</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <TransactionForm onSubmit={handleAddTransaction} />
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-300">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Monthly Expenses Overview</h2>
          <MonthlyChart transactions={transactions} />
        </div>
      </div>
      {/* Dashboard Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Expenses Card */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-300">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Total Expenses</h3>
          <p className="text-2xl text-gray-700">₹{totalExpenses}</p>
        </div>
        {/* Category Breakdown Card */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-300">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Category Breakdown</h3>
          <CategoryPieChart data={categoryData} />
        </div>
        {/* Recent Transactions Card */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-300">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Recent Transactions</h3>
          <ul className="space-y-2">
            {recentTransactions.map((trans) => (
              <li key={trans._id} className="text-gray-700">
                {new Date(trans.date).toLocaleDateString()} - ₹{trans.amount} - {trans.description} ({trans.category})
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-300">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Transaction History</h2>
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
        <DialogContent className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-800">Edit Transaction</DialogTitle>
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