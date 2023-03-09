import { configureStore } from "@reduxjs/toolkit";
import { charactersSlice } from "./charactersSlice";
import { humansSlice } from "./humansSlice";
import { tasksSilce } from "./tasksSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksSilce.reducer,
    humans: humansSlice.reducer,
    characters: charactersSlice.reducer,
  },
});
