import "./App.css";
import { NumberInput } from "./Form/Inputs/NumberInput";
import { Form } from "./Form/Form";
import { Min } from "./Form/Validations/Min";
import { useState } from "react";

const form = [
  <NumberInput label="label1" name="label2" validations={[new Min(3)]} />,
];

function App() {
  const [formData, setFormData] = useState({});
  return (
    <div className="App">
      <Form definition={form} state={formData} setState={setFormData} />
    </div>
  );
}

export default App;
