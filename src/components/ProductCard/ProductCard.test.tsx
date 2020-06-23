import React from 'react';
import { render } from '@testing-library/react';
import ProductCard from './ProductCard';

const mockedProduct = {
    id: 'f56cb6f2-a926-4ff4-80be-4518b0d1997d',
    name: 'Havaianas Top Thongs -  Black',
    salePrice: 1499,
    retailPrice: 2500,
    imageUrl:
        'https://s.catch.com.au/images/product/0001/1431/57aa8e0fcba93464428129_w200.jpg',
    quantityAvailable: 71,
};

const mockedSoldOutProduct = {
    id: 'f56cb6f2-a926-4ff4-80be-4518b0d1997d',
    name: 'Havaianas Top Thongs -  Black',
    salePrice: 1499,
    retailPrice: 2500,
    imageUrl:
        'https://s.catch.com.au/images/product/0001/1431/57aa8e0fcba93464428129_w200.jpg',
    quantityAvailable: 0,
};

test('Fails to render Product Card without valid product prop', () => {
    const { queryByTestId } = render(<ProductCard />);
    expect(queryByTestId('productCard')).toBeNull();
});

test('Renders Product Card with a valid product prop', () => {
    const { getByTestId } = render(<ProductCard product={mockedProduct} />);
    const productCard = getByTestId('productCard');
    expect(productCard).toBeInTheDocument();
});

test('Renders Product Card with sold out indicator', () => {
    const { getByText } = render(
        <ProductCard product={mockedSoldOutProduct} />
    );
    const soldOutLabel = getByText('SOLD OUT');
    expect(soldOutLabel).toBeTruthy();
});
