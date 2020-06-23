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
            py: 'large',
        }}
    >
        <img
            sx={{ maxWidth: '200px', flex: 1 }}
            src={logo}
            alt="Catch.com.au logo"
        />
        <div sx={{ flex: 2 }}>{children}</div>
    </div>
);

export default PageHeader;
