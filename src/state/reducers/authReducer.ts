import { ACTIONS } from "../constants";
import { AuthState, Action } from "../types";

export const authReducer = (state: AuthState, action: Action) => {
    switch (action.type) {
      case ACTIONS.START_LOADING:
        return { ...state, loading: true };
      //SUCCESFULL LOGIN
      //FAILED LOGIN
      default:
        return state;
    }
};