import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
};

const ENDPOINT = "https://star-wars-characters.glitch.me/api/search/";

export const fetchCharactersFromApi = createAsyncThunk(
  "characters/fetchCharacters",
  async (searchTerm) => {
    const response = await fetch(ENDPOINT + searchTerm).then((response) =>
      response.json()
    );
    return response.results;
  }
);

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    add: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: {
    [fetchCharactersFromApi.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [fetchCharactersFromApi.pending]: (state, action) => {
      state.loading = true;
    },
  },
});
