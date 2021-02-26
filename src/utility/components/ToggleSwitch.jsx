import React from 'react';

function ToggleSwitch(props) {

    return(
         
        <input className="toggleswitch" type="checkbox" name="toggle" 
        onChange={(event)=>{
            /* white mode */
            let tittle_top_bar_color = "#727272";
            let container_background = "#FFF";
            let svg_icons_color = "#727272";
            let hint_text_box_color = "#999898";
            //let page_content_background = "#cacaca"
            if(event.target.checked){
                tittle_top_bar_color ='#FFF';
                container_background = '#727272';
                svg_icons_color ='#FFF';
                hint_text_box_color ='#FFF';
            }

            document.documentElement.style.setProperty('--tittle-top-bar-color',tittle_top_bar_color );
            document.documentElement.style.setProperty('--container-background',container_background );           
            document.documentElement.style.setProperty('--svg-icons-color',svg_icons_color );           
            document.documentElement.style.setProperty('--hint-text-box-color',hint_text_box_color );           

        }}/>
        
    );

}

export default ToggleSwitch;