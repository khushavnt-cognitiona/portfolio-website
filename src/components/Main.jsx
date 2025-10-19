import React from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import CVDownload from './CVDownload';

const Main = () => {
  return (
    <main>
      <Hero />
      <About />
      <CVDownload />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default Main;
