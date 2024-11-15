import { useLocation } from "react-router-dom";
import userContext from "../context/UserContext";
import { supabase } from "../createClient";
import { useContext, useState } from "react";
interface Bill {
// price:number,
transaction_no:string,
user_exchange:string,
// password:string,
uid:string 
bid:string
}
const PayingPage = () => {
  const userData = useContext(userContext);
  const id = localStorage.getItem('user-id');
  

  // console.log("Paying page: ",userData?.user);
  const location = useLocation();
  const[bill,setbill] = useState<Bill>({
    transaction_no:"",
    user_exchange:"",
    // password:"",
    uid: id as string,
    bid:location.state.bid
  });

 
  

  const Pay = async() => {
    const {data,error} = await supabase.from('bill_reference').insert(bill)
    if(error) {
      console.log("Error: ", error);
    }
    
  }
  return (
    <>
      <h2 className="text-center text-3xl font-semibold mt-[50px]">Paying Form</h2>

      <div className="w-[90%] mx-auto my-0 ">
          
          <div className="flex flex-col mt-5">
            <span>Price</span>
            {/* <input
              type="text"
              placeholder="Enter price"
              className="border border-gray-300 p-2"
              onChange={(e) => {
                setbill((prevState) => ({
                  ...prevState,price:parseInt(e.target.value,10)
                }))
              }
            }
            /> */}
          </div>{" "}
          <div className="flex flex-col mt-5">
            <span>Transaction No</span>
            <input
              type="text"
              placeholder="Enter transaction no."
              className="border border-gray-300 p-2"
              onChange={(e) => {
                setbill((prevState) => ({
                  ...prevState,transaction_no:e.target.value
                }))
              }}
            />
          </div>{" "}
          <div className="flex flex-col mt-5">
            <span>Choice Of Exchange</span>
            <input
              type="text"
              placeholder="CBE, Awash etc."
              className="border border-gray-300 p-2"
              onChange={(e) => {
                setbill((prevState) => ({
                  ...prevState,user_exchange:e.target.value
                }))
              }}
            />
          </div>{" "}
        
          {/* <div className="flex flex-col mt-5">
            <span>Password</span>
            <input
              type="password"
              placeholder="Enter password"
              className="border border-gray-300 p-2"
          onChange={(e) => {
            setbill((prevState) => (
              {
                ...prevState, password:e.target.value
              }
            ))
          }}
              
            />
          </div>{" "} */}
          <div className="flex flex-col mt-5">
            <button className="bg-black text-white p-2 font-semibold  hover:opacity-80 " onClick={() => {
              Pay()
            }}>
              Pay
            </button>
          
          </div>
        </div>
    </>
  );
};

export default PayingPage;
