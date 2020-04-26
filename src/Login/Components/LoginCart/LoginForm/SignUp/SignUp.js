import React, { Component } from "react";
import "./SignUp.css";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import {
  validation,
  emptyInput,
} from "../../../../../Redux/Actions/FormValidationAction";
import { register } from "../../../../../Redux/Actions/registerAction";
import SuccessAlert from "../../../../../UI/successAlert";
import ErrorAlert from "../../../../../UI/errorAlert";
class SignUp extends Component {
  state = {
    name: null,
    email: null,
    password: null,
    repeatPassword: null,
  };
  onChanges = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.props.validation(e.target.type, e.target.value);
  };
  onEmpty = () => {
    Object.values(this.state).map((item) => {
     return this.props.emptyInput(item);
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const RegisterValues = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      repeatPassword: this.state.repeatPassword,
    };
    if (
      this.state.email === null &&
      this.state.email === null &&
      this.state.password === null
    ) {
      this.onEmpty();
    }
    const { email, password, text } = this.props.validInputs;
    if (
      email.valid &&
      password.valid &&
      text.valid &&
      this.state.password.value === this.state.repeatPassword.value
    ) {
      this.props.register(RegisterValues);
    }
  };

  render() {
    const { email, password, text, isEmpty } = this.props.validInputs;
    const { registered, error } = this.props.reg;
    const successAlert = registered ? (
      <SuccessAlert title={"Sign in Successfully."} />
    ) : null;
    const errorAlert = error ? (
      <ErrorAlert title={"Something Happend! Please Check Your Information."} />
    ) : null;
    return (
      <Fade in timeout={500}>
        <div className="card_signUp_body_form">
          <h2>SIGN UP </h2>
          <hr />
          {successAlert}
          {errorAlert}
          <TextField
            error={text.validError || isEmpty ? true : null}
            name="name"
            id="name"
            label="Name"
            size="small"
            variant="outlined"
            defaultValue={this.state.name}
            onChange={this.onChanges}
          />

          <TextField
            error={email.validError || isEmpty ? true : null}
            name="email"
            id="email"
            label="Email"
            size="small"
            type="email"
            variant="outlined"
            defaultValue={this.state.email}
            onChange={this.onChanges}
          />
          <TextField
            error={password.validError || isEmpty ? true : null}
            name="password"
            size="small"
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            defaultValue={this.state.password}
            onChange={this.onChanges}
          />
          <TextField
            error={
              this.state.password !== this.state.repeatPassword || isEmpty
                ? true
                : false
            }
            name="repeatPassword"
            size="small"
            id="repaeatPassword"
            label="Repeat Password"
            type="password"
            variant="outlined"
            defaultValue={this.state.repeatPassword}
            onChange={this.onChanges}
          />

          <Button
            onClick={this.onSubmit}
            size="small"
            color="secondary"
            variant="contained"
          >
            Sign Up
          </Button>
          <div className="link_to_signIn">
            <span>Already have account ? </span>
            <span
              onClick={() => this.props.turnComponent("signIn")}
              className="switchLink"
            >
              SignIn
            </span>
          </div>
        </div>
      </Fade>
    );
  }
}

const mapStateToProps = (state) => ({
  reg: state.reg,
  validInputs: state.validation,
});
export default connect(mapStateToProps, {
  register,
  validation,
  emptyInput,
})(SignUp);
