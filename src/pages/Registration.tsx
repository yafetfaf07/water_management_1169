import { useState } from "react";
import pic from "../assets/images/pexels-sora-shimazaki-5668849.jpg";
import { supabase } from "../createClient";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
const Registration = () => {
  const[login,setlogin] = useState<boolean>(true);
  const navigate = useNavigate();
  const floorList = [];
  for (let i = 1; i < 14; i++) {
    floorList.push(i);
  }
  interface User {
    fname:string,
    lname:string,
    phone_no:string,
    house_no:string,
    floor_no:string,
    user_name:string,
    password:string
  }
  const[users,setusers] = useState<User>({
    fname:"",
    lname:"",
    phone_no:"",
    house_no:"",
    floor_no:"",
    user_name:"",
    password:""
  })
  const changeToRegister = () => {
    setlogin(false);
  }
  // console.log(users);

  const RegisterBtn = async() => {
    const{error} = await supabase.from('user').insert(users);
    if(error) {
      console.log("Error: ",error);
    }
    else {

    }
    
  }

  if(login) {
    return (
      <>
      <Login register={changeToRegister}  />
      </>
    )
  }
else {
  return (
    <>
      <section className="flex flex-col ">
        <div className="w-[90%] mx-auto my-0 ">
          <h2 className="text-center text-[30px] p-5 font-bold">
            Create Your Account
          </h2>
          <div className="flex flex-col mt-5 ">
            <span>First Name</span>
            <input
              type="text"
              placeholder="Enter first name"
              className="border border-gray-300 p-2"
              onChange={(e) => {
                setusers((prevState) => ({
                  ...prevState,
                  fname:e.target.value
                }));
                
              }
              }
            />
          </div>
          <div className="flex flex-col mt-5">
            <span>Last Name</span>
            <input
              type="text"
              placeholder="Enter last name"
              className="border border-gray-300 p-2"
              onChange={(e) => {
                setusers((prevState) => ({
                  ...prevState,
                  lname:e.target.value
                }));
                
              }
              }
            />
          </div>{" "}
          <div className="flex flex-col mt-5">
            <span>Phone no.</span>
            <input
              type="text"
              placeholder="Enter phone number"
              className="border border-gray-300 p-2"
              onChange={(e) => {
                setusers((prevState) => ({
                  ...prevState,
                  phone_no:e.target.value
                }));
                
              }
              }
            />
          </div>{" "}
          <div className="flex flex-col mt-5">
            <span>House no.</span>
            <input
              type="text"
              placeholder="Enter House no"
              className="border border-gray-300 p-2"
              onChange={(e) => {
                setusers((prevState) => ({
                  ...prevState,
                  house_no:e.target.value
                }));
                
              }
              }
            />
          </div>{" "}
          <div className="flex flex-col mt-5">
            <span>Floor no.</span>
            <select className="border border-gray-300 p-2 bg-white"
             onChange={(e) => {
              setusers((prevState) => ({
                ...prevState,
                floor_no:e.target.value
              }));
              
            }
            }
            >
              {floorList.map((d, i) => {
                return (
                  <option key={i} value={d}>
                    {d}
                  </option>
                );
              })}
            </select>
          </div>{" "}
          <div className="flex flex-col mt-5">
            <span>Username</span>
            <input
              type="text"
              placeholder="Enter user name"
              className="border border-gray-300 p-2"
              onChange={(e) => {
                setusers((prevState) => ({
                  ...prevState,
                  user_name:e.target.value
                }));
                
              }
              }
            />
          </div>
          <div className="flex flex-col mt-5">
            <span>Password</span>
            <input
              type="password"
              placeholder="Enter password"
              className="border border-gray-300 p-2"
              onChange={(e) => {
                setusers((prevState) => ({
                  ...prevState,
                  password:e.target.value
                }));
                
              }
              }
            />
          </div>{" "}
          <div className="flex flex-col mt-5">
            <button className="bg-black text-white p-2 font-semibold  hover:opacity-80 " onClick={() => {
              RegisterBtn()
            }}>
              Sign up
            </button>
            <span className="text-gray-400 text-center mt-2">
              Already have an account?{" "}
              <span className="text-black font-semibold" onClick={() => {
                setlogin(true);
              }}>Sign in</span>
            </span>
          </div>
        </div>
        <div className="w-[90%] mx-auto my-0 hidden">
          <img src={pic} alt="" className="w-[100%]" />
        </div>
      </section>
    </>
  );

}

};
export default Registration;
