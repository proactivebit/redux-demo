export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const UPDATE_PRICE = "UPDATE_PRICE";
export const UPDATE_QUANITY = "UPDATE_QUANITY";

export const addItem = (name, price) => ({
  type: ADD_ITEM,
  payload: { name, price },
});

export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  payload: { id },
});

export const updatePrice = (id, price) => ({
  type: UPDATE_PRICE,
  payload: { id, price },
});

export const updateQuanity = (id, quanity) => ({
  type: UPDATE_QUANITY,
  payload: { id, quanity },
});
