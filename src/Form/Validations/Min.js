import { Validation } from "../Validation";

export class Min extends Validation {
  constructor(minValue) {
    super();
    this.minValue = minValue;
  }

  isValid(value) {
    return value >= this.minValue;
  }
}
