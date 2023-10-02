import styles from "../../styles/_Footer.module.scss";
import { SiVisa } from "react-icons/si";
import { FaCcPaypal, FaDiscord } from "react-icons/fa";
import StyledContainer from "../UI/StyledContainer";
import { Link } from "react-router-dom";
import { ReactComponent as MasterCard } from "../../assets/images/mastercard.svg";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <StyledContainer>
        <div className={styles.items}>
          <Link className={styles.social} to="/">
            <span>تواصل معنا</span>
            <div className={styles.icon}>
              <FaDiscord />
            </div>
          </Link>
          <p className={styles.text}>
            جميع الحقوق محفوظة &copy; {currentYear} رام
          </p>
          <div className={styles.payment}>
            <SiVisa />
            <MasterCard />
            <FaCcPaypal />
          </div>
        </div>
      </StyledContainer>
    </footer>
  );
};

export default Footer;
