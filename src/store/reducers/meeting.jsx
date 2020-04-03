import * as ActionTypes from "../actions/actionTypes";
const initialState = {
  activeMeetings: [],
  inactiveMeetings: [],
  meeting: {}
};

const meetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ACTIVE_MEETINGS:
      return {
        ...state,
        activeMeetings: action.payload
      };
    case ActionTypes.FETCH_INACTIVE_MEETINGS:
      return {
        ...state,
        inactiveMeetings: action.payload
      };
    case ActionTypes.FETCH_MEETING_BY_ID:
      return {
        ...state,
        meeting: action.payload
      };
    default:
      return state;
  }
};

export default meetingsReducer;
