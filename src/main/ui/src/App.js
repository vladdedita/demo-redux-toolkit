import React from 'react';
import './App.css';
import Router from './component/Router/Router'
import {HashRouter} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Router/>
      </HashRouter>
    </div>
  );
}

export default App;
