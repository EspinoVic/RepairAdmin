import React from "react";

export default function ContextContainer({ children, ...props }) {

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="context-container"
    >
      {children}
    </div>
  );
}
