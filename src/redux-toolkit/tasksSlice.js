import { createSlice, nanoid } from "@reduxjs/toolkit";

const createTask = (title) => ({
  id: nanoid(),
  title,
  completed: false,
  assignedTo: "",
});

const initialState = [
  createTask("Ordere more food"),
  createTask("Water some plants"),
];

export const tasksSilce = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(createTask(action.payload));
    },
    toogle: (state, action) => {
      const task = state.find((item) => item.id === action.payload.id);
      task.completed = action.payload.completed;
    },
    assignToUser: (state, action) => {
      const task = state.find((item) => item.id === action.payload.taskId);
      task.assignedTo = action.payload.userId;
    },
  },
});
