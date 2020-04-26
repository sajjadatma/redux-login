import {
  TEXT_VALIDATION,
  EMAIL_VALIDATION,
  PASSWORD_VALIDATION,
  EMPTY_INPUT,
} from "../Types/Types";

export const validation = (inputType, inputValue) => (dispatch) => {
  if (inputType === "text") {
    dispatch({
      type: TEXT_VALIDATION,
      input: inputType,
      value: inputValue,
    });
  } else if (inputType === "email") {
    dispatch({
      type: EMAIL_VALIDATION,
      input: inputType,
      value: inputValue,
    });
  } else if (inputType === "password") {
    dispatch({
      type: PASSWORD_VALIDATION,
      input: inputType,
      value: inputValue,
    });
  }
  if (inputValue !== undefined) {
    dispatch({
      type: EMPTY_INPUT,
      value: inputValue,
    });
  }
};

export const emptyInput = (inputValue) => (dispatch) => {
  console.log(inputValue);
  
  if (inputValue !== undefined) {
    dispatch({
      type: EMPTY_INPUT,
      value: inputValue,
    });
  }
}