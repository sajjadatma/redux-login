import {
  TEXT_VALIDATION,
  EMAIL_VALIDATION,
  PASSWORD_VALIDATION,
  EMPTY_INPUT
} from "../Types/Types";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const inintialState = {
  text: {},
  email: {},
  password: {},
  isEmpty:null
};
const validation = (state = inintialState, action) => {
  switch (action.type) {
    case EMPTY_INPUT:
      if ( action.value === null || action.value === "") {
        return {
          ...state,
          isEmpty:true
        }
      } else {
        return {
          ...state,
          isEmpty:false
        }
      }
    case TEXT_VALIDATION:
      if (action.value === null || action.value.length < 3) {
        return {
          ...state,
          text: {
            isEmpty: false,
            valid: false,
            validError: true,
            textError: "minimum 3 characaters required",
          },
        };
      } else {
        return {
          ...state,
          text: {
            isEmpty: false,
            valid: true,
            validError: false,
            textError: {},
          },
        };
      }
    case EMAIL_VALIDATION:
      if (!emailRegex.test(action.value)) {
        return {
          ...state,
          email: {
            isEmpty: false,
            valid: false,
            validError: true,
            textError:"Invalid Email Address"
          },
        };
      } else {
        return {
          ...state,
          email: {
            isEmpty: false,
            valid: true,
            validError: false,
            textError: {},
          },
        };
      }
    case PASSWORD_VALIDATION:
      if (action.value.length < 6) {
        return {
          ...state,
          password: {
            isEmpty: false,
            valid: false,
            validError: true,
            textError:"Minimum 6 Characaters Required",
          },
        };
      } else {
        return {
          ...state,
          password: {
            isEmpty: false,
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
