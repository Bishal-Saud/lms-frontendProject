import { useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import toast from "react-hot-toast";
import { isEmail } from "../Helpers/RegexMatcher";
import axiosInstance from "../Helpers/axiosInstance";

function ContactUs() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  // function to handle the input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInput({ ...userInput, [name]: value });
  };

  // function to send form data to backend
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // check for empty fields
    if (!userInput.email || !userInput.name || !userInput.message) {
      toast.error("All fields are mandatory");
      return;
    }

    // email validation using regex
    if (
      !userInput.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      toast.error("Invalid email id");
      return;
    }

    try {
      const res = axiosInstance.post("/contact", { ...userInput });
      toast.promise(res, {
        loading: "Submitting your message...",
        success: "Form submitted successfully",
        error: "Failed to submit the form",
      });
      const response = await res;

      // clearing the input fields after successful submission of form
      if (response?.data?.success) {
        setUserInput({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error("Operation failed...");
    }
  };

  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-screen">
        <form
          noValidate
          onSubmit={handleFormSubmit}
          className="flex flex-col items-center justify-center gap-5 p-5 rounded-md text-white shadow-[0_0_10px_black] w-[22rem]"
        >
          <h1 className="text-3xl font-semibold">Contact Form</h1>
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="name" className="text-xl font-semibold">
              Name
            </label>
            <input
              className="bg-transparent border px-2 py-1 rounded-sm"
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              onChange={handleInputChange}
              value={userInput.name}
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="email" className="text-xl font-semibold">
              Email
            </label>
            <input
              className="bg-transparent border px-2 py-1 rounded-sm"
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleInputChange}
              value={userInput.email}
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="message" className="text-xl font-semibold">
              Message
            </label>
            <textarea
              className="bg-transparent border px-2 py-1 rounded-sm h-40 resize-none"
              type="text"
              id="message"
              name="message"
              placeholder="Enter your message"
              onChange={handleInputChange}
              value={userInput.message}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm p-2 font-semibold text-xl cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </HomeLayout>
  );
}

export default ContactUs;
