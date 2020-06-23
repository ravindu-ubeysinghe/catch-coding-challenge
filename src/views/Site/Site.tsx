import React from 'react';
import { ThemeProvider } from 'theme-ui';

import theme from '../../theme';
import ProductListPage from '../ProductListPage/ProductListPage';

const Site: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <ProductListPage />
        </ThemeProvider>
    );
};

export default Site;
