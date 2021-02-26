import React,{useState} from 'react'
import VerticalPicker from './VerticalPicker'
import { animated, useTransition } from "react-spring";

function DatePicker({show,...props}) {

  const [dayPicked,setDayPicked] = useState(1);
  const [monthPicked,setMonthPicked] = useState([1,meses[0]]);
  const [yearPicked,setYearPicked] = useState(new Date().getFullYear());
 
/*   let dayPicked   = 1;
  let monthPicked = [1,meses[0]];
  let yearPicked  = new Date().getFullYear; */

  const handleScrollYearValue = (newYearValue) => {
    setYearPicked(newYearValue);
  }
  const handleScrollMonthValue = (newMonthValue) => {
    setMonthPicked(newMonthValue);
  }
  const handleScrollDayValue = (newDayValue) => {
    setDayPicked(newDayValue);
  }

  const daysItemsToDisplay = getDaysAmountForMonth(monthPicked[0],yearPicked);

  const transitions = useTransition(show, p=>p, {
    from: {  opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    })
    

    return (
      transitions.map(
        ({props:vic,key,item})=>
        item&&
        <animated.div className="datepicker-container" style={vic} onClick={(e)=>{e.stopPropagation()} }>
          <div className="datepicker-container__selector-placeholder"></div>
          <VerticalPicker data={daysItemsToDisplay} onScrollPicker={handleScrollDayValue}></VerticalPicker>
          <VerticalPicker data={meses} onScrollPicker={handleScrollMonthValue}></VerticalPicker>          
          <VerticalPicker data={generateYears()} onScrollPicker={handleScrollYearValue}></VerticalPicker>        
        </animated.div>  
      )
           
    )      


}


function generateYears(){
  
  let arrayYears = [];
  let currentYear = new Date().getFullYear()

  for(let i = 0; i <120;i++){
    arrayYears[i] = (currentYear-i)+"";
  }

  return arrayYears;
}

function getDaysAmountForMonth(month,year) {

  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:  
    case 10: 
    case 12: 
      return count(31);
    case 4:
    case 6:   
    case 9: 
    case 10: 
      return count(30);
    case 2:
      return count(
        (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) ? 29 : 28
      );

    
  }

}


function count(amount){
  
  let arrayAmountItems = [];

  for(let i = 1; i <=amount;i++){
    arrayAmountItems[i] = (i)+"";
  }

  return arrayAmountItems;
}

export default DatePicker;

let meses = 
[
  "ENERO",
  "FEBRERO",
  "MARZO",
  "ABRIL",
  "MAYO",
  "JUNIO",
  "JULIO",
  "AGOSTO",
  "SEPTIEMBRE",
  "OCTUBRE",
  "NOVIEMBRE",
  "DICIEMBRE"
];
