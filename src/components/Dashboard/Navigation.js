import styles from "../../styles/_Navigation.module.scss";
import modes from "../../styles/_modes.module.scss";
import logo from "../../assets/images/output-onlinegiftools.gif";
import { IoHome } from "react-icons/io5";
import { FaFile } from "react-icons/fa6";
import { TbShieldLockFilled } from "react-icons/tb";
import { FaBan } from "react-icons/fa";
const nav = [
  { id: "0", name: "الرئيسية", icon: <IoHome /> },
  { id: "1", name: "سكربتات مجانية", icon: <FaFile /> },
  { id: "2", name: "سجلاتي", icon: <TbShieldLockFilled /> },
  { id: "3", name: "البان العام", icon: <FaBan /> },
];
const Navigation = () => {
  return (
    <div className={`${styles.navigation} ${modes.dark}`}>
      <div className={`${styles.container} ${modes.backgroundDarker}`}>
        <div className={styles.logo}>
          <div className={styles.img}>
            <img src={logo} alt="logo-img" />
          </div>
          <div className={`${styles.line} ${modes.line}`} />
        </div>
        <div className={styles.content}>
          <p className={`${styles.head} ${modes.text}`}>الصفحات</p>
          <div className={styles.body}>
            {nav.map((item) => {
              return (
                <button key={item.id}>
                  <div className={styles.text}>
                    <span className={modes.text}>{item.icon}</span>
                    <p className={modes.text}>{item.name}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
