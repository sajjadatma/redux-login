import axios from '../../axios'
import { Forget_Password_FETCH_SUCESSFULL, Forget_Password_FETCH_FAILURE } from "../Types/Types";

export const resetPassword = (email) => (dispatch) => {  
  axios
    .post(
      `/api/password/reset`,
     email
    )
    .then((response) => {
      dispatch({
        type: Forget_Password_FETCH_SUCESSFULL,
      });
    })
    .catch((error) => {
      dispatch({
        type: Forget_Password_FETCH_FAILURE,
      });
    });
};
