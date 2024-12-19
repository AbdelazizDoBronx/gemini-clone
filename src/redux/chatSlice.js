import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import run from "../config/AiModel";

// Define the async thunk to handle the asynchronous operation
export const fetchData = createAsyncThunk(
  "chat/fetchData", // action type
  async (input, thunkAPI) => {
    // This function runs the async code, for example calling an API or a function
    const result = await run(input); // Assuming `run` returns the result
    return result.response.text(); // Return the response text as the result
  }
);

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    history: [],
    result: {},  // Initialize `result` as an empty object
    currentInput: '',
    loading: false, // Add a loading state to track the status
    error: null // Optionally, handle errors
  },
  reducers: {
    addItem: (state, action) => {
      state.history.push(action.payload); // Add new item to the history
    },
    setCurrentInput: (state, action) => {
      state.currentInput = action.payload; // Update the current input
    }
  },
  extraReducers: (builder) => {
    // Handle pending, fulfilled, and rejected states of the async thunk
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true; // Set loading state when request is pending
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false; // Set loading to false when data is fetched
        state.result = action.payload; // Update `result` with the fetched data
        state.history.push(action.payload); // Save the fetched result to the history
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false; // Set loading to false if the request fails
        state.error = action.error.message; // Optionally handle errors
      });
  }
});

// Export the action creators
export const { addItem, setCurrentInput } = chatSlice.actions;

// Export the reducer
export default chatSlice.reducer;
