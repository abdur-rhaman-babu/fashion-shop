import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[69.5vh] mt-20 max-w-7xl lg:mx-auto mx-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
