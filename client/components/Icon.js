import React from "react";
import symbols from "../icons/symbol-defs.svg";

function Icon({ type, width = 18, height = 18 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={width}
      height={height}
      aria-hidden="true"
      className="icon"
    >
      <use href={`${symbols}#${type.toLowerCase()}`} />
    </svg>
  )
}

export default Icon;
