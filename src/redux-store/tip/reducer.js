import { TIP_UPDATED } from "./actions";

const initState = {
  tipPercentage: 20,
};

export const tipReducer = (state = initState, action) => {
  if (action.type === TIP_UPDATED) {
    return { tipPercentage: action.payload.percentage };
  }
  return state;
};
