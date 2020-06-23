/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment, useEffect, useState, useMemo } from 'react';
import axios, { AxiosResponse } from 'axios';

import PageHeader from '../../components/PageHeader/PageHeader';
import ProductList from '../../components/ProductList/ProductList';
import { ProductListType } from '../../types/Product';

const ProductListPage: React.FC = () => {
    const [response, setResponse] = useState<ProductListType | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);

    const fetchProducts = (): void => {
        setLoading(true);
        axios
            .get(
                'https://cors-anywhere.herokuapp.com/http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/challenge-3/response.json'
            )
            .then((res: AxiosResponse<ProductListType>) => {
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

        return <ProductList products={response?.results} />;
    }, [error, loading, response]);

    return (
        <Fragment>
            <PageHeader />
            {pageContent}
        </Fragment>
    );
};

export default ProductListPage;
