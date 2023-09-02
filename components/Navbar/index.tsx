import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1 px-4">
          {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
          <Image className="btn btn-ghost normal-case" src="/static/pf.png" alt="logo" width={200} height={100} />
        </div>
        <div className="flex-none font-semibold text-[15px]">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Link</a>
            </li>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Centers</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
            <li>
              <details>
                <summary>More</summary>
                <ul className="p-2 bg-base-100 whitespace-nowrap">
                  <li>
                    <a>Get laon</a>
                  </li>
                  <li>
                    <a>Cibil score</a>
                  </li>
                  <li>
                    <a>Credit report</a>
                  </li>
                  
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-max bg-[#223a72]">
         <div className="flex flex-row justify-end items-center">
         <ul className="p-2 text-white flex flex-row gap-3 items-center font-semibold text-[15px] whitespace-nowrap pr-8">
                  <li>
                    <button className="bg-white rounded-full font-semibold text-[#223a72] px-3 py-1">Apply Loan</button>
                  </li>
                  <li>
                    <a>CIBIL score</a>
                  </li>
                  <li>
                    <a>Credit report</a>
                  </li>
                  
                </ul>
         </div>
      </div>
    </div>
  );
};
