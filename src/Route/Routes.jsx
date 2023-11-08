import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Page/Login/Login";
import Home from "../Page/Home/Home";
import DashBoard from "../Layout/DashBoard";
import DashboardHome from "../Page/DashboardHome/DashboardHome";
import Appointment from "../Page/Appointment/Appointment";
import About from "../Page/About/About";
import Blog from "../Page/Blog/Blog";
import Contact from "../Page/Contact/Contact";
import SignUp from "../Page/SignUp/SignUp";
import LawyerDetails from "../Page/LawyerDetails/LawyerDetails";
import BookMark from "../Page/BookMark/BookMark";
import Booking from "../Page/Booking/Booking";
import Message from "../Page/Message/Message";
import Profile from "../Page/Profile/Profile";
import Review from "../Page/Review/Review";
import ComingSoon from "../Page/ComingSoon/ComingSoon";
import LexAi from "../Page/LexAi/LexAi";
import LawDEtails from "../Page/LawDetails/LawDEtails";
import BlogDetails from "../Page/BlogDetails/BlogDetails";
import Registration from "../Page/Registration/Registration";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element:<Login></Login>,
        },
        {
          path: "/signup",
          element:<SignUp></SignUp>,
        },
        {
          path: "/appointment",
          element:<Appointment></Appointment>,
        },
        {
          path: "/about",
          element:<About></About>,
        },
        {
          path: "/blog",
          element:<Blog></Blog>,
        },
        {
          path: "/contact",
          element:<Contact></Contact>,
        },
        {
          path: "/lawyardetails/:id",
          element:<LawyerDetails></LawyerDetails>,
        },
        {
          path: "/lex-Ai",
          element:<LexAi></LexAi>,
        },
        {
          path: "/law-details/:id",
          element:<LawDEtails></LawDEtails>,
        },
        {
          path: "/coming-soon",
          element:<ComingSoon></ComingSoon>,
        },
        {
          path: "/blog-details/:id",
          element:<BlogDetails></BlogDetails>,
        },
       
        
      ],
    },
    {
      path: "/dashboard",
      element:<DashBoard></DashBoard>,
      children: [
        {
          path: "/dashboard",
          element: <DashboardHome></DashboardHome>,
        },
        {
          path: "/dashboard/bookmark",
          element: <BookMark></BookMark>,
        },
        {
          path: "/dashboard/booking",
          element: <Booking></Booking>,
        },
        {
          path: "/dashboard/message",
          element: <Message></Message>,
        },
        {
          path: "/dashboard/profile",
          element: <Profile></Profile>,
        },
        {
          path: "/dashboard/review",
          element: <Review></Review>,
        },
        {
          path: "/dashboard/comming",
          element: <ComingSoon></ComingSoon>,
        },
        
      ],
    },
    {
      path: "/registration",
      element:<Registration></Registration>,
    }
  ]);
  