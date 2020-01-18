import React from "react";
import "./Button.css";

function Button({ children, type = "button", variant = "primary" }) {
   return (
     <button type={type} className={`button is-${variant}`}>{children}</button>
   );
}

export default Button;