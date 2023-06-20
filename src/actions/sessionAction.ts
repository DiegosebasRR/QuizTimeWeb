import { Action } from "redux";

export interface SetSessionAction extends Action {
  type: "SET_SESSION";
  payload: boolean;
}

export interface ClearSessionAction extends Action {
  type: "CLEAR_SESSION";
  payload: boolean;
}

export const setSession = (session: boolean): SetSessionAction => ({
  type: "SET_SESSION",
  payload: session,
});

export const clearToken = (session: boolean): ClearSessionAction => ({
  type: "CLEAR_SESSION",
  payload: session,
});

export type SessionAction = SetSessionAction | ClearSessionAction;
