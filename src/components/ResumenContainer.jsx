import React from 'react'
import ResumenIndicator from '../utility/components/ResumenIndicator';
import { ReactComponent as  AddIcon} from '../icons/add.svg'; 
import { ReactComponent as FilterIcon } from "../icons/filter_icon.svg";

export default function ResumenContainer({...props}) {
    return (
        <div className="resumen-container">
            <div className="resumen-container__title">Resumen</div>
            <ResumenIndicator tittle="Total" indicator={45}></ResumenIndicator>
            <ResumenIndicator tittle="Aplicadas" indicator={45}></ResumenIndicator>
            <ResumenIndicator tittle="Pendientes" indicator={45}></ResumenIndicator>
            <ResumenIndicator tittle="Nueva" indicator={<AddIcon></AddIcon>}></ResumenIndicator>
{/*             <ResumenIndicator tittle="Total" indicator={45}></ResumenIndicator>
             <ResumenIndicator tittle="Total" indicator={45}></ResumenIndicator>
            <ResumenIndicator tittle="Aplicadas" indicator={45}></ResumenIndicator>           
            <ResumenIndicator tittle="Pendientes" indicator={45}></ResumenIndicator>
            <ResumenIndicator tittle="Total" indicator={45}></ResumenIndicator>
             <ResumenIndicator tittle="Total" indicator={45}></ResumenIndicator>
            <ResumenIndicator tittle="Aplicadas" indicator={45}></ResumenIndicator>            
            <ResumenIndicator tittle="Pendientes" indicator={45}></ResumenIndicator>
            <ResumenIndicator tittle="Pendientes" indicator={45}></ResumenIndicator> */}
        </div>
    )
}
