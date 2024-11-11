import React from 'react';
import { MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

const LocationHeader = ({ name, coordinates, temperature, temperatureChange, lastUpdated }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-start space-x-4">
          <div className="p-2 bg-blue-50 rounded-lg">
            <MapPinIcon className="h-6 w-6 text-ganga-blue" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Monitoring Station: {name}</h1>
            <p className="text-gray-500">{coordinates}</p>
          </div>
        </div>
        
        <div className="mt-4 md:mt-0 flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🌡️</span>
            <div>
              <p className="text-xl font-semibold">{temperature}°C</p>
              <p className="text-sm text-gray-500">{temperatureChange}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-500">
            <ClockIcon className="h-5 w-5" />
            <div>
              <p className="text-sm">Last Updated</p>
              <p className="text-sm font-medium">{lastUpdated}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationHeader;