import { Actions,AdminAction } from "../actions/types";
import { AdminState } from "../actions/types";
const initialState:AdminState={
    admin:null,
    isLoading:false,
    error:null,
    message:""
}

export const adminReducer = (state=initialState, action:AdminAction) => {
    switch (action.type) {
        case Actions.ADMIN_LOADING:
            return { ...state, isLoading:true, error:null, admin:null };
        case Actions.FETCH_ADMIN:
            return { ...state, isLoading:false, error:null, admin:action.payload,message:"" };
        case Actions.ADMIN_ERROR:
            return { ...state, isLoading:false, error:action.payload, admin:null };
        case Actions.LOGIN_ADMIN:
            return { ...state, isLoading:false, error:null, admin:null,message:action.payload };
        case Actions.LOGOUT_ADMIN:
            return { ...state, isLoading:false, error:null, admin:null,message:action.payload };
        default:
            return state;
}
}