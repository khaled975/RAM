import { PayPalScriptProvider,PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = () => {
  const PayPalOptions = {
    "client-id": process.env.clientId,
    currency: "USD",
  };

  const createOrder = (data, actions) => {
    // Implement your logic to create the PayPal order
  };

  const onApprove = (data, actions) => {
    // Implement your logic when the payment is approved
  };

  return (
    <PayPalScriptProvider options={PayPalOptions}>
      <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
