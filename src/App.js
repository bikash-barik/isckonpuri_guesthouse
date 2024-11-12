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

import HomePage from "./pages/HomePage.jsx";
import Navbar from "./components/Navbar.jsx";
import TourPage from "./pages/TourPage.jsx";
import Footer from "./components/Footer.jsx";
import RoomsSuite from "./pages/RoomsSuite.jsx";
import PrasadamPage from './pages/PrasadamPage.jsx';
import FooterAbove from "./components/FooterAbove.jsx";
import CabPage from "./pages/CabPage.jsx";
import TouristGuide from "./pages/TouristGuide.jsx";
import ContactUsPage from "./pages/ContactUsPage.jsx";
import FloatingActionButtons from "./components/FloatingButton.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import UploadData from "./pages/UploadData.jsx";
import PopularPackageNext from "./components/PopularPackageNext.jsx";
import Privacypolicy from "./pages/PrivacyPolicy.jsx";

import loadingImage from './assets/hotelbookingreloader.gif';

//neew code
import "./App.css";
import NotFound from "./pages/NotFound.jsx";
import Shoping from "./pages/Shoping.jsx";
import ProductDescription from "./pages/ProductDescription.jsx";
import PrasadhBookingForm from "./components/PrasadhBookingForm.jsx";
import FoodBookingForm from "./components/FoodBookingForm.jsx";
import BookNowForm from "./components/BookNowForm.jsx";
import TaxiBookingForm from "./components/TaxiBookingForm.jsx";
import Query from "./pages/Query.jsx";

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
        path:"/guesthouse-booking",
        element:<TaxiBookingForm/>
      },
      {
        path:"/prasadam",
        element:<PrasadamPage/> 
      },
      {
        path:"/prasadh-booking",
        element:<FoodBookingForm/>
      },
      {
        path:"/shopping",
        element:<Shoping/> 
      },
      {
        path:"/product/:id",
        element:<ProductDescription/> 
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
      },
      {
        path:"/query",
        element:<Query/>
      }
    ],
  },
  {
    path: "/*",
    element: <NotFound/>,
  },
];

const router = createBrowserRouter(routes);

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App">
       {loading ? (
        <section style={{height: "100vh",display: "flex", alignItems: "center", justifyContent: "center",}}>
          <img src={loadingImage} alt="Loading" className="loading-image" style={{ width: "300px",height:"300px",borderRadius:"50%",backgroundColor:"white"}}/>
        </section>
      ) : (
        <RouterProvider router={router} />
      )}
    </div>
  );
}

export default App;
