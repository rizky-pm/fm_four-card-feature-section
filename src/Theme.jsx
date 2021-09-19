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
};

const Theme = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
