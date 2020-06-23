/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';

import { ProductFilterType } from '../../types/Product';

interface ProductFiltersProps {
    filters: ProductFilterType[];
    setFilter: (filter: Pick<ProductFilterType, 'field' | 'direction'>) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
    filters = [],
    setFilter = () => {},
    ...props
}) => {
    const [selected, setSelected] = useState(
        `${filters[0].field}-${filters[0].direction}`
    );

    const handleSetFilter = (e: React.FormEvent<HTMLSelectElement>) => {
        const selectedFilter = e.currentTarget.value;

        setSelected(selectedFilter);

        // This is an exception as we need to read a string from the option value
        setFilter({
            field: (selectedFilter.split(
                '-'
            )[0] as unknown) as ProductFilterType['field'],
            direction: (selectedFilter.split(
                '-'
            )[1] as unknown) as ProductFilterType['direction'],
        });
    };

    if (filters.length <= 0) {
        return null;
    }

    return (
        <select
            value={selected}
            onChange={handleSetFilter}
            {...props}
            sx={{
                p: 'small',
                borderRadius: '8px',
                fontWeight: 'bold',
                backgroundImage: 'none',
                backgroundColor: 'transparent',
                color: 'textDark',
            }}
        >
            {filters.map((filter: ProductFilterType) => (
                <option
                    key={filter.label}
                    value={`${filter.field}-${filter.direction}`}
                >
                    {filter.label}
                </option>
            ))}
        </select>
    );
};

export default ProductFilters;
