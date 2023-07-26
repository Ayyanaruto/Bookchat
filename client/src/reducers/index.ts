import { combineReducers } from "redux";
import { authReducer } from "./authReducers";
import { productsReducer } from "./productsReducer";
import { orderReducer } from "./orderReducers";
import { AuthState,ProductState,OrderState } from "../actions/types";

export interface StoreState{
    auth:AuthState
    product:ProductState,
    order:OrderState
}
const rootReducer = combineReducers<StoreState>({
    auth:authReducer,
    product:productsReducer,
    order:orderReducer

});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;