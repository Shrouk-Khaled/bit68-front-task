import { Outlet } from "react-router-dom";
import Footer from "../general/Footer";
import MobileNav from "../general/MobileNav";
import Navbar from "../general/Navbar";
import classes from "./MainLayout.module.scss";

const MainLayout = () => {
  return (
    <div className={classes.container}>
      <div className={classes.mainNav}>
        <Navbar />
      </div>
      <div className={classes?.mobile}>
        <MobileNav />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
