import styled from "styled-components";
import { motion } from "framer-motion";

const BuyButton = styled(motion.button)`
  padding: 4px 8px;
  background-color: transparent;
  background-size: 200% auto;
  border-radius: 10px;
  border: 1px solid #e2cdec;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  font-family: "Kufi-Bold";
  cursor: pointer;
  transition: 0.3s;

  /*&:hover {
    background-color:#e2cdec;
    color: #272145;
    border-color:#272145;
  }*/
`;
export default BuyButton;
