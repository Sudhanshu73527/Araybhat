import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Fotter from "../components/Fotter/Fotter";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Fotter />
    </>
  );
};

export default AppLayout;
