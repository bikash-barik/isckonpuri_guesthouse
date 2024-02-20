import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

// Function to check if the user is authenticated
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import TourPage from "./pages/TourPage";
import Footer from "./components/Footer";
import RoomsSuite from "./pages/RoomsSuite";
import PrasadamPage from './pages/PrasadamPage';
import FooterAbove from "./components/FooterAbove";
import CabPage from "./pages/CabPage";
import TouristGuide from "./pages/TouristGuide";
import ContactUsPage from "./pages/ContactUsPage";
import FloatingActionButtons from "./components/FloatingButton";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import UploadData from "./pages/UploadData";
import PopularPackageNext from "./components/PopularPackageNext";
import Privacypolicy from "./pages/PrivacyPolicy";

//neew code
import "./App.css";

const isAuthenticated = () => {
  // Check Firebase if there's a logged-in user
  const currentUser = firebase.auth().currentUser;

  return currentUser !== null; // Return true if there's a logged-in user
};

// ProtectedRoute component to handle protected routes
const ProtectedRoute = ({ path, element }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      // If the user is not authenticated, redirect to the login page
      navigate("/login");
    }
  }, [navigate]);

  return isAuthenticated() ? element : null;
};

const Layout = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <FloatingActionButtons/>
      <FooterAbove/>
      <Footer />
    </>
  );
};

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/upload",
        element: <ProtectedRoute element={<UploadData />} />, // Protect this route
      },
      {
        path:"/tour",
        element: <TourPage />,
      },
      {
        path:"/room-suites",
        element:<RoomsSuite/> 
      },
      {
        path:"/prasadam",
        element:<PrasadamPage/> 
      },
      {
        path:"/cab-booking",
        element:<CabPage/>
      },
      {
        path:"/tourist-guide",
        element:<TouristGuide/>
      },
      {
        path:"/contact-us",
        element:<ContactUsPage/>
      },
      {
        path:"/signup",
        element:<SignUp/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/upload",
        element:<UploadData/>
      },
      {
        path:"/packages-next/:location",
        element:<PopularPackageNext/>
      },
      {
        path:"/privacy-policy",
        element:<Privacypolicy/>
      }
    ],
  },
  // {
  //   path: "/*",
  //   element: <NotFound />,
  // },
];

const router = createBrowserRouter(routes);

function App() {


  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
