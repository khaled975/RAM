import styled from "styled-components";
import { Link } from "react-router-dom";

const MainButton = styled(Link)`
  padding: 12px 40px;
  background-image: linear-gradient(
    to right,
    #6e1815 0%,
    #b31217 51%,
    #6e1815 100%
  );
  background-size: 200% auto;
  border-radius: 8px;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  font-family: "Kufi-Bold";
  transition: 0.5s;

  &:hover {
    background-position: right center;
  }
`;
export default MainButton;
