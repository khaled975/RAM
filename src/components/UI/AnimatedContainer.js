import styles from "../../styles/_AnimatedContainer.module.scss";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedContainer = (props) => {
  return (
    <AnimatePresence>
      <motion.div
        className={`${styles.animatedContainer} ${props.className}`}
        variants={{ hidden: { opacity: 0 }, shown: { opacity: 1 } }}
        initial="hidden"
        animate="shown"
        exit="hidden"
        transition={{ type: "spring", duration: 0.4 }}
      >
        {props.children}
      </motion.div>
    </AnimatePresence>
  );
};
export default AnimatedContainer;
