import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, updateProfile } from "../../Redux/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import HomeLayout from "../../Layouts/HomeLayout";
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";

function EditProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    previewImage: " ",
    fullName: "",
    avatar: undefined,
    userId: useSelector((state) => state?.auth?.data?._id),
  });
  function handleImageUpload(e) {
    e.preventDefault();
    const imageUpload = e.target.files[0];
    if (imageUpload) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(imageUpload);
      fileReader.addEventListener("load", function () {
        setData({
          ...data,
          previewImage: this.result,
          avatar: imageUpload,
        });
      });
    }
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    if (!data.fullName || !data.avatar) {
      toast.error("All fields are mandatory");
      return;
    }
    if (data.fullName.length < 5) {
      toast.error("Name cannot be less then 5 char");
    }

    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("avatar", data.avatar);

    await dispatch(updateProfile([data.userId, formData]));
    await dispatch(getUserData());
    navigate("/user/profile");
  }

  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-[100vh]">
        <form
          onSubmit={onFormSubmit}
          className="flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-80 min-h-[26rem] shadow-[0_0_10px_black]"
        >
          <h1 className="text-center text-2xl font-semibold">Edit Profile</h1>
          <label htmlFor="image_uploads" className="cursor-pointer">
            {data.previewImage ? (
              <img
                className="w-28 h-28 rounded-full m-auto"
                src={data.previewImage}
              />
            ) : (
              <BsPersonCircle className="w-28 h-28 rounded-full m-auto" />
            )}
          </label>
          <input
            onChange={handleImageUpload}
            className="hidden"
            type="file"
            id="image_uploads"
            name="image_uploads"
            accept=".jpg .svg .png .jpeg"
          />

          <div className="flex flex-col gap-1">
            <label htmlFor="fullName" className="text-lg font-semibold ">
              Full Name{" "}
            </label>
            <input
              type="text"
              required
              name="fullName"
              placeholder="Enter your name"
              className="bg-transparent px-2 py-1 border"
              value={data.fullName}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-4"
          >
            Update profile
          </button>
          <Link to="/user/profile">
            <p className="link text-accent cursor-pointer flex items-center justify-center ">
              {" "}
              <AiOutlineArrowLeft /> Go Back to Profile
            </p>
          </Link>
        </form>
      </div>
    </HomeLayout>
  );
}

export default EditProfile;
