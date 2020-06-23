import React from 'react';
import { render } from '@testing-library/react';
import PageHeader from './PageHeader';

test('Renders Page Header', () => {
    const { getByTestId } = render(<PageHeader />);
    const pageHeader = getByTestId('pageHeader');
    expect(pageHeader).toBeInTheDocument();
});

test('Renders App Logo', () => {
    const { getByTestId } = render(<PageHeader />);
    const logo = getByTestId('logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toBeVisible();
});
