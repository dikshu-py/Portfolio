import React from 'react'
import Splitbox from './Splitbox';
import SlideWindow from './SlideWindow';
import Skills from './Skills';
import Experience from './Experience';
import ChatFrame from './ChatFrame';
import Landing from './Landing';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const Portfolio = () => {
  return (



    <div className=" bg-gray-100 flex  flex-col items-center justify-center px-6 overflow-auto">
      {/* Full-width Container */}
      <Header/>
      <div>
        <section id="landing" >
          <Landing />
        </section>

        <section id="slide-window" >
          <SlideWindow />
        </section>

        <section id="skills" >
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="chat-frame">
          <ChatFrame />
        </section>
      </div>
    </div>
  );
}

export default Portfolio
