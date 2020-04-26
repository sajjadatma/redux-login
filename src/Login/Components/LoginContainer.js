import React, { Component } from "react";
import "./LoginContainer.css";
import Spinner from "../../UI/Spinner";
import LoginCart from "./LoginCart/LoginCart";
class LoginContainer extends Component {
  render() {
    return (
      <div className="container">
        <Spinner />
        <LoginCart />
      </div>
    );
  }
}

export default LoginContainer;
