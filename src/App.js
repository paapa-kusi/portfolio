
import React from 'react';
import Bar from './components/Bar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Coursework from './components/Coursework';

function App() {
  return (
    <div>
      <Bar />
      <Home />
      <AboutMe />
      <div id="projects">
        <Projects />
      </div>
      <div id="coursework">
        <Coursework />
      </div>
      
    </div>
  );
}

export default App;
