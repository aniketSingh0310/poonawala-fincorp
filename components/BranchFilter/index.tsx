import React, { useState } from 'react';

const BranchFilter: React.FC<{
  cities: string[];
  onFilterChange: (filters: any) => void;
}> = ({ cities, onFilterChange }) => {
  const [selectedCity, setSelectedCity] = useState('');
  const [customerSizeRange, setCustomerSizeRange] = useState([0, 1500]);
  const [employeeSizeRange, setEmployeeSizeRange] = useState([0, 25]);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  const handleCustomerSizeChange = (values: [number, number]) => {
    setCustomerSizeRange(values);
  };

  const handleEmployeeSizeChange = (values: [number, number]) => {
    setEmployeeSizeRange(values);
  };

  const applyFilters = () => {
    const filters = {
      city: selectedCity,
      customerSizeRange,
      employeeSizeRange,
    };
    onFilterChange(filters);
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Filter Branches</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          City
        </label>
        <select
          className="border p-2 w-full"
          value={selectedCity}
          onChange={handleCityChange}
        >
          <option value="">All Cities</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Customer Size Range
        </label>
        <input
          type="range"
          min={0}
          max={1500}
          value={customerSizeRange[0]}
          onChange={(e) =>
            handleCustomerSizeChange([+e.target.value, customerSizeRange[1]])
          }
          className="w-full"
        />
        <input
          type="range"
          min={0}
          max={1500}
          value={customerSizeRange[1]}
          onChange={(e) =>
            handleCustomerSizeChange([customerSizeRange[0], +e.target.value])
          }
          className="w-full mt-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Employee Size Range
        </label>
        <input
          type="range"
          min={0}
          max={25}
          value={employeeSizeRange[0]}
          onChange={(e) =>
            handleEmployeeSizeChange([+e.target.value, employeeSizeRange[1]])
          }
          className="w-full"
        />
        <input
          type="range"
          min={0}
          max={25}
          value={employeeSizeRange[1]}
          onChange={(e) =>
            handleEmployeeSizeChange([employeeSizeRange[0], +e.target.value])
          }
          className="w-full mt-2"
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
        onClick={applyFilters}
      >
        Apply Filters
      </button>
    </div>
  );
};

export default BranchFilter;
