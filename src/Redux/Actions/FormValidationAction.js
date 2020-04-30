import { CHECK_LENGTH, CHECK_REQUIRED,CHECK_EMAIL_VALIDATION } from "../Types/Types";

export const checkRequired = (inputName, inputValue) => dispatch => {
  
  dispatch({
    type: CHECK_REQUIRED,
    input: inputName,
    value: inputValue,
  });
};
export const checkLength = (inputName, inputValue, min, max) => dispatch => {
  dispatch({
    type: CHECK_LENGTH,
    input: inputName,
    value: inputValue,
    min: min,
    max: max,
  });
};

export const checkEmailValidation = (inputName, inputValue) => dispatch => {
  
  dispatch({
    type: CHECK_EMAIL_VALIDATION,
    input: inputName,
    value: inputValue,
  });
};