import styles from "../../styles/_TermsChild.module.scss";

const TermsChild = (props) => {
  return (
    <div className={styles.termsChild}>
      <span>{`${props.subIndex + 1}.${props.index + 1}.`}</span>
      <span>{props.child.name}</span>
    </div>
  );
};
export default TermsChild;
