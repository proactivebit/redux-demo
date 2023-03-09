import { combineReducers, createStore } from "redux";
import { itemsReducer } from "./items/reducer";
import { tipReducer } from "./tip/reducer";

const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
  combineReducers({ items: itemsReducer, tip: tipReducer }),
  enhancer
);
