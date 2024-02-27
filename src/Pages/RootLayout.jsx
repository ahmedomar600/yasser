// import {useEffect} from "react";
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';





import Header from "../comp/Header"
import Footer from "../comp/Footer"
// import Footer from "../comp/Footer"

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
