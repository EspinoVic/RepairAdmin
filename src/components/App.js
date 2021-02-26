
import React from 'react';
import MenuVertical from './MenuVertical';
import HorizontalTopBar from './HorizontalTopBar';
import HistorialContent from './HistorialContent';
import TillyPic from '../icons/tilly.jpg';

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
