import styled from "styled-components";
import { motion } from "framer-motion";
const Overlay = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.9);
`;

export default Overlay;
