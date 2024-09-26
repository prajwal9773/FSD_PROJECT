// App.jsx
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import CardContainer from './components/CardContainer';

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <CardContainer />
      </div>
    </DndProvider>
  );
};

export default App;
