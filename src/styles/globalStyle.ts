import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;
  }

  body {
    background-color: black;
  }


  canvas {
    width: 100vw !important;
    height: 100vh !important;
  }
`;

export default globalStyle;
