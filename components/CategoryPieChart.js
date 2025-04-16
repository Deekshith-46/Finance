import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded shadow-lg border border-gray-300">
        <p className="text-gray-800">{`Category: ${payload[0].name}`}</p>
        <p className="text-gray-800">{`Amount: ₹${payload[0].value.toFixed(2)}`}</p>
      </div>
    );
  }
  return null;
};

const CategoryPieChart = ({ data }) => {
  return (
    <div className="h-64">
      {data.length === 0 ? (
        <div className="flex items-center justify-center h-full text-gray-500">
          No category data available
        </div>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default CategoryPieChart;