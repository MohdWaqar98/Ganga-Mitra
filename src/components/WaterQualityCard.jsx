import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

const WaterQualityCard = ({ title, value, unit, trend, change, icon }) => {
  const getTrendColor = () => {
    if (trend === 'up') return 'text-red-500';
    if (trend === 'down') return 'text-green-500';
    return 'text-gray-500';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl">{icon}</span>
        <div className={`flex items-center ${getTrendColor()}`}>
          {trend === 'up' ? (
            <ArrowUpIcon className="h-4 w-4" />
          ) : trend === 'down' ? (
            <ArrowDownIcon className="h-4 w-4" />
          ) : null}
          <span className="text-sm ml-1">{change}</span>
        </div>
      </div>
      
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <div className="mt-2 flex items-baseline">
        <p className="text-3xl font-semibold text-gray-900">{value}</p>
        <p className="ml-2 text-sm text-gray-500">{unit}</p>
      </div>
    </div>
  );
};

export default WaterQualityCard;