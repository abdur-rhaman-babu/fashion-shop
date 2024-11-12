import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const MainLayout = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Navbar />
      <div className="min-h-[69.5vh] mt-20 max-w-7xl lg:mx-auto mx-5">
        {navigation.state === "loading" ? <>Loading..........</> : <Outlet />}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
