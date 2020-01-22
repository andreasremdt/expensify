import React from "react";
import Icon from "./Icon";
import "./EmptyState.css";

function EmptyState({ children }) {
  return (
    <div role="alert" className="empty-state">
      <Icon type="info" width="24" height="24" />
      <p className="text">{children}</p>
    </div>
  );
}

export default EmptyState;
