import styles from "../../styles/_AuthRoot.module.scss";
import modes from "../../styles/_modes.module.scss";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import AnimatedContainer from "../UI/AnimatedContainer";

const AuthRoot = () => {
  return (
    <AnimatedContainer className={`${styles.root} ${modes.dark}`}>
      <div className={`${modes.backgroundDarker}`}>
        <NavBar className={styles.nav} />
        <div className={styles.body}>
          <div className={styles.image} />
          <Outlet />
        </div>
        <Footer />
      </div>
    </AnimatedContainer>
  );
};

export default AuthRoot;
