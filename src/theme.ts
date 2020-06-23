export default {
    colors: {
        text: '#adafb1',
        textDark: '#333333',
        background: '#fff',
        /* specific colours */
        cardBackground: '#666',
        /* generics */
        white: '#fff',
    },
    fonts: {
        main: 'Roboto, Arial, Helvetica, sans-serif',
    },
    fontSizes: {
        small: '12px',
        body: '14px',
        h4: '12px',
        h3: '14px',
        h2: '18px',
        h1: '22px',
    },
    fontWeights: {
        regular: 400,
        bold: 700,
    },
    space: {
        small: '5px',
        regular: '10px',
        large: '20px',
        xlarge: '40px',
    },
    shadows: {
        base: '0 1px 4px 1px rgba(0, 0, 0, 0.08)',
    },
    breakpoints: ['480px', '1024px', '1440px', '1920px'],
    styles: {
        root: {
            fontFamily: 'main',
            fontWeight: 'regular',
            px: 'xlarge',
            '& div, & p, & select': {
                fontSize: 'body',
                color: 'text',
            },
        },
    },
};
