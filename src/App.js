import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './components/HomePage';
import ScriptAssist from './components/ScriptAssistPage';
import WatchlistRecaps from './components/WatchlistRecapsPage';
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
            <Route path="/watchlist-recaps" element={<WatchlistRecaps />}>
            </Route>
            <Route path="/marketwatch-on-alexa" element={<MarketWatchOnAlexa />}>
            </Route>
            <Route path="/automated-publishing" element={<AutomatedPublishing />}>
            </Route>
          </Routes>

      </div>
    </div>
  );
}

export default App;
