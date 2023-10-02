import styles from "../styles/_Store.module.scss";
import StyledContainer from "../components/UI/StyledContainer";
import StoreCard from "../components/Store/StoreCard";
import image from "../assets/images/product.png";
import StyledHeader from "../components/UI/StyledHeader";
import Filters from "../components/Store/Filters";
import AnimatedContainer from "../components/UI/AnimatedContainer";

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
  {
    id: 3,
    code: "400",
    img: image,
    productName: "المنتج الرابع",
    price: 15,
    description: "وصف المنتج الرابع",
    videoUrl: "",
  },
  {
    id: 4,
    code: "500",
    img: image,
    productName: "المنتج الخامس",
    price: 5,
    description: "وصف المنتج الخامس",
    videoUrl: "",
  },
  {
    id: 5,
    code: "600",
    img: image,
    productName: "المنتج السادس",
    price: 18,
    description: "وصف المنتج السادس",
    videoUrl: "",
  },
];
const Store = () => {
  return (
    <AnimatedContainer className={styles.store}>
      <StyledContainer>
        <StyledHeader>المتجر</StyledHeader>
        <Filters />
        <div className={styles.products}>
          {DUMMY_DATA.map((item) => {
            return (
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
            );
          })}
        </div>
      </StyledContainer>
    </AnimatedContainer>
  );
};

export default Store;
