import { createSelector } from "reselect";
export const selectItem = (state, id) =>
  state.items.find((item) => item.id === id);
export const selectItemTotal = createSelector(
  [selectItem],
  (item) => item.price * item.quanity
);
export const selectItems = (state) => state.items;
export const selectTipPercentage = (state) => state.tip.tipPercentage;
export const selectSubtotal = createSelector([selectItems], (items) =>
  items.reduce(
    (sum, currentValue) => (sum += currentValue.price * currentValue.quanity),
    0
  )
);
export const selectTipAmount = createSelector(
  [selectSubtotal, selectTipPercentage],
  (subtotal, tipPercentage) => (subtotal * tipPercentage) / 100
);

export const selectTotal = createSelector(
  [selectSubtotal, selectTipAmount],
  (subtotal, tipAmount) => subtotal + tipAmount
);
