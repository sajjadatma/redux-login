import React, { Component } from "react";
import "./LoginCart.css";
import LoginPicture from "./LoginCardPicture/LoginPicture"
import LoginForm from './LoginForm/LoginForm'
class LoginCart extends Component {
  render() {
    return (
      <div className="card">
        <LoginPicture />
        <LoginForm />
      </div>
    );
  }
}

export default LoginCart;
