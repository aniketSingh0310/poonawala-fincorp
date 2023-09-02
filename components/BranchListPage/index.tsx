import React, { useState } from "react";

import { MdLocationPin } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { FcCustomerSupport } from "react-icons/fc";
import { FaCity } from "react-icons/fa";
import branches from "@/data/branchData";
import BranchFilter from "../BranchFilter";

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
      <BranchFilter
        cities={[
          "Mumbai",
          "Delhi",
          "Pune",
          "Hyderabad",
          "Bangalore",
          "Indore",
          "Lucknow",
        ]}
        onFilterChange={handleFilterChange}
      />
      <h1 className="text-2xl text-[#223a72] font-bold my-4 ml-3">Branches</h1>
      
      <div className="mt-4">
        <div className="flex flex-row flex-wrap gap-[20px] justify-center items-center">
          {filteredBranches.map((branch, index) => (
            <div
              key={index}
              className="card w-96 bg-base-100 shadow-xl border border-[#223a72be] mx-2"
            >
              <div className="card-body">
                <div className="flex  items-center gap-1">
                  <h3 className="flex items-center gap-1"><FaCity className="text-[#223a72] w-[13px] h-[13px]"/>Location:</h3>
                  <h2 className="card-title">{branch.location}</h2>
                </div>
                <div className="flex items-center gap-1">
                  <h3 className="flex items-center gap-1">
                    <MdLocationPin className="text-[#223a72] w-[13px] h-[13px]" />
                    City:
                  </h3>
                  <h2 className="card-title">{branch.city}</h2>
                </div>
                <div className="flex items-center gap-1">
                  <h3 className="flex items-center gap-1">
                    <IoIosPeople className="text-[#223a72] w-[17px] h-[17px]" />
                    Customer count:
                  </h3>
                  <h2 className="card-title">{branch.customer_size}</h2>
                </div>
                <div className="flex items-center gap-1">
                  <h3 className="flex items-center gap-1">
                    <FcCustomerSupport className="text-[#223a72] w-[17px] h-[17px]" />
                    Employee count:
                  </h3>
                  <h2 className="card-title">{branch.employees_size}</h2>
                </div>

                <div className="card-actions justify-end">
                  <button className="btn btn-primary bg-[#223a72] text-white font-semibold">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BranchListPage;
