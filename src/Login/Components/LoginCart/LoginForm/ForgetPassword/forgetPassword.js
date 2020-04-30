import React, { Component } from "react";
import "./ForgetPassword.css";
import { connect } from "react-redux";
import { resetPassword } from "../../../../../Redux/Actions/ForgetPasswordAction";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SuccessAlert from "../../../../../UI/successAlert";
import ErrorAlert from "../../../../../UI/errorAlert";
import InputText from "../../../../../UI/input";

class ForgetPassword extends Component {
  state = {
    email: null,
  };

  onChanges = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const resetValues = {
      email: this.state.email,
    };
    if (this.state.email === null) {
      this.setState({
        email: "",
      });
    }
    const { email } = this.props.validation;
    if (email !== undefined && email.valid === true) {
      this.props.resetPassword(resetValues);
    }
  };
  render() {
    const { resetSuccess, error } = this.props.reset;
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
          <InputText
            event={this.onChanges}
            name="email"
            value={this.state.email}
            type="email"
            min={3}
            max={100}
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
  validation: state.validation,
});
export default connect(mapStateToProps, {
  resetPassword,
})(ForgetPassword);
