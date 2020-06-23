/** @jsx jsx */
import { jsx } from 'theme-ui';

import ProductCard from '../ProductCard/ProductCard';
import { ProductType } from '../../types/Product';

interface ProductListProps {
    products?: ProductType[];
}

const ProductList: React.FC<ProductListProps> = ({ products = [] }) => {
    if (!products || products.length < 1) {
        return null;
    }

    return (
        <div
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}
            data-testid="productList"
        >
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    sx={{
                        width: ['100%', '45%', '22%'],
                        mr: [null, '10%', '4%'],
                        mb: 'large',
                        '&:nth-of-type(2n)': {
                            mr: [null, 0, 'auto'],
                        },
                        '&:nth-of-type(4n)': {
                            mr: [null, null, 0],
                        },
                    }}
                />
            ))}
        </div>
    );
};

export default ProductList;
