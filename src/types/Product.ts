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
