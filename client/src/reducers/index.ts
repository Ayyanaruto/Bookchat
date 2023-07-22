import { combineReducers } from "redux";
import { authReducer } from "./authReducers";
import { productsReducer } from "./productsReducer";
import { AuthState,ProductState } from "../actions/types";

export interface StoreState{
    auth:AuthState
    product:ProductState
}
const rootReducer = combineReducers<StoreState>({
    auth:authReducer,
    product:productsReducer

});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;