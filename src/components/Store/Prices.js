import styles from "../../styles/_Prices.module.scss";

const Prices = (props) => {
  return (
    <div className={`${styles.prices} ${props.className}`}>
      <span className={`${styles.price} ${props.priceClass}`}>
        {props.price}
      </span>
      {props.oldPrice && (
        <span
          className={`${styles.price} ${styles.discount} ${props.discountClass}`}
        >
          {props.oldPrice}
        </span>
      )}
    </div>
  );
};

export default Prices;
