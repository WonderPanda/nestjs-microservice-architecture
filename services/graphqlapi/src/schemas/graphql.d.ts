export interface Brand {
    name?: string;
}

export interface CatalogItem {
    id?: string;
    name?: string;
    description?: string;
    price?: number;
    brand?: Brand;
}

export interface IQuery {
    getBrands(): Brand[] | Promise<Brand[]>;
    getCatalogItems(): CatalogItem[] | Promise<CatalogItem[]>;
}
