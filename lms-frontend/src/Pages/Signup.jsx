import { useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import { BsPersonCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

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

  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-screen">
        <form className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">
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
            className="hidden"
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
