import { createSlice, nanoid } from "@reduxjs/toolkit";
import { tasksSilce } from "./tasksSlice";

const createHuman = (name) => ({
  id: nanoid(),
  name,
  tasksIds: [],
});

const initialState = [createHuman("Dawid"), createHuman("Piotr")];

export const humansSlice = createSlice({
  name: "humans",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(createHuman(action.payload));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(tasksSilce.actions.assignToUser, (state, action) => {
      for (const human of state) {
        if (human.id === action.payload.userId) {
          human.tasksIds.push(action.payload.taskId);
        } else {
          human.tasksIds = human.tasksIds.filter(
            (item) => item !== action.payload.taskId
          );
        }
      }
    });
  },
});
