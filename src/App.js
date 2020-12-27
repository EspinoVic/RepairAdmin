
import React from 'react';
import MenuVertical from './menu_vertical/MenuVertical';
import HorizontalTopBar from './horizontal_top_bar/HorizontalTopBar';
import HistorialContent from './historial_content/HistorialContent';
import TillyPic from './horizontal_top_bar/tilly.jpg';

function App() {
  return (
  <div className="page-content">
    
    <MenuVertical></MenuVertical>
    <div className="page-content__main-container">
      <HorizontalTopBar title="Historial" username = "Vic Espino" userpic = {TillyPic}></HorizontalTopBar>
      <HistorialContent></HistorialContent>
    </div>

  </div>
  );
}

export default App;
