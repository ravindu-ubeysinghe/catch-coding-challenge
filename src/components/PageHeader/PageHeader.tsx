/** @jsx jsx */
import { jsx } from 'theme-ui';

import logo from './logo.svg';

const PageHeader: React.FC = ({ children, ...props }) => (
    <div
        {...props}
        sx={{
            maxWidth: '100%',
            display: 'flex',
            alignContent: 'center',
            flexDirection: ['column', 'row'],
            py: 'large',
        }}
        data-testid="pageHeader"
    >
        <img
            sx={{
                maxWidth: ['100%', '200px'],
                maxHeight: ['80px', 'none'],
                flex: 1,
            }}
            src={logo}
            alt="Catch.com.au logo"
            data-testid="logo"
        />
        <div sx={{ flex: [1, 2], mt: ['large', 0] }}>{children}</div>
    </div>
);

export default PageHeader;
