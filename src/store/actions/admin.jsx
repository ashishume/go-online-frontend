import * as ActionType from "./actionTypes";
import HttpService from "../../API/HttpService";
import { API_NAME } from "../../API/ApiPaths";
import history from "../../history";

export const adminSignIn = (formValues) => async (dispatch) => {
  const response = await HttpService.post(API_NAME.ADMIN_LOGIN, formValues);

  dispatch({
    type: ActionType.ADMIN_LOGIN,
    payload: response.data,
  });

  console.log(response);

  if (response.status == 200) {
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
