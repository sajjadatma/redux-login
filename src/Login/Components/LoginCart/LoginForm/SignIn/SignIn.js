import React, { Component } from "react";
import "./SignIn.css";
import { connect } from "react-redux";
import Fade from "@material-ui/core/Fade";
import { fetchLogin } from "../../../../../Redux/Actions/loginAction";
import {
  validation,
  emptyInput,
} from "../../../../../Redux/Actions/FormValidationAction";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SuccessAlert from "../../../../../UI/successAlert";
import ErrorAlert from "../../../../../UI/errorAlert";

class SignIn extends Component {
  state = {
    email: null,
    password: null,
  };

  onEmpty = () => {
    Object.values(this.state).map((item) => {
    return this.props.emptyInput(item);
    });
  };
  onChanges = (e) => {
    const InputName = e.target.name;
    this.setState({ [e.target.name]: e.target.value});
    this.props.validation(InputName, e.target.value);
  };
  onSubmit = (e) => {
    e.preventDefault();
    const loginValues = {
      email: this.state.email,
      password: this.state.password,
    };
    if (this.state.email === null && this.state.password === null) {
      this.onEmpty();
    }
    const { email, password } = this.props.validInputs;
    if (email.valid === true && password.valid === true) {
      this.props.fetchLogin(loginValues);
    }
  };
  render() {
    console.log(this.props.validInputs);
    const { loggedIn, error } = this.props.login;
    const { email, password, isEmpty } = this.props.validInputs;
    const successAlert = loggedIn ? (
      <SuccessAlert title={"Sign in Successfully."} />
    ) : null;
    const errorAlert = error ? (
      <ErrorAlert title={"Something Happend! Please Check Your Information."} />
    ) : null;
    return (
      <Fade in timeout={500}>
        <div className="card_signIn_body_form">
          <h2>SIGN IN </h2>
          <hr />
          {successAlert}
          {errorAlert}
          <TextField
            error={email.validError || isEmpty ? true : null}
            name="email"
            helperText={email.validError ? email.textError : null}
            id="standard-email-input"
            label="Email"
            type="email"
            size="small"
            variant="outlined"
            defaultValue={this.state.email}
            onChange={this.onChanges}
          />

          <TextField
            error={password.validError || isEmpty ? true : null}
            name="password"
            id="standard-password-input"
            helperText={
              password.validError || this.state.empty
                ? password.textError
                : null
            }
            label="Password"
            type="password"
            size="small"
            variant="outlined"
            defaultValue={this.state.password}
            onChange={this.onChanges}
          />

          <Button
            onClick={this.onSubmit}
            size="small"
            color="secondary"
            variant="contained"
          >
            Sign In
          </Button>
          <div className="links_to_forget_password">
            <span
              onClick={() => this.props.turnComponent("forgetPassword")}
              className="switchLink"
            >
              Forget Password?
            </span>
          </div>
          <div>
            <div className="links_to_signIn_password">
              <div className="links_to_signIn">
                <span>Don't Have Account?</span>
                <span
                  onClick={() => this.props.turnComponent("signUp")}
                  className="switchLink"
                >
                  Register
                </span>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}
const mapStateToProps = (state) => ({
  login: state.Login,
  validInputs: state.validation,
});
export default connect(mapStateToProps, {
  fetchLogin,
  validation,
  emptyInput,
})(SignIn);
