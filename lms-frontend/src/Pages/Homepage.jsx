import { Link } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import homePageMainImage from "../assets/images/homePageMainImage.png";
function HomePage() {
  return (
    <>
      <HomeLayout>
        <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
          <div className="w-1/2 space-y-6">
            <h1 className="text-5xl font-semibold">
              Nepal's Largest
              <span className="text-[#007bff] font-bold"> Learning Platform</span>
            </h1>

            <p className="text-xl text-gray-200">
              We have a large Library of course taught by highly skilled and
              qualified faculties at a very affordable cost.
            </p>

            <div className="space-x-6">
              <Link to="/courses">
                <button className="bg-[#007bff] px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-blue-700 transition-all ease-in-out">
                  Explore Courses
                </button>
              </Link>

              <Link to="/contact">
                <button className="border border-[#007bff] px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-blue-700 transition-all ease-in-out">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>

          <div className="w-1/2 flex items-center justify-center ">
            <img src={homePageMainImage} alt="Homepage" />
          </div>


        </div>



      </HomeLayout>
    </>
  );
}

export default HomePage;
