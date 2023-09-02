import BranchListPage from "@/components/BranchListPage";
import Filter from "@/components/Filter";
import MobileNav from "@/components/MobileNavbar";
import { Navbar } from "@/components/Navbar";


export default function Home() {
  return (
   <div>
<Navbar/>
<MobileNav/>
{/* <Filter/> */}
<BranchListPage/>
   </div>
  )
}
