import { SHOW_LOADER, HIDE_LOADER } from "../Types/Types";
export const loading = (bool) => (dispatch) => {
  if (bool) {
    dispatch({
      type: SHOW_LOADER,
      data: bool,
    });
  } else {
    dispatch({
      type: HIDE_LOADER,
      data: bool,
    });
  }
};
