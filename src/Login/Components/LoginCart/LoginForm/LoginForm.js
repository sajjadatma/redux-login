import React, { Component } from "react";
import "./LoginForm.css";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import ForgetPassword from "./ForgetPassword/forgetPassword";
class LoginForm extends Component {
  state = {
    component: "signUp",
  };
  onTurnComponents = (component) => {
    switch (component) {
      case component:
        this.setState({
          component: component,
        });
        break;
      default:
        return this.state.component;
    }
  };
  render() {
    return (
      <div className="card_login_body">
        {this.state.component === "signUp" ? (
          <SignUp turnComponent ={this.onTurnComponents} />
        ) : this.state.component === "signIn" ? (
          <SignIn turnComponent ={this.onTurnComponents} />
        ) : this.state.component === "forgetPassword" ? (
          <ForgetPassword turnComponent ={this.onTurnComponents} />
        ) : null}
      </div>
    );
  }
}

export default LoginForm;
