import { ProductFilterType } from '../../types/Product';

const filters: ProductFilterType[] = [
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

export default filters;
