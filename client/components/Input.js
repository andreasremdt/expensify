import React from "react";
import InputError from "./InputError";
import "./Input.css";

function Input(props) {
  var { component, error } = props;
  var Tag = component || "input";

  return (
    <React.Fragment>
      <Tag className={`form-input ${error ? "has-error" : ""}`} {...props} />

      {Boolean(error) && <InputError error={error} />}
    </React.Fragment>
  );
}

export default Input;
