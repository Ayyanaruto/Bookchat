import { Actions,ProductAction } from "../actions/types";
import { ProductState } from "../actions/types";
const initialState:ProductState={
    error:null,
    isLoading:false,
    products:[]
}

export const productsReducer = (state=initialState, action:ProductAction) => {
    switch (action.type) {
        case Actions.CREATE_PRODUCTS:
            return { ...state, error:null };
        case Actions.PRODUCTS_ERROR:
            return { ...state, error:action.payload };
        case Actions.FETCH_PRODUCTS:
            return { ...state, products:action.payload,isLoading:false };
        case Actions.FETCH_PRODUCT:
            return { ...state, product:action.payload,isLoading:false };
        case Actions.EDIT_PRODUCTS:
            return { ...state, error:null};
        case Actions.FETCH_PRODUCTS_LOADING:
            return { ...state, isLoading:action.payload };
            
        default:
            return state;
}
}