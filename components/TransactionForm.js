// import { useState } from 'react';
// import { Button } from './ui/button';
// import { Input } from './ui/input';
// import { Label } from './ui/label';
// import { Calendar } from 'lucide-react';

// export default function TransactionForm({ onSubmit, initialData = {} }) {
//   const [formData, setFormData] = useState({
//     amount: (initialData?.amount ?? '') || '',
//     date: (initialData?.date ?? new Date().toISOString().split('T')[0]) || new Date().toISOString().split('T')[0],
//     description: (initialData?.description ?? '') || '',
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.amount || isNaN(formData.amount) || formData.amount <= 0) {
//       newErrors.amount = 'Please enter a valid amount';
//     }
//     if (!formData.date) {
//       newErrors.date = 'Please select a date';
//     }
//     if (!formData.description.trim()) {
//       newErrors.description = 'Please enter a description';
//     }
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }
//     try {
//       await onSubmit(formData);
//       setFormData({
//         amount: '',
//         date: new Date().toISOString().split('T')[0],
//         description: '',
//       });
//       setErrors({});
//     } catch (error) {
//       setErrors({ submit: 'Failed to save transaction' });
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white rounded-lg shadow-md">
//       <div>
//         <Label htmlFor="amount">Amount</Label>
//         <Input
//           id="amount"
//           name="amount"
//           type="number"
//           value={formData.amount}
//           onChange={handleChange}
//           placeholder="Enter amount"
//           className={errors.amount ? 'border-red-500' : ''}
//         />
//         {errors.amount && <p className="text-red-500 text-sm">{errors.amount}</p>}
//       </div>
//       <div>
//         <Label htmlFor="date">Date</Label>
//         <Input
//           id="date"
//           name="date"
//           type="date"
//           value={formData.date}
//           onChange={handleChange}
//           className={errors.date ? 'border-red-500' : ''}
//         />
//         {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
//       </div>
//       <div>
//         <Label htmlFor="description">Description</Label>
//         <Input
//           id="description"
//           name="description"
//           type="text"
//           value={formData.description}
//           onChange={handleChange}
//           placeholder="Enter description"
//           className={errors.description ? 'border-red-500' : ''}
//         />
//         {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
//       </div>
//       {errors.submit && <p className="text-red-500 text-sm">{errors.submit}</p>}
//       <Button type="submit" className="w-full">
//         <Calendar className="mr-2 h-4 w-4" /> Save Transaction
//       </Button>
//     </form>
//   );
// }
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Calendar } from 'lucide-react';

export default function TransactionForm({ onSubmit, initialData = {} }) {
  const [formData, setFormData] = useState({
    amount: (initialData?.amount ?? '') || '',
    date: (initialData?.date ?? new Date().toISOString().split('T')[0]) || new Date().toISOString().split('T')[0],
    description: (initialData?.description ?? '') || '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.amount || isNaN(formData.amount) || formData.amount <= 0) {
      newErrors.amount = 'Please enter a valid amount';
    }
    if (!formData.date) {
      newErrors.date = 'Please select a date';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Please enter a description';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      await onSubmit(formData);
      setFormData({
        amount: '',
        date: new Date().toISOString().split('T')[0],
        description: '',
      });
      setErrors({});
    } catch (error) {
      setErrors({ submit: 'Failed to save transaction' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/30 space-y-6 animate-fade-in">
      <div>
        <Label htmlFor="amount" className="text-pink-700 font-semibold">Amount</Label>
        <Input
          id="amount"
          name="amount"
          type="number"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Enter amount"
          className="mt-2 border-pink-400 focus:border-pink-600 focus:ring-pink-600  text-indigo-900 placeholder-white"
        />
        {errors.amount && <p className="text-red-300 text-sm mt-1">{errors.amount}</p>}
      </div>
      <div>
        <Label htmlFor="date" className="text-pink-700 font-semibold">Date</Label>
        <Input
          id="date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          className="mt-2 border-pink-400 focus:border-pink-600 focus:ring-pink-600  text-indigo-900"
        />
        {errors.date && <p className="text-red-300 text-sm mt-1">{errors.date}</p>}
      </div>
      <div>
        <Label htmlFor="description" className="text-pink-700 font-semibold">Description</Label>
        <Input
          id="description"
          name="description"
          type="text"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter description"
          className="mt-2 border-pink-400 focus:border-pink-600 focus:ring-pink-600  text-indigo-900 placeholder-white"
        />
        {errors.description && <p className="text-red-300 text-sm mt-1">{errors.description}</p>}
      </div>
      {errors.submit && <p className="text-red-300 text-sm mt-1">{errors.submit}</p>}
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-pink-500/50"
      >
        <Calendar className="mr-2 h-6 w-6" /> Save Transaction
      </Button>
    </form>
  );
}