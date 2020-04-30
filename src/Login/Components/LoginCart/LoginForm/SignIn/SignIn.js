import React, { Component } from "react";
import "./SignIn.css";
import { connect } from "react-redux";
import { fetchLogin } from "../../../../../Redux/Actions/loginAction";
import Button from "@material-ui/core/Button";
import SuccessAlert from "../../../../../UI/successAlert";
import ErrorAlert from "../../../../../UI/errorAlert";
import InputText from "../../../../../UI/input";
import Fade from "@material-ui/core/Fade";

class SignIn extends Component {
  state = {
    email: null,
    password: null,
  };
  onChanges = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const SignInValues = {
      email: this.state.email,
      password: this.state.password,
    };

    const { email, password } = this.props.validation;

    if (this.state.email === null && this.state.password === null) {
      this.setState({
        email: "",
        password: "",
      });
    }
    if (
      email !== undefined &&
      email.valid === true &&
      password !== undefined &&
      password.valid === true
    ) {
      this.props.fetchLogin(SignInValues);
    }
  };

  render() {

    const { loggedIn, error } = this.props.login;
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
          <InputText
            event={this.onChanges}
            name="email"
            value={this.state.email}
            type="email"
            min={3}
            max={100}
          />
          <InputText
            event={this.onChanges}
            name="password"
            value={this.state.password}
            type="password"
            min={8}
            max={100}
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
  validation: state.validation,
});
export default connect(mapStateToProps, {
  fetchLogin,
})(SignIn);
