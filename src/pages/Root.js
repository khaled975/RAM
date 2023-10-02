import styles from "../styles/_Root.module.scss";
import modes from "../styles/_modes.module.scss";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import AuthRoot from "../components/Auth/AuthRoot";
import DashboardRoot from "../components/Dashboard/DashboardRoot";

const Root = () => {
  const location = useLocation();
  return location.pathname.startsWith("/Auth") ? (
    <AuthRoot />
  ) : location.pathname.startsWith("/Dashboard") ? (
    <DashboardRoot />
  ) : (
    <div className={`${styles.root} ${modes.dark}`}>
      <div className={`${styles.content} ${modes.background}`}>
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Root;
