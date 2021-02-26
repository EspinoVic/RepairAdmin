import React, { useState } from "react";
import ContextButton from "./ContextButton";
import DatePicker from "./DatePicker";
import { Transition } from "react-spring/renderprops";
import { ReactComponent as CalendarIcon } from "../../icons/calendar_icon.svg";


export default function CalendarButton({ tittle, children, ...props }) {
  const [show, setShow] = useState(false);

  const onClickHandler = (e) => {
    e.stopPropagation();
    setShow((lastState) => !lastState);
  };



  return (
    <div className="contextbutton-container" onClick={onClickHandler}>
      {tittle}
      {<CalendarIcon/>}

      <Transition
        items={show}
        from=  { {opacity: 0.25,transform: 'scale(0)', "transformOrigin": "75% -10% "}}
        enter= { {opacity: 1   ,transform: 'scale(1)', "transformOrigin": "50% 50% "} }
        leave= { {opacity: 0.25,transform: 'scale(0)', "transformOrigin": "75% -10% "}  }
        config= { {mass: 1, tension: 220, friction: 22/* 14 */} }
      >
        {show => show && (props => <DatePicker  style={props}/>)}
      </Transition>
    </div>
  );
}
