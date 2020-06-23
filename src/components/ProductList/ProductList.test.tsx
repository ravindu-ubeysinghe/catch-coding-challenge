import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ProductList from './ProductList';

const mockedProducts = [
    {
        id: 'ffc4211a-fb81-45e3-b1d8-2d399a92aa89',
        name: 'Buy Olaplex No. 3 Hair Perfector',
        salePrice: 3145,
        retailPrice: 5000,
        imageUrl:
            'https://s.catch.com.au/images/product/0002/2114/593f690189ac9183721654_w200.jpg',
        quantityAvailable: 65,
    },
    {
        id: 'f56cb6f2-a926-4ff4-80be-4518b0d1997d',
        name: 'Havaianas Top Thongs -  Black',
        salePrice: 1499,
        retailPrice: 2500,
        imageUrl:
            'https://s.catch.com.au/images/product/0001/1431/57aa8e0fcba93464428129_w200.jpg',
        quantityAvailable: 71,
    },
    {
        id: '46397d56-2726-45de-8514-d8ed6984a600',
        name:
            '4 x 60pk Finish Quantum Max Powerball Super Charged Dishwashing Caps Lemon Sparkle',
        salePrice: 5900,
        retailPrice: 18417,
        imageUrl:
            'https://s.catch.com.au/images/product/0001/1909/5d47c0d64988e613254534_w200.jpg',
        quantityAvailable: 56,
    },
];

test('Fails to render Product List without a valid set of products', () => {
    let { queryByTestId } = render(<ProductList />);
    expect(queryByTestId('productList')).toBeNull();
});

test('Renders Product List with a valid set of products', () => {
    const { getByTestId } = render(<ProductList products={mockedProducts} />);
    const productFilters = getByTestId('productList');
    expect(productFilters).toBeInTheDocument();
});

test('Renders the correct number of products when passed in', () => {
    const { getByTestId } = render(<ProductList products={mockedProducts} />);
    const productFilters = getByTestId('productList');
    expect(
        productFilters.querySelectorAll('div[data-testid="productCard"]').length
    ).toBe(3);
});
