import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
import ButtomNavigation from "../Component/ButtomNavigation/ButtomNavigation";

const Main = () => {
    return (
        <div className="bg-[rgba(29,_52,_74,_0.77)] ">
            <Navbar ></Navbar>
            
            <Outlet></Outlet>
            <ButtomNavigation></ButtomNavigation>
            <Footer></Footer>
        </div>
    );
};

export default Main;