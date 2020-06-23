import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ProductFilters from './ProductFilters';
import { ProductFilterType } from '../../types/Product';

const mockedFilters: ProductFilterType[] = [
    {
        field: 'salePrice',
        direction: 'asc',
        label: 'Lowest Price',
    },
    {
        field: 'salePrice',
        direction: 'desc',
        label: 'Highest Price',
    },
];

test('Fails to render Product Filters without a valid set of filters', () => {
    const { queryByTestId } = render(<ProductFilters />);
    expect(queryByTestId('productFilters')).toBeNull();
});

test('Renders Product Filters with a valid set of filters', () => {
    const { getByTestId } = render(<ProductFilters filters={mockedFilters} />);
    const productFilters = getByTestId('productFilters');
    expect(productFilters).toBeInTheDocument();
});

test('Clicking on option changes filter state', () => {
    const { getByTestId } = render(<ProductFilters filters={mockedFilters} />);
    const productFilters = getByTestId('productFilters');
    fireEvent.change(productFilters, { target: { value: 'salePrice-desc' } });
    const options = productFilters.querySelectorAll('option');

    expect(options[1].selected).toBeTruthy();
});
