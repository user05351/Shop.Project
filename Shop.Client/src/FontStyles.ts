import { createGlobalStyle } from "styled-components";
import Roboto1 from "./fonts/Roboto1.woff2";
import Roboto2 from "./fonts/Roboto1.woff2";
import Roboto3 from "./fonts/Roboto1.woff2";

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: "Roboto";
        src: 
            url(${Roboto1}) format("woff2"),
            url(${Roboto2}) format("woff2"),
            url(${Roboto3}) format("woff2");
    }

    body {
        margin: 0 auto;
    }

    * {
        box-sizing: border-box;
    }

    ::after {
        box-sizing: border-box;
    }

    ::before {
        box-sizing: border-box;
    }
`

export default FontStyles;
