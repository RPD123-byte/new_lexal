import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Projects from './Projects';
import PalmBerries from './PalmBerries';
import LexalAI from './LexalAI';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/palm-berries" element={<PalmBerries />} />
          <Route path="/projects/lexal-ai" element={<LexalAI />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;