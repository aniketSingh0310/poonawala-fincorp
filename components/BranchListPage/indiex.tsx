import React, { useState } from 'react';


import branches from '@/data/branchData';
import BranchFilter from '../BranchFilter';

const BranchListPage: React.FC = () => {
  const [filteredBranches, setFilteredBranches] = useState(branches);

  const handleFilterChange = (filters: any) => {
    const { city, customerSizeRange, employeeSizeRange } = filters;

    const filtered = branches.filter((branch) => {
      if (city && branch.city !== city) return false;
      if (
        branch.customer_size < customerSizeRange[0] ||
        branch.customer_size > customerSizeRange[1]
      )
        return false;
      if (
        branch.employees_size < employeeSizeRange[0] ||
        branch.employees_size > employeeSizeRange[1]
      )
        return false;
      return true;
    });

    setFilteredBranches(filtered);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-4">Branch List</h1>
      <BranchFilter
        cities={[
          'Mumbai',
          'Delhi',
          'Pune',
          'Hyderabad',
          'Bangalore',
          'Indore',
          'Lucknow',
        ]}
        onFilterChange={handleFilterChange}
      />
      <div className="mt-4">
        <ul>
          {filteredBranches.map((branch, index) => (
            <li key={index} className="mb-2">
              {branch.location}, {branch.city} - Customer Size:{' '}
              {branch.customer_size}, Employee Size: {branch.employees_size}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BranchListPage;
