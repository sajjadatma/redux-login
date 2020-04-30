import { combineReducers } from "redux";
import loginReducers from "./loginReducers"
import loadingReducer from './loadingReducer'
import registerReducer from './registerReducer'
import forgetPassword from './ForgetPasswordReducer'
import FormValidationRedcer from './FormValidationRedcer'
import { reducer as formReducer } from 'redux-form'
export default combineReducers({
    Login: loginReducers,
    loaded: loadingReducer,
    reg: registerReducer,
    reset: forgetPassword,
    validation: FormValidationRedcer,
    form: formReducer

})