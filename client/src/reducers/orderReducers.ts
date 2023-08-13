import { Actions, Order, OrderAction } from "../actions/types";
import { OrderState } from "../actions/types";
const initialState: OrderState = {
  orders: {
    id: "",
    currency: "",
    amount: 0,
    user: "",
  },
  isLoading: false,
  error: null,
};

export const orderReducer = (state = initialState, action: OrderAction) => {
  switch (action.type) {
    case Actions.CREATE_ORDER:
      return {
        ...state,
        isLoading: false,
        error: null,
        orders: action.payload,
      };
    case Actions.ORDER_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case Actions.ORDER_LOADING:
      return { ...state, isLoading: action.payload };
    case Actions.FETCH_ORDERS:
      return { ...state, isLoading: false, orders: action.payload };
    case Actions.FETCH_ORDER:
      return { ...state, isLoading: false, orders: action.payload };
      case Actions.UPDATE_ORDER:
        return { ...state, isLoading: false, };
    default:
      return state;
  }
};
export default orderReducer;
