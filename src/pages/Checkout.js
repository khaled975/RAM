import PaypalCheckoutButton from "../components/UI/paypalCheckoutButton";

const Checkout = () => {
  const product = {
    id:"0",
    description: "react course",
    price: 19,
  };
  return <PaypalCheckoutButton product={product} />;
};

export default Checkout;
