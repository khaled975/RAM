import styles from "../styles/_HomePage.module.scss";
import StyledContainer from "../components/UI/StyledContainer";
import MainButton from "../components/UI/MainButton";
import { motion } from "framer-motion";
import AnimatedContainer from "../components/UI/AnimatedContainer";
import StoreCard from "../components/Store/StoreCard";
import image from "../assets/images/product.png";
import { useEffect, useState } from "react";
import { MdPerson } from "react-icons/md";

const DUMMY_DATA = [
  {
    id: 0,
    code: "100",
    img: image,
    productName: "المنتج الأول",
    price: 10,
    oldPrice: 20,
    description:
      "لوريم يبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دوأيوسمود تيمبورأنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا. يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات .",
    videoUrl: "",
  },
  {
    id: 1,
    code: "200",
    img: image,
    productName: "المنتج الثاني",
    price: 10,
    description: "وصف المنتج الثاني",
    videoUrl: "",
  },
  {
    id: 2,
    code: "300",
    img: image,
    productName: "المنتج الثالث",
    price: 15,
    description: "وصف المنتج الثالث",
    videoUrl: "",
  },
];

const HomePage = () => {
  const hidden = { opacity: 0, transform: "translate(0, -100%)" };
  const reveal = { opacity: 1, transform: "translate(0, 0)" };

  const [count, setCount] = useState(0);
  const targetValue = 4833.5;

  useEffect(() => {
    const updateCounter = () => {
      if (count < targetValue) {
        setCount(count + 10);
      }
    };

    if (count < targetValue) {
      updateCounter();
    }
  }, [count, targetValue]);

  return (
    <AnimatedContainer className={styles.body}>
      <StyledContainer>
        <div className={styles.info}>
          <div className={styles.text}>
            <motion.h1
              initial={hidden}
              animate={reveal}
              transition={{ type: "spring", duration: 0.6 }}
            >
              رام لمكافحة الغش
            </motion.h1>
            <motion.p
              initial={hidden}
              animate={reveal}
              transition={{ type: "spring", duration: 0.8 }}
            >
              يوفر متجرنا أنظمة , نصوص , وملفات مصممة خصيصا لخوادم عرب فايف إم
              لمكافحة الغش بأعلى جوده
            </motion.p>
          </div>
        </div>
        <motion.div
          className={styles.storeBtn}
          initial={hidden}
          animate={reveal}
          transition={{ type: "spring", duration: 1 }}
        >
          <MainButton>تسوق الآن</MainButton>
          <span id="counter">
            {count}
            <MdPerson size={33} color="white" className={styles.icons} />
          </span>
        </motion.div>
        <motion.div
          className={styles.storeStyle}
          initial={hidden}
          animate={reveal}
          transition={{ type: "spring", duration: 1 }}
        >
          {DUMMY_DATA.map((item) => (
            <StoreCard
              key={item.id}
              code={item.code}
              img={item.img}
              product={item.productName}
              price={item.price}
              oldPrice={item.oldPrice}
              description={item.description}
              videoUrl={item.videoUrl}
            />
          ))}
        </motion.div>
      </StyledContainer>
    </AnimatedContainer>
  );
};

export default HomePage;
