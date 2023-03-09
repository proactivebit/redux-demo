import { connect } from "react-redux";
import { Summary } from "../components/Summary";
import {
  selectSubtotal,
  selectTipAmount,
  selectTipPercentage,
  selectTotal,
} from "../store/items/selectors";
import { updateTip } from "../store/tip/actions";

const mapStateToProps = (state) => {
  const subtotal = selectSubtotal(state);
  const tipAmount = selectTipAmount(state);
  const tipPercentage = selectTipPercentage(state);
  const total = selectTotal(state);

  return {
    tipPercentage: tipPercentage,
    subtotal: Number(subtotal).toFixed(2),
    tipAmount: Number(tipAmount).toFixed(2),
    total: Number(total).toFixed(2),
  };
};

const mapDispatchToProps = {
  updateTipPercentage: (percentage) => updateTip(percentage),
};

export const SummaryContainers = connect(
  mapStateToProps,
  mapDispatchToProps
)(Summary);
