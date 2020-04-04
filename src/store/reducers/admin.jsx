import * as ActionTypes from "../actions/actionTypes";
const initialState = {
  adminData: [],
  containers: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADMIN_LOGIN:
      return {
        ...state,
        adminData: action.payload,
      };
    case ActionTypes.ADMIN_LOGOUT:
      return {
        ...state,
        adminData: action.payload,
      };
    case ActionTypes.ADD_CONTAINERS:
      return {
        ...state,
        containers: action.payload,
      };
    case ActionTypes.FETCH_CONTAINERS:
      return {
        ...state,
        containers: action.payload,
      };
    default:
      return state;
  }
};

export default adminReducer;