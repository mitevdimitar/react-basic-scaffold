import React from 'react';

export interface AuthState {
    loading: boolean;
    authenticated: boolean;
    error: string;
    user: string;
}

export interface AuthPayload {
    user?: string,
    error?: string
}
  
export interface AuthAction {
    type: string;
    payload?: AuthPayload;
}

export interface ContextProps {
    state: AuthState;
    dispatch: React.Dispatch<AuthAction>;
}

export enum ActionTypes {
    StartLogin = "START_LOGIN",
    Success = "SUCCESSFUL_LOGIN",
    Failure = "FAILED_LOGIN"
}