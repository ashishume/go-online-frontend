import * as ActionTypes from "../actions/actionTypes";
const initialState = {
  userData: []
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SIGN_IN:
      return {
        ...state,
        userData: action.payload
      };
    case ActionTypes.SIGN_OUT:
      return {
        ...state,
        userId: null
      };
    default:
      return state;
  }
};

export default authReducer;
