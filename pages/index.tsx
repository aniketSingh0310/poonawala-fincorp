import BranchListPage from "@/components/BranchListPage/indiex";
import Filter from "@/components/Filter";
import { Navbar } from "@/components/Navbar";


export default function Home() {
  return (
   <div>
<Navbar/>
{/* <Filter/> */}
<BranchListPage/>
   </div>
  )
}
