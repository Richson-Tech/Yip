import React from 'react'

import Logistics from './Logistics/Logistics';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';


const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Logistics />
      </div>
    </DndProvider>
    
  );
}


export default App;