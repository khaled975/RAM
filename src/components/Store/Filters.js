import styles from "../../styles/_Filters.module.scss";
import { motion } from "framer-motion";

const DUMMY_CATEGORIES = [
  { id: 0, name: "الفئه" },
  { id: 1, name: "الفئه" },
  { id: 2, name: "الفئه" },
  { id: 3, name: "الفئه" },
];
const Filters = () => {
  return (
    <ul className={styles.filtersList}>
      {DUMMY_CATEGORIES.map((item) => {
        return (
          <motion.li
            key={item.id}
            className={styles.filterItem}
            whileHover={{ color: "#be001b" }}
            transition={{ type: "spring", duration: 0.3 }}
          >
            {item.name}
          </motion.li>
        );
      })}
    </ul>
  );
};

export default Filters;
