import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SocialMedia from "../UI/SocialMedia";

function AppLayout() {
  return (
    <div className=" grid h-screen grid-rows-[auto_auto_auto]">
      <Navbar />
      <Outlet />
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default AppLayout;
