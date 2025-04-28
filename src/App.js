
import React from 'react';
import Bar from './components/Bar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Coursework from './components/Coursework';
import Leadership from "./components/Leadership";

function App() {
  return (
    <div>
      <Bar />
      <Home />
      <AboutMe />
      <div id="projects">
        <Projects />
      </div>
      <div id="leadership">
        <Leadership />
      </div>
      <div id="coursework">
        <Coursework />

      </div>
      
    </div>
  );
}

export default App;
