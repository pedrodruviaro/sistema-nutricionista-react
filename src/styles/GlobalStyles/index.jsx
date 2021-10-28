import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Open Sans', sans-serif;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme.bodyBg};
        color: ${(props) => props.theme.dark};
    }

    h1,h2,h3,h4,h5,h6{
        font-weight: 500;
    }
`;

export default GlobalStyles;
