import styles from "../../styles/_TermsItem.module.scss";
import TermsHeader from "./TermsHeader";
import TermsChild from "./TermsChild";
import { motion } from "framer-motion";
import { useState } from "react";
const TermsItem = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const onClickExpand = () => {
    if (isExpanded === false) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  };
  return (
    <div className={styles.item} onClick={onClickExpand}>
      <TermsHeader
        index={props.index}
        item={props.item}
        expandState={isExpanded}
        onExpand={onClickExpand}
      />

      {props.item.subMenu.length > 0 && (
        <motion.div
          className={styles.termChildren}
          animate={{
            height: isExpanded ? "fit-content" : 0,
            marginBottom: isExpanded ? "2.5rem" : 0,
          }}
          transition={{ type: "spring", duration: 0.3 }}
        >
          {props.item.subMenu.map((child, subIndex) => {
            return (
              <TermsChild
                key={child.id}
                index={props.index}
                subIndex={subIndex}
                child={child}
              />
            );
          })}
        </motion.div>
      )}
    </div>
  );
};
export default TermsItem;
