import { useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import { BsPersonCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from 'react-hot-toast'
import { createAccount } from "../Redux/slices/authSlice";

function Signup() {
  const [previewImage, setPreviewImage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signupData,setSignupData] = useState({
    fullName:"",
    email:"",
    password:"",
    avatar:""
  })


  function handleUserInput(e){
const {name,value} = e.target;
setSignupData({
    ...signupData ,
    [name]:value
})
  }

  function getImage(event){
event.preventDefault();
 
//getting the image
const uploadImage = event.target.files[0];
if(uploadImage){
    setSignupData({
        ...signupData,
        avatar:uploadImage, 
    })
    const fileReader = new FileReader();
    fileReader.readAsDataURL(uploadImage);
    fileReader.addEventListener('load', function (){
        setPreviewImage(this.result)
    })
}
  }

  async function createNewAccount(event){
    event.preventDefault();
    if(!signupData.email || !signupData.password || !signupData.avatar || !signupData.fullName){
    toast.error("Please Fill the all details")
    return;
    }

    //Checking name field length 
    if(signupData.fullName.length < 0){
      toast.error("Name should be at least of 5 character ! ")
      return;
    }

    //Checking valid email

    if(!signupData.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
      toast.error("Invalid Email");
      return
    }

    //Checking valid password 
    if(!signupData.password.match( /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)){
      toast.error('Password should be 6 to 16 character long with at least special character or number')
    }

    const formData = new FormData();
    formData.append('fullName',signupData.fullName)
    formData.append('password',signupData.password)
    formData.append('email',signupData.email)
    formData.append('avatar',signupData.avatar)

    //dispatch create account action

    const response = await dispatch(createAccount(formData))
console.log(response);
    if(response?.payload?.success)
 navigate("/")
 

    setSignupData({
      fullName:"",
      email:"",
      password:"",
      avatar:""
    })

    setPreviewImage("")
  }

  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-screen">
        <form noValidate onSubmit={createNewAccount} className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">
          <h1 className="text-center text-2xl font-bold ">Registration Page</h1>

          <label htmlFor="image_upload" className="cursor-pointer">
            {previewImage ? (
              <img
                className="h-24 w-24 rounded-full m-auto"
                src={previewImage}
              />
            ) : (
              <BsPersonCircle className="h-24 w-24 rounded-full m-auto" />
            )}
          </label>
          <input
          onChange={getImage}
          type="file"
            className=""
            id="image_uploads"
            name="image_uploads"
            accept=".jpg, .jpeg ,.png, .svg"
          />
           <div className="flex flex-col gap-1">
            <label htmlFor="fullName">Name</label>
            <input
              required
              type="fullName"
              name="fullName"
              id="fullName"
              placeholder="Enter your Full Name"
              className=" bg-transparent px-2 py-1 border "
              onChange={handleUserInput}
              value={signupData.fullName}
            />
          </div>
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
              value={signupData.email}
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
              value={signupData.password}
            />
          </div>
          <button type="submit" className=" bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 mt-2 font-semibold cursor-pointer">
            Create Account
          </button>
          <p className="text-center">
          Already have an account ? <Link to="./login" className="link text-accent cursor-pointer">Login</Link>
          </p>
        </form>
      </div>
    </HomeLayout>
  );
}

export default Signup;
