import React from 'react';

function ToggleSwitch(props) {

    return(
        
        <input className="toggleswitch" type="checkbox" name="toggle" 
        onChange={(event)=>{
            /* white mode */
            let tittle_top_bar_color = "#727272";
            let container_background = "#FFF";
            //let page_content_background = "#cacaca"
            if(event.target.checked){
                tittle_top_bar_color ='#FFF';
                container_background = '#727272';
            }

            document.documentElement.style.setProperty('--tittle-top-bar-color',tittle_top_bar_color );
            document.documentElement.style.setProperty('--container-background',container_background );           
        }}/>
        
    );

}

export default ToggleSwitch;