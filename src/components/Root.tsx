import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./ui/Navbar";

const Root = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="mb-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
