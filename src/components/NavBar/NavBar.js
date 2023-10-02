import styles from "../../styles/_NavBar.module.scss";
import { Link } from "react-router-dom";
import StyledContainer from "../UI/StyledContainer";
import Logo from "../../assets/images/output-onlinegiftools.gif";
import MainButton from "../UI/MainButton";

const LinksArray = [
  { id: "0", url: "/", name: "الرئيسية" },
  { id: "1", url: "Store", name: "المتجر" },
  { id: "2", url: "Terms", name: "الشروط والأحكام" },
  { id: "3", url: "Dashboard", name: "لوحة التحكم" },
];
const NavBar = (props) => {
  return (
    <header className={`${styles.header} ${props.className}`}>
      <StyledContainer>
        <nav className={styles.navBar}>
          <input id="nav-toggle" type="checkbox" />

          <Link to="/" className={styles.logo}>
            <img src={Logo} alt="logo" />
          </Link>
          <ul className={styles.links}>
            {LinksArray.map((item) => {
              return (
                <li key={item.id}>
                  <Link to={item.url}>{item.name}</Link>
                </li>
              );
            })}
            <div className={styles.Tasgel}>
              <MainButton to="Auth?mode=signIn" >التسجيل</MainButton>
            </div>


          </ul>



          <label for="nav-toggle" class="icon-burger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </label>
        </nav>
      </StyledContainer>
    </header>
  );
};

export default NavBar;
