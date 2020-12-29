import React from 'react';

import ToggleSwitch from '../utility/ToggleSwitch'
import CitasIcon from './citasIcon.png';
import EstadisticasIcon from './estadisticasIcon.png';
import ReparacionesIcon from './reparacionesIcon.png';
import LunaIcon from './lunaIcon.png';
import PcIcon from './pcIcon_green.png';


function MenuVertical(props){
    const toggle = <ToggleSwitch text="asd"/>;
    return (
        <div className="menu-container">
            <MenuItem content="NIR" icon={PcIcon} isHeader={true}></MenuItem>        
            <MenuItem content="Citas" icon={CitasIcon}></MenuItem>
            <MenuItem content="Reparaciones" icon={ReparacionesIcon}></MenuItem>
            <MenuItem content="Estadísticas" icon={EstadisticasIcon}></MenuItem>
            <MenuItem content={<ToggleSwitch text="asd"/>} icon={LunaIcon}></MenuItem>
        </div>
    );
}

function MenuItem(props){

    let classContainer ="menuitem-container";
    let classIcon = "menuitem-container__icon";

    if(props.isHeader){
        classContainer="menuitem-container--header"
        classIcon="menuitem-container__icon--header" 
    }
    
    return (
        <div className={classContainer}>
            <img  className={classIcon} src={props.icon}></img>
            {props.content}
        </div>
    )
}

export default MenuVertical;