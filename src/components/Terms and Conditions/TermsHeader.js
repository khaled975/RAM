import styles from "../../styles/_TermsHeader.module.scss";
import { motion } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";

const TermsHeader = (props) => {
  const onClickHandler = () => {
    props.onExpand();
  };
  return (
    <div className={styles.head}>
      <div className={styles.headerName}>
        <span>{`${props.index + 1}.`}</span>
        <span>{props.item.head}</span>
      </div>
      <motion.div
        className={styles.arrow}
        onClick={onClickHandler}
        animate={{ rotate: props.expandState ? 180 : 0 }}
        transition={{ type: "spring", duration: 0.3 }}
      >
        <IoIosArrowUp />
      </motion.div>
    </div>
  );
};

export default TermsHeader;
