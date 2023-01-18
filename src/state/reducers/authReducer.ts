import { AuthState, AuthAction, ActionTypes } from "../types";

export const authReducer = (state: AuthState, action: AuthAction) => {
    switch (action.type) {
      case ActionTypes.StartLogin:
        return { ...state, loading: true, error: "" };
      case ActionTypes.Success:
        return { ...state, loading: false, authenticated: true, user: action.payload && action.payload.user ? action.payload.user : ""};
      case ActionTypes.Failure:
        return { ...state, loading: false, error: action.payload && action.payload.error ? action.payload.error : ""};
      default:
        return state;
    }
};