import produce from "immer";
import { ADD_ITEM, REMOVE_ITEM, UPDATE_PRICE, UPDATE_QUANITY } from "./actions";

let id = 1;

const initState = [{ id: id++, name: "Pizza", price: 200, quanity: 1 }];

export const itemsReducer = (state = initState, action) => {
  if (action.type === ADD_ITEM) {
    return produce(state, (draftState) => {
      draftState.push({ id: id++, quanity: 1, ...action.payload });
    });
  }
  if (action.type === REMOVE_ITEM) {
    console.log(action.payload);
    return state.filter((item) => item.id !== action.payload.id);
  }
  if (action.type === UPDATE_PRICE) {
    return produce(state, (draftState) => {
      const item = draftState.find((item) => item.id === action.payload.id);
      item.price = action.payload.price;
    });
  }
  if (action.type === UPDATE_QUANITY) {
    return produce(state, (draftState) => {
      const item = draftState.find((item) => item.id === action.payload.id);
      item.quanity = action.payload.quanity;
    });
  }
  return state;
};
