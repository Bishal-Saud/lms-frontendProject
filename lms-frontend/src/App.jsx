import { Route , Routes } from "react-router-dom";
import "./app.css";

import HomePage from "./Pages/Homepage";
import AboutUs from "./Pages/AboutUs";
function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/about" element={<AboutUs/>}></Route>
     </Routes>
    </>
  );
}

export default App;
