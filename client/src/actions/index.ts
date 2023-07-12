import axios from "axios";
import { Dispatch } from "redux";
import { Actions, AuthAction, User } from "./types";


export const fetch_user = () => async (dispatch: Dispatch<AuthAction>) => {
  dispatch({ type: Actions.FETCH_LOADING, payload: true });
  try {
    const { data } = await axios.get<User>("/api/current_user");
    dispatch({ type: Actions.FETCH_SUCCESS, payload: data });
  } catch (e) {
    if (e instanceof Error) {
      dispatch({ type: Actions.FETCH_ERROR, payload: e.message });
    }
  }
};
