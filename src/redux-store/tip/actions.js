export const TIP_UPDATED = "TIP_UPDATED";

export const updateTip = (percentage) => ({
  type: TIP_UPDATED,
  payload: { percentage },
});
