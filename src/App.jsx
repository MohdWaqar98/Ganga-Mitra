import React, { useState } from 'react';
import WaterQualityCard from './components/WaterQualityCard';
import ForecastChart from './components/ForecastChart';
import LocationHeader from './components/LocationHeader';
import { ArrowPathIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const currentMetrics = [
  { 
    id: 1, 
    title: 'Biochemical Oxygen Demand', 
    value: '2.1', 
    unit: 'mg/L', 
    trend: 'down',
    change: '5% from yesterday',
    icon: '⚡'
  },
  { 
    id: 2, 
    title: 'Dissolved Oxygen', 
    value: '7.8', 
    unit: 'mg/L', 
    trend: 'up',
    change: '3% from yesterday',
    icon: '💧'
  },
  { 
    id: 3, 
    title: 'Fecal Coliform', 
    value: '430', 
    unit: 'MPN/100ml', 
    trend: 'up',
    change: '12% from yesterday',
    icon: '🦠'
  },
  { 
    id: 4, 
    title: 'Turbidity', 
    value: '45', 
    unit: 'NTU', 
    trend: 'up',
    change: '8% from yesterday',
    icon: '💨'
  }
];

const locationInfo = {
  name: "Varanasi Ghat",
  coordinates: "25.3176° N, 83.0064° E",
  temperature: "24.5",
  temperatureChange: "2% from yesterday",
  lastUpdated: new Date().toLocaleString()
};

const forecastData = [
  { 
    date: '2024-03-10', 
    bod: 2.8,
    dissolvedOxygen: 7.5,
    fecalColiform: 420,
    turbidity: 43
  },
  { 
    date: '2024-03-11', 
    bod: 2.6,
    dissolvedOxygen: 7.8,
    fecalColiform: 410,
    turbidity: 41
  },
  { 
    date: '2024-03-12', 
    bod: 2.9,
    dissolvedOxygen: 7.3,
    fecalColiform: 440,
    turbidity: 46
  },
  { 
    date: '2024-03-13', 
    bod: 2.7,
    dissolvedOxygen: 7.6,
    fecalColiform: 425,
    turbidity: 44
  },
  { 
    date: '2024-03-14', 
    bod: 2.5,
    dissolvedOxygen: 7.9,
    fecalColiform: 400,
    turbidity: 40
  }
];

function App() {
  const [showLocationSearch, setShowLocationSearch] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-ganga-blue shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <span className="text-ganga-light text-2xl">🌊</span>
              <span className="text-white text-xl font-bold">Ganga Mitra</span>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setShowLocationSearch(!showLocationSearch)}
                className="text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
              <button className="text-white flex items-center space-x-1 bg-blue-700 px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                <ArrowPathIcon className="h-4 w-4" />
                <span>Refresh Data</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showLocationSearch && (
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search monitoring stations..."
                className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>
        )}

        <LocationHeader {...locationInfo} />

        <div className="mb-8 mt-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Current Water Quality Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentMetrics.map(metric => (
              <WaterQualityCard
                key={metric.id}
                {...metric}
              />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5-Day Water Quality Forecast</h2>
          <div className="grid grid-cols-1 gap-6">
            <ForecastChart data={forecastData} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">About Water Quality Parameters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center">
                <span className="mr-2">⚡</span>
                BOD (Biochemical Oxygen Demand)
              </h3>
              <p className="text-gray-600">Measures the amount of oxygen required by microorganisms to decompose organic matter in water.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center">
                <span className="mr-2">💧</span>
                Dissolved Oxygen
              </h3>
              <p className="text-gray-600">Indicates the amount of oxygen available for aquatic life. Higher values generally indicate better water quality.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center">
                <span className="mr-2">🦠</span>
                Fecal Coliform
              </h3>
              <p className="text-gray-600">Bacteria that indicate the presence of disease-causing organisms. Lower values are better.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center">
                <span className="mr-2">💨</span>
                Turbidity
              </h3>
              <p className="text-gray-600">Measures the cloudiness of water caused by suspended particles. Lower values indicate clearer water.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;