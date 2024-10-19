import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetResponsibilitiesResponse } from "@/types/responsibilitytypes";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchResponsibilities = createAsyncThunk(
  "responsibilities/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post<GetResponsibilitiesResponse>(API_URL!, {
        query: `
          query GetResponsibilities {
            getResponsibilities {
              data {
                name
                id
              }
            }
          }
        `,
      });

      return response.data.data.getResponsibilities.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data || error.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);
