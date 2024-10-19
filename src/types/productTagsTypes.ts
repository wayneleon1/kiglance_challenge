export interface ProductTag {
  id: string;
  name: string;
}

export interface GetProductTagsResponse {
  data: {
    getProductTags: {
      data: ProductTag[];
    };
  };
}

export interface ProductTagsState {
  tags: ProductTag[];
  loading: boolean;
  error: string | null;
}
