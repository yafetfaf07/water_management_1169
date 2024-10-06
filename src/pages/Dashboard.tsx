import { DollarSign } from "lucide-react";
import "../App.css";
import BillCard from "../components/BillCard";
import { useContext, useEffect } from "react";
import userContext from "../context/UserContext";
import { supabase } from "../createClient";
const Dashboard = () => {
  const context = useContext(userContext);
  console.log("Dashboard-page: ", context?.user);
  // localStorage.setItem('user-name',context?.user?.user_name as string)
  // localStorage.setItem('user-id',context?.user?.id as string)
  
  const userName = localStorage.getItem('user-name')
  useEffect(() => {
const fetchBill = async () => {
  const id = localStorage.getItem('user-id')

  const {data,error} = await supabase.from('bill').select('*').eq('uid',id)
  console.log("Bill: ",data);
}
fetchBill()
  }, []);
  return (
    <>
      <section>
        <nav className="flex flex-col justify-between items-center bg-white p-3">
          <h2 className="bg-white font-semibold text-2xl">{userName}</h2>
          <div className="flex items-center bg-white ">
            <input
              type="text"
              placeholder="Search"
              className="rounded-md p-3"
            />
          </div>
        </nav>
        <div className=" md:flex">
          <div className="bg-white h-20 w-[85%] mx-auto my-0 flex justify-between items-center rounded-lg  mt-3 md:w-[300px] h-32 text-2xl">
            <div className="flex flex-col bg-white ml-5">
              <span className="bg-white font-semibold text-3xl">5 </span>
              <span className="bg-white">Paid fees</span>
            </div>

            <DollarSign className="bg-green-200 text-green-700 mr-5 w-10 h-10 rounded-full"></DollarSign>
          </div>
          <div className="bg-white h-20 w-[85%] mx-auto my-0 flex justify-between items-center rounded-lg  mt-3 md:w-[300px] h-32 text-2xl">
            <div className="flex flex-col bg-white ml-5">
              <span className="bg-white font-semibold text-3xl">2 </span>
              <span className="bg-white">Unpaid fees</span>
            </div>

            <DollarSign className="bg-red-200 text-red-700 mr-5 w-10 h-10 rounded-full"></DollarSign>
          </div>
          <div className="bg-white h-20 w-[85%] mx-auto my-0 flex justify-between items-center rounded-lg  mt-3 md:w-[300px] h-32 text-2xl">
            <div className="flex flex-col bg-white ml-5">
              <span className="bg-white text-3xl font-semibold">2 </span>
              <span className="bg-white">Pending fees</span>
            </div>

            <DollarSign className="bg-yellow-200 text-yellow-700 mr-5 w-10 h-10 rounded-full"></DollarSign>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 w-[90%] mx-auto my-0 justify-center  mt-5 md:w-[85%] gap-10 p-1 ">
          <BillCard status="PAID" />
          <BillCard status="UNPAID" />
          <BillCard status="PENDING" />
          <BillCard status="PENDING" />
          <BillCard status="PAID" />
          <BillCard status="UNPAID" />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
