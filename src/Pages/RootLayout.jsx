// import {useEffect} from "react";
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


import Header from "../comp/Header"
import Footer from "../comp/Footer"
// import Footer from "../comp/Footer"

const RootLayout = () => {

    useEffect(() => {
      Aos.init();
    }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
