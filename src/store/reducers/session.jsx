import * as ActionTypes from "../actions/actionTypes";
const initialState = {
  sessions: [],
  attendees: [],
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SESSIONS:
      return {
        ...state,
        sessions: action.payload,
      };
    case ActionTypes.ATTENDEES:
      return {
        ...state,
        attendees: action.payload,
      };
    default:
      return state;
  }
};

export default sessionReducer;
