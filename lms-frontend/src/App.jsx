import "./app.css";

import { Route, Routes } from "react-router-dom";

import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import CourseList from "./Pages/CourseList";
import Denied from "./Pages/Denied";
import HomePage from "./Pages/Homepage";
import NotFound from "./Pages/NotFound";
import SignIn from "./Pages/SignIn";
import Signup from "./Pages/Signup";
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
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
