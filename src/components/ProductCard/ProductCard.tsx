/** @jsx jsx */
import { jsx } from 'theme-ui';

import { ProductType } from '../../types/Product';
import { convertCentsToDollars } from '../../utils/currency';

interface ProductCardProps {
    product?: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, ...props }) => {
    if (!product) {
        return null;
    }

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
            data-testid="productCard"
            {...props}
        >
            <div
                sx={{
                    height: '55%',
                    width: '100%',
                    mb: 'large',
                    bg: product.imageUrl ? 'none' : 'cardBackground',
                    color: 'white',
                    position: 'relative',
                }}
            >
                {product.imageUrl ? (
                    <img src={product.imageUrl} alt={product.name}></img>
                ) : (
                    <span>No image found</span>
                )}
                {product.quantityAvailable === 0 && (
                    <div
                        sx={{
                            position: 'absolute',
                            bottom: 'small',
                            right: 'small',
                            p: 'small',
                            color: 'white',
                            backgroundColor: '#979797',
                            fontWeight: 'bold',
                        }}
                    >
                        SOLD OUT
                    </div>
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
