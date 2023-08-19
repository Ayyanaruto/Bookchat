import { Actions,AuthAction} from "../actions/types"
import { AuthState } from "../actions/types"
const initialState:AuthState={
    user:null,
    isLoading:false,
    error:null
}

export const authReducer = (state=initialState, action:AuthAction) => {
    switch (action.type) {
        case Actions.FETCH_LOADING:
            return { ...state, isLoading:true, error:null, user:null };
        case Actions.FETCH_SUCCESS:
            return { ...state, isLoading:false, error:null, user:action.payload };
        case Actions.FETCH_ERROR:
            return { ...state, isLoading:false, error:action.payload, user:null };
        default:
            return state;
}
}
