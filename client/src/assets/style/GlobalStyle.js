import { createGlobalStyle } from "styled-components";
import variables from "./GlobalVariables";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    :root {
        ${variables};
    }

    html,
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    ul, ol, li{
        list-style-type: none;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }

`

export default GlobalStyle;