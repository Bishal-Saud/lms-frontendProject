import "./app.css";

import { Route, Routes } from "react-router-dom";

import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import CourseList from "./Pages/Course/CourseList";
import Denied from "./Pages/Denied";
import HomePage from "./Pages/Homepage";
import NotFound from "./Pages/NotFound";
import SignIn from "./Pages/SignIn";
import Signup from "./Pages/Signup";
import CourseDescription from "./Pages/Course/CourseDescription";
import RequireAuth from "./Components/Auth/RequireAuth";
import CreateCourse from "./Pages/Course/CreateCourse";
import Profile from "./Pages/User/Profile";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/courses" element={<CourseList />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/denied" element={<Denied />}></Route>
        <Route
          path="/course/description"
          element={<CourseDescription />}
        ></Route>

        <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
          <Route path="/courses/create" element={<CreateCourse />}></Route>
        </Route>

        {/* Not working require auth so I'm trying to do it separately */}
        <Route
          element={<RequireAuth allowedRoles={["ADMIN", "USER"]} />}
        ></Route>

        <Route path="/user/profile" element={<Profile />}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
