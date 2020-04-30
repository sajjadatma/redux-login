import { CHECK_REQUIRED, CHECK_LENGTH,CHECK_EMAIL_VALIDATION } from "../Types/Types";

var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const validation = (state = {}, action) => {
  switch (action.type) {
    case CHECK_REQUIRED:
      if (action.value.trim() !== "" && action.value !== null) {
        return {
          ...state,
          [action.input]: {
            input: action.input,
            valid: true,
            validError: false,
          },
        };
      } else if(action.value === "") {
        return {
          ...state,
          [action.input]: {
            input: action.input,
            valid: false,
            validError: true,
            textError: `${action.input.charAt(0).toUpperCase() + action.input.slice(1)} is Required`,
          },
        };
      }
    case CHECK_LENGTH:
      if (action.value.trim().length < action.min) {
        return {
          ...state,
          [action.input]: {
            valid: false,
            validError: true,
            textError: `${action.input.charAt(0).toUpperCase() + action.input.slice(1)} must be at least ${action.min} characters`,
          },
        };
      } else if (action.value.trim().length >= action.max) {
        return {
          ...state,
          [action.input]: {
            valid: false,
            validError: true,
            textError: `${action.input} must be ${action.max} characters`,
          },
        };
      } else {
        return {
          ...state,
          [action.input]: {
            valid: true,
            validError: false,
            textError: {},
          },
        };
      }
    case CHECK_EMAIL_VALIDATION:
      if (!emailRegex.test(action.value.trim())) {
        return {
          ...state,
          [action.input]: {
            valid: false,
            validError: true,
            textError: `Email Not Valid!`,
          },
        };
      } else {
        return {
          ...state,
          [action.input]: {
            valid: true,
            validError: false,
            textError: {},
          },
        };
      }
    default:
      return state;
  }
};

export default validation;