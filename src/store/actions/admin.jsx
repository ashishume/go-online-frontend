import * as ActionType from "./actionTypes";
import HttpService from "../../API/HttpService";
import { API_NAME } from "../../API/ApiPaths";
import history from "../../history";
// import { Message } from "semantic-ui-react";
// import React from "react";
export const adminSignIn = (formValues) => async (dispatch) => {
  const response = await HttpService.post(API_NAME.ADMIN_LOGIN, formValues);

  dispatch({
    type: ActionType.ADMIN_LOGIN,
    payload: response.data,
  });

  if (response.status === 200) {
    localStorage.setItem("type", response.data.result.type);
    history.push("/admin-panel-access/admin-dashboard");
  }
};
export const fetchContainers = () => async (dispatch) => {
  const response = await HttpService.get(API_NAME.CONTAINERS);

  dispatch({
    type: ActionType.FETCH_CONTAINERS,
    payload: response.data.containers,
  });
};

export const contactForm = (body) => async (dispatch) => {
  const response = await HttpService.post(API_NAME.CONTACT, body);
  dispatch({
    type: ActionType.CONTACT,
    payload: response.data,
  });

  if (response.status === 200) {
    history.push("/");
  }
};
export const addContainer = (body) => async (dispatch) => {
  const response = await HttpService.post(API_NAME.CONTAINERS, body);
  dispatch({
    type: ActionType.ADD_CONTAINERS,
    payload: response.data,
  });

  if (response.status === 200) {
    history.push("/admin-panel-access/admin-dashboard");
  }
};
export const addUser = (body) => async (dispatch) => {
  const response = await HttpService.post(API_NAME.AUTH, body);
  dispatch({
    type: ActionType.ADD_USER,
    payload: response.data,
  });

  if (response.status === 200) {
    history.push("/admin-panel-access/admin-dashboard");
  }
};
export const fetchUser = () => async (dispatch) => {
  const response = await HttpService.get(API_NAME.AUTH);
  dispatch({
    type: ActionType.FETCH_USER,
    payload: response.data.users,
  });
};
