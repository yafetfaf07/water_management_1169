import userContext from "../context/UserContext";
import { supabase } from "../createClient";
import { useContext, useState } from "react";
interface Bill {
price:number,
transaction_no:string,
exchange:string,
password:string,
uid:string | undefined
}
const PayingPage = () => {
  const userData = useContext(userContext);
  console.log("Paying page: ",userData?.user);
  const[bill,setbill] = useState<Bill>({
    price:125,
    transaction_no:"",
    exchange:"",
    password:"",
    uid:""
  });

 
  

  const Pay = async() => {
    // const {data} = await supabase.from('bill').insert()
    
  }
  return (
    <>
      <h2 className="text-center text-3xl font-semibold mt-[50px]">Paying Form</h2>

      <div className="w-[90%] mx-auto my-0 ">
          
          <div className="flex flex-col mt-5">
            <span>Price</span>
            <input
              type="text"
              placeholder="Enter price"
              className="border border-gray-300 p-2"
              onChange={(e) => {
                setbill((prevState) => ({
                  ...prevState,price:parseInt(e.target.value,10)
                }))
              }
            }
            />
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
                  ...prevState,exchange:e.target.value
                }))
              }}
            />
          </div>{" "}
        
          <div className="flex flex-col mt-5">
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
          </div>{" "}
          <div className="flex flex-col mt-5">
            <button className="bg-black text-white p-2 font-semibold  hover:opacity-80 " onClick={() => {
            }}>
              Pay
            </button>
          
          </div>
        </div>
    </>
  );
};

export default PayingPage;
