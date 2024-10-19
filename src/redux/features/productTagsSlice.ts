import { fetchProductTags } from "@/services/fetchProductTags";
import { ProductTagsState } from "@/types/productTagsTypes";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ProductTagsState = {
  tags: [],
  loading: false,
  error: null,
};

const productTagsSlice = createSlice({
  name: "productTags",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductTags.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductTags.fulfilled, (state, action) => {
        state.loading = false;
        state.tags = action.payload;
      })
      .addCase(fetchProductTags.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default productTagsSlice.reducer;
