import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";
import { CSSTransition } from "react-transition-group";

 const MobileNav = () => {
    const [showMenu, setShowMenu] = useState(false);
  

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

    return (
        <div className="md:hidden">
    <div className="flex justify-between items-center px-6 md:px-20">
    <Link href={"/"}>
      <Image
        src={"/static/pf.png"}
        alt="logo"
        height={60}
        width={120}
        className="mt-4"
      />
    </Link>
    {!showMenu && (
      <button onClick={toggleMenu} className="">
        
        <CiMenuFries className='text-[#223a72] mt-4 w-[20px] h-[20px] font-bold'/>
      </button>
    )}

    <CSSTransition
      in={showMenu}
      timeout={300}
      classNames="menu"
      unmountOnExit
    >
      <div className="fixed top-0 bottom-0 right-0 h-full w-[300px]  bg-white bg-opacity-60 backdrop-filter backdrop-blur-md z-[999] overflow-hidden">
        <div
          onClick={toggleMenu}
          className="flex justify-end p-12 cursor-pointer"
        >
          <RxCross2 className="text-gray-300 hover:text-white w-8 h-8" />
        </div>
        <div className="">
          <div className="flex flex-col gap-5 text-black text-xl md:text-3xl">
            <Link href={"#"}>
              <div
                className="cursor-pointer border-b border-white/10 pb-4 pl-4 md:pl-20  font-poppins font-medium hover:text-[#223a72]"
                onClick={toggleMenu}
              >
                Home
              </div>
            </Link>
            
            <span
              className="cursor-pointer border-b border-white/10 pb-4 pl-4 md:pl-20  font-poppins font-medium hover:text-[#223a72]"
              
            >
              Centers
            </span>
            <Link href={"#"}>
              <div
                className="cursor-pointer border-b border-white/10 pb-4 pl-4 md:pl-20  font-poppins font-medium hover:text-[#223a72]"
                
              >
                About Us
              </div>
            </Link>
            <span
              className="cursor-pointer border-b border-white/10 pb-4 pl-4 md:pl-20  font-poppins font-medium hover:text-[#223a72]"
              
            >
              Contact Us
            </span>
          </div>
        </div>
      </div>
    </CSSTransition>
  </div>
  <div className="w-full mt-2 justify-center h-max bg-[#223a72]">
         <div className="flex flex-row justify-end items-center">
         <ul className="py-2 text-white flex flex-row gap-3 items-center font-semibold text-[15px] whitespace-nowrap pr-8">
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
  )
}
export default MobileNav;