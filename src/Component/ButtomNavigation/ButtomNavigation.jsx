import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const ButtomNavigation = () => {
  const Menus = [
    { name: "Home", icon: "home-outline", dis: "translate-x-0" },
    { name: "Appointment", icon: "business-outline", dis: "translate-x-16" },
    { name: "Chat", icon: "chatbubble-outline", dis: "translate-x-32" },
    { name: "Law Studies", icon: "book-outline", dis: "translate-x-48" },
    { name: "Profile", icon: "person-outline", dis: "translate-x-64" },
  ];

  const [active, setActive] = useState(2);
  const [showProfileDrawer, setShowProfileDrawer] = useState(false);
  const { logOut } = useContext(AuthContext);
  const openProfileDrawer = () => {
    setShowProfileDrawer(true);
  };

  const closeProfileDrawer = () => {
    setShowProfileDrawer(false);
  };

  return (
    <div className="fixed bottom-0 ml-2 z-10 xl:hidden lg:hidden md:hidden max-w-sm bg-white max-h-[4.4rem] rounded-t-xl">
      <div className="px-6">
        <ul className="flex relative">
          <span
            className={`bg-rose-600 mb-5 duration-500 ${Menus[active].dis} border-4 border-gray-900 h-16 w-16 absolute
         -top-5 rounded-full`}
          >
            <span
              className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
          rounded-tr-[11px] shadow-myShadow1"
            ></span>
            <span
              className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
          rounded-tl-[11px] shadow-myShadow2"
            ></span>
          </span>
          {Menus.map((menu, i) => (
            <li key={i} className="w-16">
              <a
                className="flex flex-col text-center pt-6"
                onClick={() => {
                  setActive(i);
                  if (menu.name === "Profile") {
                    openProfileDrawer();
                  }
                }}
              >
                <span
                  className={`text-xl cursor-pointer duration-500 ${
                    i === active && "-mt-6 text-white"
                  }`}
                >
                  <ion-icon name={menu.icon}></ion-icon>
                </span>
                <span
                  className={` ${
                    active === i
                      ? "translate-y-4 duration-700 opacity-100"
                      : "opacity-0 translate-y-10"
                  } `}
                >
                  {menu.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {showProfileDrawer && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="w-full h-full max-w-lg bg-white rounded-t-lg overflow-hidden shadow-lg">
            <button
              className="btn top-4 right-4  text-gray-500 flex  items-center"
              onClick={closeProfileDrawer}
            >
              <ion-icon name="close-outline"></ion-icon>
              <span className="ml-1">Close</span>
            </button>

            <div className="py-4 px-6">
              <h1 className="flex justify-center h-10 items-center gap-3 w-full my-5 bg-[#DA1E37] hover:bg-[#DA1E37] border-0 border-spacing-0 rounded-l-3xl text-white rounded-r-none ml-5">
                {" "}
                <img
                  src="https://file.rendit.io/n/DMLiYpHTZnxxLEt4ZZbT.svg"
                  id="Icon"
                  className="w-4 shrink-0"
                />
                DashBoard
              </h1>
              <div className="button-container">
                <Link to="/dashboard/booking">
                  <button className="btn  text-white w-full sm:mx-4 bg-gray-900 border-0">
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
                  <button className="btn text-white w-full sm:mx-4 bg-gray-900 border-0">
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
                  <button className="btn text-white w-full sm:mx-4 bg-gray-900 border-0">
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
              <h1 className="flex justify-center h-10 items-center gap-3 w-full my-5 bg-[#DA1E37] hover:bg-[#DA1E37] border-0 border-spacing-0 rounded-l-3xl text-white rounded-r-none ml-5">
                {" "}
                <img
                  src="https://file.rendit.io/n/DMLiYpHTZnxxLEt4ZZbT.svg"
                  id="Icon"
                  className="w-4 shrink-0"
                />
                Contact Info
              </h1>
          
                <Link to="/contact">
                  <button className="btn text-white w-full mx-4 bg-gray-900 border-0">
                    <img
                      src="https://file.rendit.io/n/KbbQnmyRu4YNEpCvYYec.svg"
                      id="IconRoot"
                    />
                    Contact Us
                  </button>
                </Link>
             
              <h1 className="flex justify-center h-10 items-center gap-3 w-full my-5 bg-[#DA1E37] hover:bg-[#DA1E37] border-0 border-spacing-0 rounded-l-3xl text-white rounded-r-none ml-5">
                {" "}
                <img
                  src="https://file.rendit.io/n/DMLiYpHTZnxxLEt4ZZbT.svg"
                  id="Icon"
                  className="w-4 shrink-0"
                />
                Account
              </h1>
              <Link to="/dashboard/profile">
                <button className="btn mx-3 text-white w-full bg-gray-900 hover:bg-gray-900 border-0">
                  <img
                    src="https://file.rendit.io/n/HmEYbnl7OL8xoIj41mEx.svg"
                    id="IconRoot"
                    className="w-4"
                  />{" "}
                  My Profile
                </button>
              </Link>
              <button
                className="btn sm:mx-3 text-white w-full bg-gray-900 hover:bg-gray-900 border-0"
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
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtomNavigation;
