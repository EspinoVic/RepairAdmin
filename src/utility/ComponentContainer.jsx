import React from 'react';


function ComponentContainer(props) {

    return (
        <div className="component-container">
            {props.children}
        </div>

    )
    

}


export default ComponentContainer;