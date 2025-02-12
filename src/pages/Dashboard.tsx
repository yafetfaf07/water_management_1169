import { DollarSign } from "lucide-react";
import "../App.css";
import BillCard from "../components/BillCard";
import { useEffect, useState } from "react";
// import userContext from "../context/UserContext";
import { supabase } from "../createClient";
const Dashboard = () => {
  // const context = useContext(userContext);
  const id = localStorage.getItem("user-id");

  console.log("Dashboard-page: ", id);
  interface Bill {
    id: string;
    created_at: string;
    price: number;
    bill_name: string;
  }
  interface BillWithStatus {
    bid: string;
    uid: string;
    transaction_no: string;
    user_exchange: string;
    created_at: string;
    status: string;
    bill_name:string
  }
  const [bills, setbills] = useState<Bill[]>([
    { bill_name: "", id: "", price: 0, created_at: "" },
  ]);
  const [billWithStatus, setbillWithStatus] = useState<BillWithStatus[]>([
    {
      bid: "",
      status: "",
      uid: "",
      transaction_no: "",
      created_at: "",
      user_exchange: "",
      bill_name:""
    },
  ]);


  // console.log("Bill Id's pls: ",billId);

  // localStorage.setItem('user-name',context?.user?.user_name as string)
  // localStorage.setItem('user-id',context?.user?.id as string)

  const userName = localStorage.getItem("user-name");
  useEffect(() => {


    const unPaidBill = async () => {
      const { data } = await supabase.rpc("get_bills_not_in_reference", {
        input_uid: id,
      });
      console.log("Unpaid Billlo: ", data);
      setbills(data);
      const billStatusData = await supabase.rpc("get_bill_reference_details", {
        input_uid:id
      })

      if (billStatusData.error) {
        console.log("Bill Error: ", billStatusData.error);
      }
      if (billStatusData.data) {
        setbillWithStatus(billStatusData.data);
        console.log("Wechew good: ",billStatusData.data)
      }
    };
    // billIdFetch();
    unPaidBill();
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
              <span className="bg-white font-semibold text-3xl">
                {billWithStatus.length}{" "}
              </span>
              <span className="bg-white"> Pending & Paid fees</span>
            </div>

            <DollarSign className="bg-green-200 text-green-700 mr-5 w-10 h-10 rounded-full"></DollarSign>
          </div>
          <div className="bg-white h-20 w-[85%] mx-auto my-0 flex justify-between items-center rounded-lg  mt-3 md:w-[300px] h-32 text-2xl">
            <div className="flex flex-col bg-white ml-5">
              <span className="bg-white font-semibold text-3xl">
                {bills.length}
              </span>
              <span className="bg-white">Unpaid fees</span>
            </div>

            <DollarSign className="bg-red-200 text-red-700 mr-5 w-10 h-10 rounded-full"></DollarSign>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 w-[90%] mx-auto my-0 justify-center  mt-5 md:w-[85%] gap-10 p-1 ">
          {bills.map((b, i) => {
            return (
              <BillCard
                key={i}
                bill_name={b.bill_name}
                price={b.price}
                createdDate={b.created_at}
                id={b.id}
                status="UNPAID"
                user_exchange=""
              />
            );
          })}
          <div>
            <h2 className="block">Pending & Paid bills</h2>
          </div>

          <br></br>
          {billWithStatus.map( (b, i) => {
        
            return (
              <BillCard
                bill_name={b.bill_name}
                id={b.bid}
                createdDate={b.created_at}
                price={125}
                key={i}
                status={b.status}
                user_exchange={b.user_exchange}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Dashboard;
