import React, { createContext, useReducer } from 'react';
import { authReducer } from '../reducers/authReducer';
import { AuthState, ContextProps } from '../types';

const initialState: AuthState = {
  loading: false,
  authenticated: false,
  error: "",
  email: ""
};

const AuthContext = createContext<ContextProps>({
  state: initialState,
  dispatch: () => {},
});

export const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;