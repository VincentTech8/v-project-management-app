import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface initialStateTypes {
  isSidebarCollapsed: boolean;
  isDarkMode: boolean;
}

// Define the initial state using that type
const initialState = {
  isSidebarCollapsed: false,
  isDarkMode: false,
};

// Create a slice
export const globalSlice = createSlice({
  name: "global", // Name of the slice
  initialState, // The initial state
  reducers: {
    // A function where just passing in the Boolean to change the state of isSidebarCollaped or isDarkMode
    setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = action.payload;
    },
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  }, // Reducer functions
});

// Export actions for use in components
export const { setIsSidebarCollapsed, setIsDarkMode } = globalSlice.actions;

// Export the reducer to be used in the store
export default globalSlice.reducer;
