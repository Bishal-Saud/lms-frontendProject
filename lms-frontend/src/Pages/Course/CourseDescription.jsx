import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HomeLayout from "../../Layouts/HomeLayout";
import { useSelector } from "react-redux";

function CourseDescription() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { role, data } = useSelector((state) => state.auth);
  useEffect(() => {
    // console.log(state);
  }, []);
  return (
    <HomeLayout>
      <div className="min-h-[90vh] pt-12 px-20 flex flex-col items-center justify-center text-white">
        <div className="grid grid-cols-2 gap-10 py-10 relative">
          <div className="space-y-5">
            <img
              className="w-full h-64"
              alt="thumbnail"
              src={state?.thumbnail?.secure_Url}
            />
            <div className="space-y-4">
              <div className="flex flex-col items-center justify-between text-xl">
                <p className="font-semibold">
                  <span className="font-bold text-[#007bff]">
                    Total Lectures:{" "}
                  </span>{" "}
                  {state?.numberOfLectures}
                </p>
                <p className="font-semibold">
                  <span className="font-bold text-[#007bff]">
                    Instructor:{" "}
                  </span>{" "}
                  {state?.createdBy}
                </p>
              </div>
              {role == "ADMIN" || data?.subscription?.status === "active" ? (
                <button
                  onClick={() =>
                    navigate("/course/displaylectures", { state: { ...state } })
                  }
                  className="bg-[#007bff] text-xl rounded-md font-bold px-5 py-3 w-full hover:bg-blue-700 transition-all ease-in-out duration-300"
                >
                  Watch Lectures
                </button>
              ) : (
                <button
                  onClick={() => navigate("/checkout")}
                  className="bg-[#007bff] text-xl rounded-md font-bold px-5 py-3 w-full hover:bg-blue-700 transition-all ease-in-out duration-300"
                >
                  Subscribe
                </button>
              )}
            </div>
          </div>

          {/* Right of the grid */}
          <div className="space-y-2 text-xl">
            <h1 className="text-3xl font-bold text-[#007bff] mb-5 text-center">
              {state?.title}
            </h1>
            <p className="text-[#007bff]">Course Description: </p>
            <p>{state?.description}</p>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default CourseDescription;
