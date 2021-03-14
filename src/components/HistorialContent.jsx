import React from "react";
import { Transition } from "react-spring/renderprops";

import SearchBar from "./SearchBar";
import ContextButton from "../utility/components/ContextButton";
import DatePicker from "../utility/components/DatePicker";
import ContextContainer from "../utility/components/ContextContainer";
import CalendarButton from "../utility/components/CalendarButton";
import ResumenContainer from './ResumenContainer';


import Table from "../utility/components/Table";
import { ReactComponent as FilterIcon } from "../icons/filter_icon.svg";
import { ReactComponent as ChevronIcon } from "../icons/chevron.svg";

const headers = [
  "#",
  "Fecha Ingreso",
  "Cliente",
  "Télefono",
  "Precio estimado",
  "Equipo",
  "Estado",
];

function HistorialContent(props) {
  return (
    /* The group of 3 cuadros page-content__view-content*/
    <div className="historial-container">
      <div className="historial-container__table-container">
        <div className="historial-container__searchfilter">
          <SearchBar></SearchBar>
          <ContextButton tittle="Filtro" icon={<FilterIcon />}>
            <ContextContainer>
              
              <CalendarButton
                tittle="Desde"
              ></CalendarButton>

              <ContextButton
                tittle="Empleado"
                icon={<ChevronIcon />}
              ></ContextButton>

              <CalendarButton
                tittle="Desde"
              ></CalendarButton>

            </ContextContainer>
          </ContextButton>
        </div>
        {/*  <Table headersName={headers} rowsData={repairs}></Table> */}
        <Table headersName={headers} rowsData={repairs}></Table>
      </div>
    
      <ResumenContainer></ResumenContainer>
    <div >asd</div>

    </div>
  );
}

function StateRepair({ state, ...props }) {
  //pendiente
  let styleBox = { backgroundColor: "#A1A1A1", border: "none" };

  switch (state) {
    case "Entregada":
      styleBox.backgroundColor = "#6DD400";
      break;
    case "Lista":
      styleBox.backgroundColor = "transparent";
      styleBox.border = "1px solid #6DD400";
      break;
    case "EnCurso":
      styleBox.backgroundColor = "#FF7A38";
      break;
    case "Pausada":
      styleBox.backgroundColor = "#B400FF";
      break;
    case "Cancelada":
      styleBox.backgroundColor = "#F03737";
      break;
    default:
  }

  return (
    <div className="staterepair-container">
      <div style={styleBox} className="staterepair-container__indicator"></div>
      <div className="staterepair-container__text">{state}</div>
    </div>
  );
}
const repairs = [
  {
    noOrden: 0,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Lista"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Entregada"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Cancelada"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"EnCurso"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Cancelada"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Cancelada"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Entregada"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Cancelada"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Cancelada"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Cancelada"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Entregada"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Entregada"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 10,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
  {
    noOrden: 999,
    dateInt: "101121",
    client: "Pedro Green",
    phone: "1234567890",
    estimatedPrice: "$245",
    pcInfo: "HP Desktop",
    state: <StateRepair state={"Pendiente"}></StateRepair>,
  },
];

export default HistorialContent;
