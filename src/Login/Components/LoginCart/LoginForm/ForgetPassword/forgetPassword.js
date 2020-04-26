import React, { Component } from "react";
import "./ForgetPassword.css";
import { connect } from "react-redux";
import { resetPassword } from "../../../../../Redux/Actions/ForgetPasswordAction";
import Fade from "@material-ui/core/Fade";
import {
  validation,
  emptyInput,
} from "../../../../../Redux/Actions/FormValidationAction";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SuccessAlert from "../../../../../UI/successAlert";
import ErrorAlert from "../../../../../UI/errorAlert";
class ForgetPassword extends Component {
  state = {
    email: null,
  };
  onEmpty = () => {
    Object.values(this.state).map((item) => {
      return this.props.emptyInput(item);
    });
  };
  onChanges = (e) => {
    const InputName = e.target.name;
    this.setState({ [e.target.name]: e.target.value });
    this.props.validation(InputName, e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
    const resetValues = {
      email: this.state.email,
    };
    if (this.state.email === null) {
      this.onEmpty();
    }
    const { email } = this.props.validInputs;
    if (email.valid) {
      this.props.resetPassword(resetValues);
    }
  };
  render() {
    const { resetSuccess, error } = this.props.reset;
    const { email, isEmpty } = this.props.validInputs;
    const successAlert = resetSuccess ? (
      <SuccessAlert title={"Email Sent Successfully."} />
    ) : null;
    const errorAlert = error ? (
      <ErrorAlert title={"Something Happend! Please Check Your Information."} />
    ) : null;

    return (
      <Fade in timeout={500}>
        <div className="card_Forget_Password_body_form">
          <h2>Forget Password </h2>
          <hr />
          {successAlert}
          {errorAlert}
          <TextField
            name="email"
            error={email.validError || isEmpty ? true : null}
            id="standard-email-input"
            label="Email"
            type="text"
            size="small"
            variant="outlined"
            defaultValue={this.state.email}
            onChange={this.onChanges}
          />
          <Button
            onClick={this.onSubmit}
            size="small"
            color="secondary"
            variant="contained"
          >
            Send Password Reset Link
          </Button>
          <div className="turnComponent">
            <span
              onClick={() => this.props.turnComponent("signUp")}
              className="switchLink"
            >
              Register
            </span>
            <span>|</span>
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
  reset: state.reset,
  validInputs: state.validation,
});
export default connect(mapStateToProps, {
  resetPassword,
  validation,
  emptyInput,
})(ForgetPassword);
