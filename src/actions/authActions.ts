import { Action } from "redux";

export interface SetTokenAction extends Action {
  type: "SET_TOKEN";
  payload: string;
}

export interface ClearTokenAction extends Action {
  type: "CLEAR_TOKEN";
}

export const setToken = (token: string): SetTokenAction => ({
  type: "SET_TOKEN",
  payload: token,
});

export const clearToken = (): ClearTokenAction => ({
  type: "CLEAR_TOKEN",
});

export type AuthAction = SetTokenAction | ClearTokenAction;
