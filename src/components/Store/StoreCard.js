import styles from "../../styles/_StoreCard.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import Prices from "./Prices";
import BuyButton from "../UI/BuyButton";
import { FaCartPlus } from "react-icons/fa";
import { BsInfoLg } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Overlay from "../UI/Overlay";
import { AiFillYoutube } from "react-icons/ai";

const StoreCard = (props) => {
  const [openDetails, setOpenDetails] = useState(false);
  const onDetailsClick = () => {
    setOpenDetails((prevState) => {
      return !prevState;
    });
  };
  return (
    <>
      <div className={styles.card}>
        <div className={styles.itemImg}>
          <img src={props.img} alt="product-img" />
        </div>
        <div className={styles.itemText}>
          <div className={styles.details}>
            <p>{props.product}</p>
            <motion.div
              className={styles.infoIcon}
              whileHover={{
                boxShadow: "0 0 7px #e2cdec",
              }}
              transition={{ type: "spring", duration: 0.3 }}
              onClick={onDetailsClick}
            >
              <BsInfoLg />
            </motion.div>
          </div>
          <Prices oldPrice={props.oldPrice} price={props.price} />
          <div className={styles.buyInfo}>
            <BuyButton
              whileHover={{
                backgroundColor: "#e2cdec",
                color: "#272145",
                border: "1px solid #272145",
              }}
              transition={{ type: "spring", duration: 0.1 }}
            >
              <span className={styles.addText}>أضف إلى السلة</span>
              <FaCartPlus />
            </BuyButton>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {openDetails && (
          <>
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", duration: 0.3 }}
            />
            <motion.div
              className={styles.infoCard}
              initial={{ opacity: 0, transform: "translate(-50%,-50%)" }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", duration: 0.3 }}
            >
              <div className={styles.close} onClick={onDetailsClick}>
                <div className={styles.left}></div>
                <div className={styles.right}></div>
              </div>
              <div className={styles.productImg}>
                <img src={props.img} alt="product-img" />
              </div>
              <div className={styles.productDetails}>
                <h2>{props.product}</h2>
                <div className={styles.code}>
                  <span>كود:</span>
                  <p>{props.code}</p>
                </div>
                <Prices
                  className={styles.productPrice}
                  priceClass={styles.price}
                  discountClass={styles.discount}
                  price={props.price}
                  oldPrice={props.oldPrice}
                />
                <div className={styles.productDescription}>
                  <span>الوصف</span>
                  <p>{props.description}</p>
                  <Link to={props.videoUrl} className={styles.video}>
                    <span>فيديو المنتج</span>
                    <AiFillYoutube />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default StoreCard;
