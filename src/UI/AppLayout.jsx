import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_auto_auto]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
