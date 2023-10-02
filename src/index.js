import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import App from "./App";
// import 'bootstrap/dist/css/bootstrap.min.css';

//import { PayPalScriptProvider } from "@paypal/react-paypal-js";
const root = ReactDOM.createRoot(document.getElementById("root"));
/*const initialOptions = {
  clientId: process.env.clientId,
  currency: "USD",
  intent: "capture",
};*/
root.render(
  /*<PayPalScriptProvider options={initialOptions}>*/
    <App />
  /*</PayPalScriptProvider>*/
);

