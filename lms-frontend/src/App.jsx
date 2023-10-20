import { Route , Routes } from "react-router-dom";
import "./app.css";

import HomePage from "./Pages/Homepage";
function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<HomePage/>}></Route>
     </Routes>
    </>
  );
}

export default App;
