import React,{useState} from "react";
import ContextButton from "./ContextButton";
import DatePicker from "./DatePicker";
import { useTransition } from "react-spring";

export default function CalendarButton({ tittle, icon, children, ...props }) {
  const [show, setShow] = useState(false);

  const onClickHandler = (e) => {
    e.stopPropagation();
    setShow((lastState) => !lastState);
  };

  return (    
     <div className="contextbutton-container" onClick={onClickHandler}>
     {tittle}
     {icon}
      <DatePicker show = {show}/>
   </div>
  );
}
