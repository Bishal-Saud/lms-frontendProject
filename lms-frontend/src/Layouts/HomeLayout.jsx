import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
function HomeLayout({children}) {
  function changeWidth() {
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "auto";
  }

  function hideDrawer(){
    const element = document.getElementsByClassName('drawer-toggle');
    element[0].checked = false;
     
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "0";
  }

  return (
    <>
      <div className="min-h-[90vh] bg-gray-700 ">
        <div className="drawer absolute left-0 z-50 w-fit ">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content">
          <label htmlFor="my-drawer" className=" cursor-pointer relative ">
            <FiMenu
              onClick={changeWidth}
              size={"32px"}
              className="font-bold text-white m-4"
            />
          </label>
        </div>
        <div className="drawer-side w-0 ">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="bg-gray-800  text-white menu p-4 w-48 sm:w-80 relative bg-base-100 text-base-content">
            <li className="w-fit absolute right-2 z-50 ">
              <button onClick={hideDrawer}>
                <AiFillCloseCircle
                size={23}

                />
              </button>
            </li>

            <li>
                <Link to="/">Home</Link>
            </li>
            
            <li>
                <Link to="/courses">All courses</Link>
            </li>

            
            <li>
                <Link to="/contact">Contact Us</Link>
            </li>

            <li>
                <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>
        </div> 

        {children}

        <Footer/>
        </div>
     
    </>
  );
}

export default HomeLayout;
