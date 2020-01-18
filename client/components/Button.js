import React from "react";
import "./Button.css";

function Button(props) {
  var { variant } = props;

   return (
     <button {...props} className={`button is-${variant || "primary"}`} />
   );
}

export default Button;