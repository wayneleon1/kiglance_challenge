import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetProductsResponse } from "@/types/productTypes";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post<GetProductsResponse>(API_URL!, {
        query: `
          query GetProducts {
            getProducts {
              data {
                id
                image
                name
              }
            }
          }
        `,
      });

      return response.data.data.getProducts.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("Error details:", {
          response: error.response?.data,
          status: error.response?.status,
          message: error.message,
        });
        return rejectWithValue(error.response?.data || error.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);
