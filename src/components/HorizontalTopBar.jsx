import React from 'react';

function HorizontalTopBar(props) {

    return (
        <div className="topbar-container">
           <span className = "topbar-container__tittle">{props.title}</span>
           <span className="topbar-container__user">
                <img className="topbar-container__user-pic" src={props.userpic}></img>
               {props.username}</span>
        </div>
    )

}

export default HorizontalTopBar;