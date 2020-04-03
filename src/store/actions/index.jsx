import * as ActionType from "./actionTypes";
import HttpService from "../../API/HttpService";
import { API_NAME } from "../../API/ApiPaths";
import history from "../../history";
import Loader from "../../components/Shared/Loader/Loader";

export const signIn = formValues => async dispatch => {
  const response = await HttpService.post(API_NAME.SIGN_IN, formValues);

  dispatch({
    type: ActionType.SIGN_IN,
    payload: response.data.user
  });

  if (response.status == 200) {
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
export const fetchActiveMeetings = query => async dispatch => {
  const response = await HttpService.get(API_NAME.MEETING, {
    params: query
  });

  dispatch({
    type: ActionType.FETCH_ACTIVE_MEETINGS,
    payload: response.data.data
  });
};
export const fetchInActiveMeetings = query => async dispatch => {
  const response = await HttpService.get(API_NAME.MEETING, {
    params: query
  });

  dispatch({
    type: ActionType.FETCH_INACTIVE_MEETINGS,
    payload: response.data.data
  });
};
export const createMeeting = body => async dispatch => {
  const response = await HttpService.post(API_NAME.MEETING, body);

  dispatch({
    type: ActionType.CREATE_MEETING,
    payload: response.data.data.room
  });

  const roomId = response.data.data.room.id;

  if (response.status == 200) {
    history.push("/dashboard");
    // history.push(`/meeting-room/${roomId}`);
  }
};
export const fetchMeetingByRoomId = query => async dispatch => {
  const response = await HttpService.get(API_NAME.MEETING, {
    params: query
  });

  dispatch({
    type: ActionType.FETCH_MEETING_BY_ID,
    payload: response.data.data.conference
  });
};

// id: 3085824
// room_type: "meeting"
// room_pin: 219415442
// name: "Test"
// name_url: "test"
// starts_at: "2020-04-02T13:17:00+05:30"
// ends_at: "2020-04-02T16:17:00+05:30"
// access_type: 1
// lobby_enabled: true
// lobby_description: ""
// registration_enabled: 0
// status: "active"
// timezone: "Asia/Kolkata"
// timezone_offset: 19800
// paid_enabled: 0
// automated_enabled: 0
// created_at: "2020-04-02T13:17:16+05:30"
// updated_at: "2020-04-02T13:17:16+05:30"
// type: 0
// permanent_room: false
// ccc: "2020-04-02 07:47:00"
// access_role_hashes: {listener: "c7a47a6bb0c8b5d9381bc4005e859884", presenter: "24829b247bc910dd3f3b2a005e859884", host: "39e78d7e8bd20e7eb5d75f005e859884"}
// room_url: "https://uniprojex.clickmeeting.com/test"
// phone_presenter_pin: 532917715
// phone_listener_pin: 323361374
// embed_room_url: "https://embed.clickmeeting.com/embed_conference.html?r=1712711113085824"
// widgets_hash: "rDh549"
