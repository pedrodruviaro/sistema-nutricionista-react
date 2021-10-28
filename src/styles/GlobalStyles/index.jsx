import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.bodyBg};
        color: ${(props) => props.theme.dark};
    }
`;

export default GlobalStyles;
