import React from "react";
import { FormContext } from "./Form";

export class Input extends React.Component {
  static contextType = FormContext;

  state = {
    isValid: true,
  };

  get value() {
    return this.context.state[this.name];
  }

  setValid(isValid) {
    this.setState({ isValid });
  }

  handleChange(value) {
    let isValid = true;
    this.props.validations.forEach((validation) => {
      isValid &= validation.isValid(value);
    });
    this.setValid(isValid);
    this.context.setState({ ...this.context.state, [this.name]: value });
  }
}
