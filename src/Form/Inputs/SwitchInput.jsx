import { Input } from "../Input";

export class SwitchInput extends Input {
  getData(e) {
    return e.target.checked;
  }

  render() {
    const { value } = this.state;
    return (
      <input
        type="checkbox"
        value={value}
        onChange={(e) => this.handleChange(this.getData(e))}
      />
    );
  }
}
