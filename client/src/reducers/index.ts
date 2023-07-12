import { combineReducers } from "redux";
import { authReducer } from "./authReducers";
import { AuthState } from "../actions/types";

export interface StoreState{
    auth:AuthState
}
const rootReducer = combineReducers<StoreState>({
    auth:authReducer
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;