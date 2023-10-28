import HomeLayout from "../Layouts/HomeLayout";

function ContactUs() {
  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-screen">
        <form className="flex flex-col items-center justify-center gap-5 p-5 rounded-md text-white shadow-[0_0_10px_black] w-[22rem]">
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