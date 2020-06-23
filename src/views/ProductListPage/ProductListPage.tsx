/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment, useEffect, useState, useMemo } from 'react';
import axios, { AxiosResponse } from 'axios';

import PageHeader from '../../components/PageHeader/PageHeader';
import ProductCard from '../../components/ProductCard/ProductCard';
import Product from '../../types/Product';

type ProductList = {
    metadata: {
        query: string;
        total: number;
        page: number;
        pages: number;
    };
    results: Product[];
};

const ProductListPage: React.FC = () => {
    const [response, setResponse] = useState<ProductList | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);

    const fetchProducts = (): void => {
        setLoading(true);
        axios
            .get(
                'https://cors-anywhere.herokuapp.com/http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/challenge-3/response.json'
            )
            .then((res: AxiosResponse<ProductList>) => {
                setResponse(res.data);
                setError(undefined);
            })
            .catch((err) => {
                setError(err?.message);
            })
            .finally(() => setLoading(false));
    };

    useEffect(fetchProducts, []);

    const pageContent = useMemo(() => {
        if (loading) {
            return <div>Loading</div>;
        }

        if (error || !response) {
            return (
                <div>
                    {error || 'Something went wrong, please try again later'}
                </div>
            );
        }

        return (
            <div
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}
            >
                {(response.results || []).map((product) => (
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
    }, [error, loading, response]);

    return (
        <Fragment>
            <PageHeader />
            {pageContent}
        </Fragment>
    );
};

export default ProductListPage;
