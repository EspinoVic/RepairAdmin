import React, { useState } from "react";
import ContextContainer from "./ContextContainer";
import { animated, useTransition } from "react-spring";

function ContextButton({ tittle, icon, children, ...props }) {
  const [show, setShow] = useState(false);

  const onClickHandler = (e) => {
    e.stopPropagation();
    setShow((lastState) => !lastState);
  };
  
  return (
    
    <div className="contextbutton-container" onClick={onClickHandler}>
      {tittle}
      {icon}
      {show && children}
    </div>
  );
}

export default ContextButton;
