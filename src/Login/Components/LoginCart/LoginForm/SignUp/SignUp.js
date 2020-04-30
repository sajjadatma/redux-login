import React, { Component } from "react";
import "./SignUp.css";
import { connect } from "react-redux";
import InputText from "../../../../../UI/input";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import { register } from "../../../../../Redux/Actions/registerAction";
import SuccessAlert from "../../../../../UI/successAlert";
import ErrorAlert from "../../../../../UI/errorAlert";
class SignUp extends Component {
  state = {
    name: null,
    email: null,
    password: null,
  };
  onChanges = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const RegisterValues = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    if (
      this.state.email === null &&
      this.state.password === null &&
      this.state.password ===null
    ) {
      this.setState({
        name: "",
        email: "",
        password: "",
      });
    }
    const { email, password, name } = this.props.validation;
    if (
      email !== undefined &&
      email.valid === true &&
      password !== undefined &&
      password.valid === true &&
      name !== undefined &&
      name.valid === true
    ) {
      this.props.register(RegisterValues);
    }
  };

  render() {
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
          <InputText
            event={this.onChanges}
            name="name"
            value={this.state.name}
            type="name"
            min={3}
            max={30}
          />

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
            min={6}
            max={25}
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
  validation: state.validation,
});
export default connect(mapStateToProps, {
  register,
})(SignUp);
