import React from "react";
import Header from './component/Header/Header';
import Home from './component/Main/Home';
import About from './component/Main/About';
import Services from "./component/Main/Services";
import Videos from './component/Main/Videos'; 
import Contact from './component/Main/Contact';
import Footer from "./component/Footer/Footer";
import { Routes, Route } from 'react-router-dom';
import { useTheme } from './component/Header/DarkMode';

function App() {
  const { theme } = useTheme();
  return (
        <div className={`container ${theme === 'light' ? 'dark-mode' : 'light'}`}>
          <Header />
          <Routes>        
            <Route path="/" element={<Home />} /> 
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />          
        </div>
  ) 
}

export default App;

// path='/' must be the first one followed by path 'home' to give the logo and the home links the same content

// npm i sass --save-dev
// npm i react-router-dom@
// npm i react-icons
// npm i react-simple-typewriter
// emoji windows = touche windows + .
/*
Based on 'Google JavaScript Style Guide'

File names must be all lowercase and may include underscores (_) or dashes (-), but no additional punctuation. Follow the convention that your project uses. Filenames’ extension must be .js.
*/ 