import React from 'react';

export interface AuthState {
    loading: boolean;
    authenticated: boolean;
    error: string;
    email: string;
  }
  
export interface Action {
    type: string;
    payload?: any;
}

export interface ContextProps {
    state: AuthState;
    dispatch: React.Dispatch<Action>;
}