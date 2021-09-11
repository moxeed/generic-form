import { Input } from "../Input";
import PropTypes from "prop-types";

class NumberInput extends Input {
  handleChange(e) {
    let { value } = e.target;
    let isValid = false;

    if (/(\d+(.\d|)(\d*|e\d+)|)/.test(value)) {
      if (/.*\d/.test(value)) {
        value = parseFloat(value);
        isValid = true;
      }
      this.setValid(isValid);
      super.handleChange(value);
    }
  }

  render() {
    return (
      <>
        {this.state.isValid}
        <input
          type="number"
          value={this.value}
          onChange={(e) => this.handleChange(e)}
        />
      </>
    );
  }
}

NumberInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  validations: PropTypes.array,
};

export { NumberInput };
