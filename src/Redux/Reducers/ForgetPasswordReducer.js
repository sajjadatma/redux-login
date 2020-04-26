import { Forget_Password_FETCH_SUCESSFULL, Forget_Password_FETCH_FAILURE } from "../Types/Types";

const initialState = {
  resetSuccess: false,
  error: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case Forget_Password_FETCH_SUCESSFULL:
      return {
        ...state,
        resetSuccess: true,
        error: false,
      };
    case Forget_Password_FETCH_FAILURE:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
