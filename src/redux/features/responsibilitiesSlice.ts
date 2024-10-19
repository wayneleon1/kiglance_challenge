import { fetchResponsibilities } from "@/services/fetchResponsibilities";
import { ResponsibilitiesState } from "@/types/responsibilitytypes";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ResponsibilitiesState = {
  responsibilities: [],
  loading: false,
  error: null,
};

const responsibilitiesSlice = createSlice({
  name: "responsibilities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchResponsibilities.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchResponsibilities.fulfilled, (state, action) => {
        state.loading = false;
        state.responsibilities = action.payload;
      })
      .addCase(fetchResponsibilities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default responsibilitiesSlice.reducer;
