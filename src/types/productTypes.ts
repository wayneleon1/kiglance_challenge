export interface Product {
  id: string;
  image: string;
  name: string;
}

export interface GetProductsResponse {
  data: {
    getProducts: {
      data: Product[];
    };
  };
}

export interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}
