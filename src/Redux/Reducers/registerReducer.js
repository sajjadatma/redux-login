import { REGISTER_SUCESSFULL, REGISTER_FAILURE } from "../Types/Types";

const initialState = {
  registered: false,
  error: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCESSFULL:
      return {
        ...state,
        registered: true,
        error: false,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
