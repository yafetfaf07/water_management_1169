import { useContext, useState } from "react";
import { supabase } from "../createClient";
import { useNavigate } from "react-router-dom";
import { Alert } from "antd";
import userContext from "../context/UserContext";
interface toogler {
  register: () => void;
}


const Login: React.FC<toogler> = ({ register }) => {
  const [username, setusername] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const context = useContext(userContext)

  const navigate = useNavigate();

  const loginBtn = async () => {
    const data = await supabase
      .from("user")
      .select("id,user_name")
      .ilike("user_name", username)
      .ilike("password", password);
    console.log(data.data);

    
    
    if (data.data?.length == 0) {
      console.log("Invalid user name or password");
    } else if (data.error) {
      console.log("Error: ", data.error);
    } else {
      const userData = data.data;
      
      context?.setuser({id:userData[0].id, user_name:userData[0].user_name})
        console.log("User Data from login for the purpose of localstroage: ",context?.user?.user_name);
        if(context?.user?.user_name && context.user.id) {
          localStorage.setItem('user-id',context.user.id)          
          localStorage.setItem('user-name',context?.user?.user_name)
        }

        navigate("/dashboard");

     
    }
  };

  return (
    <>
      <Alert type="success" message="Error" closable={true}></Alert>                                                            
      <div className="w-[90%] mx-auto my-0 ">
        <h2 className="text-center text-[30px] p-5 font-bold">Welcome, back</h2>
        <div className="flex flex-col mt-5">
          <span>Username</span>
          <input
            type="text"
            placeholder="Enter user name"
            className="border border-gray-300 p-2"
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col mt-5">
          <span>Password</span>
          <input
            type="password"
            placeholder="Enter password"
            className="border border-gray-300 p-2"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>{" "}
        <div className="flex flex-col mt-5">
          <button
            className="bg-black text-white p-2 font-semibold  hover:opacity-80 "
            onClick={() => {
              loginBtn();
            }}
          >
            Sign in
          </button>
          <span className="text-gray-400 text-center mt-2">
            Don't have an account?{" "}
            <span
              className="text-black font-semibold"
              onClick={() => {
                register();
              }}
            >
              Sign up
            </span>
          </span>
        </div>
      </div>
    </>
  );
};
export default Login;
