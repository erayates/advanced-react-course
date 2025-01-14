import { createGlobalStyle } from "styled-components";
import { normalize } from "polished"; // Normalized and reset CSS

export const GlobalStyles = createGlobalStyle`
    ${normalize()}

    html {
        font-size: 16px;
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        margin: 10px;
    }
`;
