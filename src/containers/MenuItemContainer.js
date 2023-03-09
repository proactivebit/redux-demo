import { connect } from "react-redux";
import { MenuItem } from "../components/MenuItem";
import { removeItem, updatePrice, updateQuanity } from "../store/items/actions";
import { selectItemTotal } from "../store/items/selectors";

const mapStateToProps = (state, ownProps) => {
  return {
    total: selectItemTotal(state, ownProps.id),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRemove: () => dispatch(removeItem(ownProps.id)),
    onUpdatePrice: (price) => dispatch(updatePrice(ownProps.id, price)),
    onUpdateQuanity: (quanity) => dispatch(updateQuanity(ownProps.id, quanity)),
  };
};

export const MenuItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);
