import axios from "../../axios";
import { LOGGIN_SUCCESSFULL, LOGGIN_FAILURE } from "../Types/Types";

export const fetchLogin = (user) => (dispatch) => {
  axios
    .post(
      `/api/login`,
      user,
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((response) => {
      dispatch({
        type: LOGGIN_SUCCESSFULL,
      });
      localStorage.setItem("usertoken", response.data.token);
      return response.data.token;
    })
    .catch((error) => {
      dispatch({
        type: LOGGIN_FAILURE,
      });
    });
};
