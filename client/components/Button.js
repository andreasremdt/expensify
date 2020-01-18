import React from "react";
import "./Button.css";

function Button({ children, type = "button" }) {
   return (
     <button type={type} className="button">{children}</button>
   );
}

export default Button;