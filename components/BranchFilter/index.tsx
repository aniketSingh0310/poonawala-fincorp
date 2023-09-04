import React, { useState } from 'react';
import { FaFilter} from 'react-icons/fa';
import { MdLocationPin} from 'react-icons/md';
import { IoIosPeople} from 'react-icons/io';
import {FcCustomerSupport} from 'react-icons/fc';

const BranchFilter: React.FC<{
  cities: string[];
  onFilterChange: (filters: any) => void;
}> = ({ cities, onFilterChange }) => {
  const [selectedCity, setSelectedCity] = useState('');
  const [customerSizeRange, setCustomerSizeRange] = useState([0, 1500]);
  const [employeeSizeRange, setEmployeeSizeRange] = useState([0, 25]);
  const [sizeError, setSizeError] = useState(false);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  const applyFilters = () => {
    if (customerSizeRange[0] > customerSizeRange[1] || employeeSizeRange[0] > employeeSizeRange[1]) {
      setSizeError(true);
    } else {
      setSizeError(false);
      const filters = {
        city: selectedCity,
        customerSizeRange,
        employeeSizeRange,
      };
      onFilterChange(filters);
    }
  };

  return (
    <div className="bg-white p-4 shadow-lg  border-[#223a72] border-[2px] rounded-lg mx-2">
      <h2 className="text-xl font-semibold  border-b border-[#223a7282] mb-4 flex flex-row items-center gap-1"><FaFilter className='text-[#223a72] w-[13px] h-[13px] '/>Manage Branches</h2>
      <div className="mb-4">
        <label className=" text-gray-700 text-sm font-bold mb-2 flex items-center gap-1">
         <MdLocationPin className='text-[#223a72] w-[13px] h-[13px]'/> City
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
        <label className="flex items-center gap-1 text-gray-700 text-sm font-bold mb-2">
         <IoIosPeople className='text-[#223a72] w-[17px] h-[17px]'/> Customer Size Range: {customerSizeRange[0]} - {customerSizeRange[1]}
        </label>
        Min:
        <input
          type="range"
          min={0}
          max={1500}
          value={customerSizeRange[0]}
          onChange={(e) =>
            setCustomerSizeRange([+e.target.value, customerSizeRange[1]])
          }
          className="w-full"
        />
        Max:
        <input
          type="range"
          min={0}
          max={1500}
          value={customerSizeRange[1]}
          onChange={(e) =>
            setCustomerSizeRange([customerSizeRange[0], +e.target.value])
          }
          className="w-full mt-2"
        />
      </div>
      <div className="mb-4">
        <label className="flex items-center gap-1 text-gray-700 text-sm font-bold mb-2">
          <FcCustomerSupport className='text-[#223a72] w-[17px] h-[17px]'/>Employee Size Range: {employeeSizeRange[0]} - {employeeSizeRange[1]}
        </label>
        Min:
        <input
          type="range"
          min={0}
          max={25}
          value={employeeSizeRange[0]}
          onChange={(e) =>
            setEmployeeSizeRange([+e.target.value, employeeSizeRange[1]])
          }
          className="w-full"
        />
        Max:
        <input
          type="range"
          min={0}
          max={25}
          value={employeeSizeRange[1]}
          onChange={(e) =>
            setEmployeeSizeRange([employeeSizeRange[0], +e.target.value])
          }
          className="w-full mt-2"
        />
      </div>
      <a href='#card'>

      <button
        className="bg-[#223a72] text-white px-4 py-2 scroll rounded-full hover:bg-blue-600 transition-colors"
        onClick={applyFilters}
        >
        Apply Filters
      </button>
        </a>
        {sizeError && (
  <div className="text-red-500 text-center text-sm">Minimum size cannot be greater than maximum size.</div>
)}
    </div>
  );
};

export default BranchFilter;
