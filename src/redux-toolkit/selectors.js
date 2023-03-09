export const selectHumans = (state) => state.humans;
export const selectTasks = (state) => state.tasks;
export const selectTask = (state, id) =>
  state.tasks.find((task) => task.id === id);
export const selectTasksList = (state, tasksIds) =>
  state.tasks.filter((task) => tasksIds.includes(task.id));
export const selectCharacters = (state) => state.characters;
