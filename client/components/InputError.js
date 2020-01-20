import React from "react";
import "./InputError.css";

function InputError({ error }) {
  if (!error) {
    return null;
  }

  return <span className="form-error">{error}</span>;
}

export default InputError;
