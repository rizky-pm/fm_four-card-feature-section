import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        primaryRed: 'hsl(0, 78%, 62%)',
        primaryCyan: 'hsl(180, 62%, 55%)',
        primaryOrange: 'hsl(34, 97%, 64%)',
        primaryBlue: 'hsl(212, 86%, 64%)',
        neutralDarkBlue: 'hsl(234, 12%, 34%)',
        neutralGrayishBlue: 'hsl(229, 6%, 66%)',
        neutralLightGray: 'hsl(0, 0%, 98%)',
    },
    fontweights: {
        extraLight: 200,
        regular: 400,
        semiBold: 600,
    },
    breakpoints: {
        portraitSmartphone: 'min-width: 480px',
        portraitTablets: 'min-width: 600px',
        landscapeTablets: 'min-width: 801px',
        laptops: 'min-width: 1025px',
        desktops: 'min-width: 1281px',
    },
};

const Theme = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
