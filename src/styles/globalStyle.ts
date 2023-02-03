import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;
    letter-spacing: 0.125em;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: black;
  }

  .three-canvas {
    position: fixed !important;
    top: 50%;
    left: 50%;
    width: 100vw !important;
    height: 100vh !important;
    transform: translate(-50%, -50%);

    canvas {
      transform: rotateZ(20deg);
    }
  }
`;

export default globalStyle;
