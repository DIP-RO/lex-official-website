import { Link, Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/UserContext";

const DashBoard = () => {
  const { logOut } = useContext(AuthContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="max-w-full">
      <Navbar></Navbar>
          <div className="flex flex-wrap bg-gray-900 min-h-screen">
        {/* Sidebar */}
        <div
          className={`bg-gray-900 w-1/4 border-r-2 border-black min-h-screen sm:block ${
            isSidebarOpen ? 'block' : 'hidden'
          }`}
        >
          <h1 className="flex justify-center h-10 items-center gap-3 w-full my-5 bg-[#DA1E37] hover:bg-[#DA1E37] border-0 border-spacing-0 rounded-l-3xl text-white rounded-r-none ml-5">
            <img
              src="https://file.rendit.io/n/DMLiYpHTZnxxLEt4ZZbT.svg"
              id="Icon"
              className="w-4 shrink-0"
            />
            DashBoard
          </h1>

          <div>
            <div className="button-container">
              <Link to="/dashboard/booking">
                <button className="btn text-white w-full mx-5 bg-gray-900 border-0">
                  <img
                    src="https://file.rendit.io/n/0YB4KAOY7CqXouZklsN3.svg"
                    id="IconRoot"
                  />
                  My Bookings
                </button>
              </Link>
            </div>
            <div className="button-container">
              <Link to="/dashboard/message">
                <button className="btn text-white w-full mx-2 bg-gray-900 border-0">
                  <img
                    src="https://file.rendit.io/n/jrh2bdbn2ThJZbvydcGZ.svg"
                    id="IconRoot"
                  />
                  Messages
                </button>
              </Link>
            </div>
            <div className="button-container">
              <Link to="/dashboard/review">
                <button className="btn text-white w-full mx-1 bg-gray-900 border-0">
                  <img
                    src="https://file.rendit.io/n/zRWaGOKN4sY4Ueb6Qfaw.svg"
                    id="IconRoot"
                  />
                  Reviews
                </button>
              </Link>
            </div>
            <div className="button-container">
              <Link to="/dashboard/bookmark">
                <button className="btn text-white w-full mx-4 bg-gray-900 border-0">
                  <img
                    src="https://file.rendit.io/n/KbbQnmyRu4YNEpCvYYec.svg"
                    id="IconRoot"
                  />
                  Bookmarks
                </button>
              </Link>
            </div>
          </div>

          <h1 className="  flex justify-center h-10 items-center gap-3 w-full my-5 bg-[#DA1E37] hover:bg-[#DA1E37] border-0 border-spacing-0 rounded-l-3xl text-white rounded-r-none ml-5">
            {" "}
            <img
              src="https://file.rendit.io/n/DMLiYpHTZnxxLEt4ZZbT.svg"
              id="Icon"
              className=" w-4 shrink-0"
            />
            Account
          </h1>
          <Link to="/dashboard/profile">
            <button className="btn mx-3 text-white w-full my-2 bg-gray-900 hover:bg-gray-900 border-0">
              <img
                src="https://file.rendit.io/n/HmEYbnl7OL8xoIj41mEx.svg"
                id="IconRoot"
                className="w-4"
              />{" "}
              My Profile
            </button>
          </Link>
          <button
            className="btn text-white w-full my-2 bg-gray-900 hover:bg-gray-900 border-0"
            onClick={logOut}
          >
            <img
              src="https://file.rendit.io/n/OK1UKF1nQhsmTRonUJkv.svg"
              id="IconRoot"
              className="w-4"
            />{" "}
            Logout
          </button>
        </div>
        <div className="bg-gray-900 w-3/4 min-h-screen">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashBoard;
