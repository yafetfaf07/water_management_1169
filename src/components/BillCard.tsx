import { useContext, useEffect, useRef } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import userContext from "../context/UserContext";
interface DatatoPass {
  bill_name:string;
  price:number;
  createdDate:string;
  id:string
}
const BillCard: React.FC<DatatoPass> = ({  bill_name, price, createdDate, id }) => {
  const date = new Date(createdDate);
  const options: Intl.DateTimeFormatOptions = {month:"short", day:'numeric', year:"numeric"}
  const formattedDate=date.toLocaleString("en-US",options);
  const context = useContext(userContext);
  
  const ref = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  useEffect(() => {
    
  }, []);
  const btn = () => {
    console.log(ref.current?.classList);
  };
  return (
    <div
      className="rounded-md w-[100%] bill-card md:w-[370px]"
      onClick={() => {
      navigate('/payment',{state:{bid:id},})
      }}
    >
      <div>
        <span>Bill name:</span>
        <span>{bill_name}</span>
      </div>
      <div>
        <span>Date: </span>
        <span>{formattedDate}</span>
      </div>
      <div>
        <span>Price: </span>
        <span>{price}</span>
      </div>
      <div>
        <span>Status: </span>
        <span className="text-red-600 bg-red-200 font-semibold p-2"
          ref={ref}
          onClick={() => {
            btn();
          }}
        >
          UNPAID
        </span>
      </div>
      <div>
        <span>Exchange: </span>
        <span>N/A</span>
      </div>
    </div>
  );
};

export default BillCard;
