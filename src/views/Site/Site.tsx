import React from 'react';
import { ThemeProvider } from 'theme-ui';

import MainLayout from '../MainLayout/MainLayout';
import theme from '../../theme';

const Site = () => {
    return (
        <ThemeProvider theme={theme}>
            <MainLayout />
        </ThemeProvider>
    );
};

export default Site;
