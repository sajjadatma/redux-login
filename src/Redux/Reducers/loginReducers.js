import { LOGGIN_SUCCESSFULL, LOGGIN_FAILURE } from "../Types/Types";

const initialState = {
  loggedIn: false,
  error: false,
};
export default (state = initialState, action) => {  
  switch (action.type) {
    case LOGGIN_SUCCESSFULL:
      return {
        ...state,
        loggedIn: true,
        error: false,
      };
    case LOGGIN_FAILURE:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
