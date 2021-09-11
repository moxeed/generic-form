import React from "react";

export const FormContext = React.createContext("form-data");
export const Form = ({ definition, state, setState, onSubmit }) => {
  return (
    <FormContext.Provider value={{ state, setState }}>
      {definition.map((d) => d)}
      <button onClick={onSubmit}>submit!</button>
    </FormContext.Provider>
  );
};
