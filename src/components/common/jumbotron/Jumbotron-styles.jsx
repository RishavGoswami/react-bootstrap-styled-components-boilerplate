import styled from "styled-components";
import bg from "../../../assets/image/background.jpg";

export const Styles = styled.div`
  .jumbo {
    background: url(${bg}) no-repeat fixed;
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
  }
`;
export const Overlay = styled.div`
  background: black;
  opacity: 0.5;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
