import styles from "../../styles/_DashboardRoot.module.scss";
import AnimatedContainer from "../UI/AnimatedContainer";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";

const DashboardRoot = () => {
  return (
    <AnimatedContainer className={styles.root}>
      <Navigation />
      <Outlet />
    </AnimatedContainer>
  );
};
export default DashboardRoot;
