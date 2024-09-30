import { useRef } from "react";
import "../App.css";
interface DatatoPass {
  status: string;
}
const BillCard: React.FC<DatatoPass> = ({ status }) => {
  const ref = useRef<HTMLElement>(null);
  

  const btn = () => {
    console.log(ref.current?.classList);
  };
  return (
    <div className="  rounded-md w-[100%] bill-card md:w-[370px]  ">
      <div>
        <span>Bill name:</span>
        <span>Mesk, 2017</span>
      </div>
      <div>
        <span>Date: </span>
        <span>Sept 12,2024</span>
      </div>
      <div>
        <span>Price: </span>
        <span>275 Br</span>
      </div>
      <div>
        <span>Status: </span>
        <span
          ref={ref}
          onClick={() => {
            btn();
          }}
        >
          {status}
        </span>
      </div>
      <div>
        <span>Exchange: </span>
        <span>telebirr</span>
      </div>
    </div>
  );
};

export default BillCard;
