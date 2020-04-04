import * as ActionType from "./actionTypes";

import Loader from "../../components/Shared/Loader/Loader";

export const loading = (bool) => {
  return bool
    ? {
        type: ActionType.SHOW_LOADER,
        payload: bool,
      }
    : {
        type: ActionType.HIDE_LOADER,
        payload: bool,
      };
};
