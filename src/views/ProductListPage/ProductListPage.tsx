/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment, useEffect, useState, useMemo, useCallback } from 'react';
import axios, { AxiosResponse } from 'axios';

import PageHeader from '../../components/PageHeader/PageHeader';
import ProductList from '../../components/ProductList/ProductList';
import ProductFilters from '../../components/ProductFilters/ProductFilters';
import {
    ProductListType,
    ProductType,
    ProductFilterType,
} from '../../types/Product';
import productFilters from './productFilters';

const ProductListPage: React.FC = () => {
    const [meta, setMeta] = useState<ProductListType['metadata'] | undefined>(
        undefined
    );
    const [products, setProducts] = useState<ProductType[] | undefined>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);

    const sortProducts = useCallback(
        (
            products?: ProductType[],
            filter: Pick<
                ProductFilterType,
                'field' | 'direction'
            > = productFilters[0]
        ): ProductType[] => {
            return [...(products || [])].sort((a, b) => {
                if (filter.direction === 'asc') {
                    return (
                        (a[filter.field] as number) -
                        (b[filter.field] as number)
                    );
                }

                if (filter.direction === 'desc') {
                    return (
                        (b[filter.field] as number) -
                        (a[filter.field] as number)
                    );
                }

                return 0;
            });
        },
        []
    );

    const fetchProducts = useCallback((): void => {
        setLoading(true);
        axios
            .get(
                'https://cors-anywhere.herokuapp.com/http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/challenge-3/response.json'
            )
            .then((res: AxiosResponse<ProductListType>) => {
                setMeta(res.data.metadata);
                setProducts(sortProducts(res.data.results));
                setError(undefined);
            })
            .catch((err) => {
                setError(err?.message);
            })
            .finally(() => setLoading(false));
    }, [sortProducts]);

    const handleFilterChange = useCallback(
        (filter: Pick<ProductFilterType, 'field' | 'direction'>) => {
            setProducts(sortProducts(products, filter));
        },
        [products, sortProducts]
    );

    useEffect(fetchProducts, []);

    const pageContent = useMemo(() => {
        if (loading) {
            return <div>Loading</div>;
        }

        if (error || !products) {
            return (
                <div>
                    {error || 'Something went wrong, please try again later'}
                </div>
            );
        }

        return <ProductList products={products} />;
    }, [error, loading, products]);

    return (
        <Fragment>
            <PageHeader>
                <div
                    sx={{
                        display: 'flex',
                        justifyContent: ['center', 'flex-end'],
                        alignItems: ['center', 'flex-end'],
                        height: '100%',
                    }}
                >
                    <div
                        sx={{
                            fontSize: 'h2',
                            fontWeight: 'bold',
                            textTransform: 'capitalize',
                            mr: 'large',
                            color: 'textDark',
                        }}
                    >
                        {meta?.query || ''}
                    </div>
                    <ProductFilters
                        filters={productFilters}
                        setFilter={handleFilterChange}
                    />
                </div>
            </PageHeader>
            {pageContent}
        </Fragment>
    );
};

export default ProductListPage;
