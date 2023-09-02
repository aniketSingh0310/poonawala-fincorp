import { useState,useEffect } from 'react'
import styles from "./filter.module.css";
import branches from '@/data/branchData';


const Filter = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [data, SetData]= useState<any>(branches);
    const [selectedCities, setSelectedCities] = useState<string[]>([]);

    

    const handleCityCheckboxChange = (city: string) => {
        if (selectedCities.includes(city)) {
          setSelectedCities(selectedCities.filter((c) => c !== city));
        } else {
          setSelectedCities([...selectedCities, city]);
        }
      };
  console.log({data});
  
  return (
    
    <div>
        <div className='w-full h-max pt-7'>
            <div className='bg-blue-300  '>

          <p className='font-bold  text-[35px] pl-5 text-[#223a72]'>Manage branches</p>
          <div>

          </div>
          <p>sort by:</p>
          <div id='filterCont' className='flex flex-row gap-4'>
            <div className='flex flex-col space-y-3'>
                <p>City</p>
                <ul>
        {branches.map(branch => (
          <li key={branch.city}>
            <label>
              <input
                type="checkbox"
                checked={selectedCities.includes(branch.city)}
                onChange={() => handleCityCheckboxChange(branch.city)}
              />
              {branch.city}
            </label>
          </li>
        ))}
      </ul>
            </div>

          </div>

            </div>


        </div>
    </div>
  )
}
export default Filter;