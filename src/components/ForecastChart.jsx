import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';

const ForecastChart = ({ data }) => {
  const formattedData = data.map(item => ({
    ...item,
    date: format(new Date(item.date), 'MMM dd'),
  }));

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border">
          <p className="font-semibold">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: {entry.value} {getUnit(entry.name)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const getUnit = (parameter) => {
    switch (parameter) {
      case 'BOD':
      case 'Dissolved Oxygen':
        return 'mg/L';
      case 'Fecal Coliform':
        return 'MPN/100ml';
      case 'Turbidity':
        return 'NTU';
      default:
        return '';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={formattedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="bod" 
              name="BOD"
              stroke="#1e40af" 
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 8 }}
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="dissolvedOxygen" 
              name="Dissolved Oxygen"
              stroke="#059669" 
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 8 }}
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="fecalColiform" 
              name="Fecal Coliform"
              stroke="#dc2626" 
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 8 }}
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="turbidity" 
              name="Turbidity"
              stroke="#d97706" 
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ForecastChart;