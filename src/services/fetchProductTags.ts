import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetProductTagsResponse } from "@/types/productTagsTypes";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchProductTags = createAsyncThunk(
  "productTags/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post<GetProductTagsResponse>(API_URL!, {
        query: `
          query GetProductTags {
            getProductTags {
              data {
                id
                name
              }
            }
          }
        `,
      });

      return response.data.data.getProductTags.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data || error.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);
