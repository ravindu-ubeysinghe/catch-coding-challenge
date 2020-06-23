export type ProductType = {
    id: string;
    name: string;
    salePrice: number;
    retailPrice: number;
    imageUrl: string;
    quantityAvailable: number;
};

export type ProductListType = {
    metadata: {
        query: string;
        total: number;
        page: number;
        pages: number;
    };
    results: ProductType[];
};

export type ProductFilterType = {
    // 'retailPrice' | 'quantityAvailable' have been added as extra for future extensibility
    field: keyof Pick<
        ProductType,
        'salePrice' | 'retailPrice' | 'quantityAvailable'
    >;
    direction: 'asc' | 'desc';
    label: string;
};
