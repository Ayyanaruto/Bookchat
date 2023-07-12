export enum Actions{
    FETCH_SUCCESS = 'fetch_success',
    FETCH_ERROR = 'fetch_error',
    FETCH_LOADING = 'fetch_loading',
}

export interface User{
    _id:string;
    googleId: string;
    email: string;
    displayName: string;
}

interface FetchUserAction{
    type: Actions.FETCH_SUCCESS;
    payload: User
}
 interface FetchErrorAction{
    type: Actions.FETCH_ERROR;
    payload: string
}
 interface FetchLoadingAction{
    type: Actions.FETCH_LOADING;
    payload: boolean
}
export interface AuthState{
    user:User|null,
    isLoading:boolean
    error:string|null

}

export type AuthAction = FetchUserAction|FetchErrorAction|FetchLoadingAction;