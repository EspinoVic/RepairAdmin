import React, { useState, useEffect } from 'react';

const handleScroll = (e) => {
    const position = e.deltaY;
    
    console.log(position)
};
function DatePicker(){

/*     window.addEventListener('wheel', function(event)
    {
     if (event.deltaY < 0)
     {
      console.log('scrolling up');
      
     }
     else if (event.deltaY > 0)
     {
      console.log('scrolling down');
     }
    }); */
  /*   const [scrollPosition, setSrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setSrollPosition(position);
        console.log("asdasd")
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); */

    return(    
            <div className="datePicker-contain" >
                <ol className="datePicker-contain__viewport" onWheel={handleScroll}>
                    <li id="item-picker1" className="datePicker-contain__element" >
                        <div className="datPicker-containt__snapper" >1</div>
                    </li>
                    <li id="item-picker2"  className="datePicker-contain__element">
                        <div className="datPicker-containt__snapper">2</div>
                    </li>
                    <li id="item-picker3"  className="datePicker-contain__element">
                        <div className="datPicker-containt__snapper">3</div>
                    </li>
                    <li id="item-picker4"  className="datePicker-contain__element">
                        <div className="datPicker-containt__snapper">4</div>
                    </li>
                    <li id="item-picker5"  className="datePicker-contain__element">
                        <div className="datPicker-containt__snapper">5</div>
                    </li>

                </ol>
            </div> 
    );
}



export default DatePicker;