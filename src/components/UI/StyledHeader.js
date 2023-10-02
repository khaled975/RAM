import styles from "../../styles/_StyledHeader.module.scss";

const StyledHeader = (props) => {
  return <h1 className={styles.header}>{props.children}</h1>;
};

export default StyledHeader;
