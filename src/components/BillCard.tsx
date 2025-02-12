import { useEffect, useRef, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
// import userContext from "../context/UserContext";
interface DatatoPass {
  bill_name: string;
  price: number;
  createdDate: string;
  id: string;
  status: string;
  user_exchange: string;
}
const BillCard: React.FC<DatatoPass> = ({
  bill_name,
  price,
  createdDate,
  id,
  status,
  user_exchange,
}) => {
  const date = new Date(createdDate);
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = date.toLocaleString("en-US", options);

  const ref = useRef<HTMLElement>(null);

  const btn = () => {
    console.log(ref.current?.classList);
  };
  const [strings, setstrings] = useState<string>();
  useEffect(() => {
    if (status === "PENDING") {
      setstrings("bg-yellow-200 text-yellow-700 p-2");
    } else if (status === "PAID") {
      setstrings("bg-green-200 text-green-700 p-2");
    } else if (status === "UNPAID") {
      setstrings("bg-red-200 text-red-700 p-2");
    }
  }, [status]);
  return (
    <Link to={`/payment/${id}`}>
      <div className="rounded-md w-[100%] bill-card md:w-[370px]">
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
          <span
            className={strings}
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
          <span>{user_exchange}</span>
        </div>
      </div>
    </Link>
  );
};

export default BillCard;
