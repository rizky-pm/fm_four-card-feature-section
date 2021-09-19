import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    body {
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        font-size: .9375rem;
        color: ${(props) => props.theme.colors.neutralDarkBlue};
        background-color: ${(props) => props.theme.colors.neutralLightGray};
    }
`;

export default GlobalStyles;
