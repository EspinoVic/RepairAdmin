import React,{useState,useEffect} from 'react';


function handleOnWheel(e){
    /* console.log(e.deltaY); */
    
}
function handleOnClick(e){
    console.log("Click")
}
function DatePicker(props){

    const [scroll,setScroll] = useState(0);

    const numbers = [1, 2, 3, 4, 5,6,7,8,9];
    const listItems = numbers.map((number) =>
      <PickerItem id={"element"+number} data={number} className="picker-container__item"/>
    );

    return (
        <div className="picker-container"   onWheel={(e)=>{setScroll(2); console.log("sad")}}  >
            <div className="picker-container__viewport">            
                {listItems}
            </div>        
        </div>
    );

}

function PickerItem(props){
    return (
        <div id = {props.id} className={props.className}>
            {props.data}
        </div>
    );
}

export default DatePicker;