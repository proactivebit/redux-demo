import { DECREMENT, INCREMENT, SET } from "./actions";

const initalState = { count: 400 };

export const reducer = (state = initalState, action) => {
  if (action.type === INCREMENT) {
    return { count: state.count + 1 };
  }
  if (action.type === DECREMENT) {
    return { count: state.count - 1 };
  }
  if (action.type === SET) {
    return { count: parseInt(action.payload) };
  }
  return state;
};
