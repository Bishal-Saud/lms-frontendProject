import { Route , Routes } from "react-router-dom";
import "./app.css";

import HomePage from "./Pages/Homepage";
import AboutUs from "./Pages/AboutUs";
import NotFound from "./Pages/NotFound";
import Signup from "./Pages/Signup";
import SignIn from "./Pages/SignIn";
import CourseList from "./Pages/CourseList";
function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/about" element={<AboutUs/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/signin" element={<SignIn/>}></Route>
      <Route path="/courses" element={<CourseList/>}></Route>

      <Route path="*" element={<NotFound/>}></Route>
     </Routes>
    </>
  );
}

export default App;
