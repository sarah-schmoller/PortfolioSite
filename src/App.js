import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './components/HomePage';
import ScriptAssist from './components/ScriptAssistPage';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <div className="App">

          <Routes>
            <Route path="/" element={<HomePage />}>
            </Route>
            <Route path="/script-assist" element={<ScriptAssist />}>
            </Route>
          </Routes>

      </div>
    </div>
  );
}

export default App;
