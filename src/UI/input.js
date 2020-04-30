import React, { Component } from "react";
import "./input.css";
import TextField from "@material-ui/core/TextField";
import {
  checkRequired,
  checkLength,
  checkEmailValidation,
} from "../Redux/Actions/FormValidationAction";
import { connect } from "react-redux";

class inputText extends Component {
  state = {
    inputValue: this.props.value,
  };
  componentWillReceiveProps(nextProps, nextState) {
    if (this.props.value !== nextProps.value) {
      this.setState({ inputValue: nextProps.value }, () => {
        const { value, name, type, max, min } = this.props;
        if (this.props.value === "") {
          this.props.checkRequired(name, value);
        } else if (type === "email") {
          this.props.checkEmailValidation(name, value);
        }
        // else if (this.props.value !== this.props.MainPassword) {

        // }
        else {
          this.props.checkLength(name, value, min, max);
        }
      });
    }
  }
  render() {
    let element;
    const object = this.props.validation[this.props.name];
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        element = object;
      }
    }
    return (
      <TextField
        size="small"
        type={this.props.type}
        name={this.props.name}
        label={
          this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)
        }
        variant="outlined"
        onChange={this.props.event}
        error={
          (element !== undefined && element.validError === true) ||
          this.props.value === ""
            ? true
            : null
        }
        helperText={
          element !== undefined && element.validError === true
            ? element.textError
            : null
        }
      />
    );
  }
}
const mapStateToProps = (state) => ({
  validation: state.validation,
});
export default connect(mapStateToProps, {
  checkRequired,
  checkLength,
  checkEmailValidation,
})(inputText);
