
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-pink-200 p-2 rounded shadow-lg border border-pink-300">
                <p className="text-lg font-bold text-indigo-900">₹{payload[0].value.toFixed(2)}</p>
                <p className="text-sm text-gray-700">Month: {payload[0].payload.name}</p>
            </div>
        );
    }
    return null;
};

const MonthlyChart = ({ transactions }) => {
    const monthlyData = transactions.reduce((acc, transaction) => {
        const date = new Date(transaction.date);
        const month = date.toLocaleString('default', { month: 'long', year: 'numeric' });
        acc[month] = (acc[month] || 0) + parseFloat(transaction.amount);
        return acc;
    }, {});

    const chartData = Object.keys(monthlyData).map(month => ({
        name: month,
        amount: monthlyData[month],
    }));

    return (
        <div className="h-80">
            {chartData.length === 0 ? (
                <div className="flex items-center justify-center h-full text-gray-500">
                    No expense data available
                </div>
            ) : (
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                        <XAxis dataKey="name" stroke="text-yellow-500" fontSize={12} />
                        <YAxis stroke="text-yellow-500" fontSize={12} />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend wrapperStyle={{ color: 'text-yellow-500', fontSize: '14px' }} />
                        <Bar
                            dataKey="amount"
                            fill="#7F00FF" // Gray fill as per image
                            name="Expenses"
                            barSize={30}
                            radius={[10, 10, 0, 0]}
                            onMouseEnter={() => { }}
                        />
                    </BarChart>
                </ResponsiveContainer>
            )}
        </div>
    );
};

export default MonthlyChart;
