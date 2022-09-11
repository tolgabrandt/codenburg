import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import LocalSwitcher from "../components/shared/LocalSwitcher";
import Navbar from "../components/shared/Navbar";

const HomeLayout = () => {
  return (
    <>
      <LocalSwitcher />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
export default HomeLayout;
