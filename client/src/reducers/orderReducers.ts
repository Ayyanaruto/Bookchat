import { Actions,OrderAction } from "../actions/types";
import { OrderState } from "../actions/types";
const initialState:OrderState={
    orders:[],
    isLoading:false,
    error:null
}

export const orderReducer = (state=initialState, action:OrderAction) => {
    switch (action.type) {
        case Actions.CREATE_ORDER:
            return { ...state, isLoading:false, error:null };
        case Actions.ORDER_ERROR:
            return { ...state, isLoading:false, error:action.payload };
        default:
            return state;
}
}
export default orderReducer;