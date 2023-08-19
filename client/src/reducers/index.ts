import { combineReducers } from "redux";
import { authReducer } from "./authReducers";
import { productsReducer } from "./productsReducer";
import { orderReducer } from "./orderReducers";
import { adminReducer } from "./adminReducers";
import { AuthState,ProductState,OrderState ,AdminState} from "../actions/types";

export interface StoreState{
    auth:AuthState
    product:ProductState,
    order:OrderState,
    admin:AdminState
}
const rootReducer = combineReducers<StoreState>({
    auth:authReducer,
    product:productsReducer,
    order:orderReducer,
    admin:adminReducer

});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;