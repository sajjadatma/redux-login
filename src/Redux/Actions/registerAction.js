import axios from '../../axios'
import { REGISTER_SUCESSFULL, REGISTER_FAILURE } from "../Types/Types";

export const register = (newUser) => (dispatch) => {
  
  axios
    .post(
      `/api/register`,
     newUser,
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((response) => {
      dispatch({
        type: REGISTER_SUCESSFULL,
      });
    })
    .catch((error) => {
      dispatch({
        type: REGISTER_FAILURE,
      });
    });
};
