import React, {useReducer} from 'react';
import './App.css';
import {state, reducer} from './components/ApplicationState';
import Laps from './components/Laps';
import Squats from './components/Squats';


function App() {

  const [currentState, dispatch] = useReducer(reducer, state);

  return (
    <div className="App">
      <header className="App-header">
        <Laps state={currentState} dispatch={dispatch}/>
        <Squats state={currentState} dispatch={dispatch}/>
      </header>
    </div>
  );
}

export default App;
