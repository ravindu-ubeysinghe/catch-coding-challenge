/** @jsx jsx */
import { jsx } from 'theme-ui';

import Product from '../../types/Product';
import { convertCentsToDollars } from '../../utils/currency';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, ...props }) => {
    return (
        <div
            sx={{
                height: '300px',
                boxShadow: 'base',
                p: 'large',
                '& > div': {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
            }}
            {...props}
        >
            <div
                sx={{
                    height: '55%',
                    width: '100%',
                    mb: 'large',
                    bg: product.imageUrl ? 'none' : 'cardBackground',
                    color: 'white',
                }}
            >
                {product.imageUrl ? (
                    <img src={product.imageUrl} alt={product.name}></img>
                ) : (
                    <span>No image found</span>
                )}
            </div>
            <div sx={{ textAlign: 'center', height: '20%', fontSize: 'body' }}>
                {product.name || ''}
            </div>
            <div
                sx={{
                    height: '10%',
                    textAlign: 'center',
                    textDecoration: 'line-through',
                }}
            >
                {product.retailPrice && product.retailPrice > 0
                    ? convertCentsToDollars(product.retailPrice)
                    : ''}
            </div>
            <div
                sx={{
                    height: '10%',
                    textAlign: 'center',
                    fontSize: 'h1',
                    fontWeight: 'bold',
                }}
            >
                {product.salePrice
                    ? convertCentsToDollars(product.salePrice)
                    : ''}
            </div>
        </div>
    );
};

export default ProductCard;
