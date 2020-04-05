import * as ActionType from "./actionTypes";
import HttpService from "../../API/HttpService";
import { API_NAME } from "../../API/ApiPaths";
import history from "../../history";

export const signIn = (formValues) => async (dispatch) => {
  const response = await HttpService.post(API_NAME.SIGN_IN, formValues);

  dispatch({
    type: ActionType.SIGN_IN,
    payload: response.data.user,
  });

  if (response.status === 200) {
    const data = response.data.user;
    localStorage.setItem("id", data._id);
    localStorage.setItem("name", data.name);
    localStorage.setItem("email", data.email);
    localStorage.setItem("phone", data.phone);
    localStorage.setItem("user_plan", data.user_plan);
    localStorage.setItem("containerId", data.containerId);

    // history.push("/dashboard");
    window.location.href = "/dashboard";
  }
};

export const fetchActiveMeetings = (query) => async (dispatch) => {
  const response = await HttpService.get(API_NAME.MEETING, {
    params: query,
  });

  dispatch({
    type: ActionType.FETCH_ACTIVE_MEETINGS,
    payload: response.data.data,
  });
};

export const fetchInActiveMeetings = (query) => async (dispatch) => {
  const response = await HttpService.get(API_NAME.MEETING, {
    params: query,
  });

  dispatch({
    type: ActionType.FETCH_INACTIVE_MEETINGS,
    payload: response.data.data,
  });
};

export const createMeeting = (body) => async (dispatch) => {
  const response = await HttpService.post(API_NAME.MEETING, body);

  dispatch({
    type: ActionType.CREATE_MEETING,
    payload: response.data.data.room,
  });

  // const roomId = response.data.data.room.id;

  if (response.status === 200) {
    history.push("/dashboard");
    // history.push(`/meeting-room/${roomId}`);
  }
};

export const fetchMeetingByRoomId = (query) => async (dispatch) => {
  const response = await HttpService.get(API_NAME.MEETING, {
    params: query,
  });

  dispatch({
    type: ActionType.FETCH_MEETING_BY_ID,
    payload: response.data.data.conference,
  });
};

export const fetchSessions = (body) => async (dispatch) => {
  const response = await HttpService.post(API_NAME.SESSIONS, body);
  dispatch({
    type: ActionType.SESSIONS,
    payload: response.data,
  });
};


export const fetchAttendees = (body) => async (dispatch) => {
  const response = await HttpService.post(API_NAME.ATTENDEES, body);
  dispatch({
    type: ActionType.ATTENDEES,
    payload: response.data.attendees,
  });
};
