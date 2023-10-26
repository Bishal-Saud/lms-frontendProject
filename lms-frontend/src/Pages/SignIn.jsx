import { useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import { BsPersonCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { login } from "../Redux/slices/authSlice";

function SignIn() {
 

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signinData, setSignInData] = useState({
  
    email: "",
    password: "",

  });

  function handleUserInput(e) {
    const { name, value } = e.target;
    setSignInData({
      ...signinData,
      [name]: value,
    });
  }

  

  async function islogin(event) {
    event.preventDefault();
    if (
      !signinData.email ||
      !signinData.password 
    ) {
      toast.error("Please Fill the all details");
      return;
    }

 

    //dispatch create account action

    const response = await dispatch(login(signinData));
       if (response?.payload?.success) navigate("/");

    setSignInData({
   
      email: "",
      password: "",
 
    });

   
  }

  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-screen">
        <form
          noValidate
          onSubmit={islogin}
          className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]"
        >
          <h1 className="text-center text-2xl font-bold ">LogIn Page</h1>

          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className=" bg-transparent px-2 py-1 border "
              onChange={handleUserInput}
              value={signinData.email}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              required
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className=" bg-transparent px-2 py-1 border "
              onChange={handleUserInput}
              value={signinData.password}
            />
          </div>
          <button
            type="submit"
            className=" bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 mt-2 font-semibold cursor-pointer"
          >
           Login

          </button>
          <p className="text-center">
            Don't have an account ?{" "}
            <Link to="/signup" className="link text-accent cursor-pointer">
              SignIn
            </Link>
          </p>
        </form>
      </div>
    </HomeLayout>
  );
}

export default SignIn;
