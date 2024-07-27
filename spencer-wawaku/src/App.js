import { useState, useEffect } from "react";
import Header from './component/Header/Header';
import Home from './component/Main/Home';
import About from './component/Main/About';
import Services from "./component/Main/Services";
import Videos from './component/Main/Videos'; 
import Contact from './component/Main/Contact';
import Footer from "./component/Footer/Footer";
import { Routes, Route } from 'react-router-dom';
import { useTheme } from './component/Header/DarkMode';
import Alert from "./component/Main/AlertMessage/Alert";
import LoadingScreen from "./loader/LoadingScreen";

function App() {
  const { theme } = useTheme();
  // loading screen
  const [ loading, setLoading ] = useState(true);
  useEffect(()=>{
    setTimeout(()=>setLoading(false), 15000);
  },[])

  if(loading){
    return <LoadingScreen/>
  }

  return (
        <main className={`container ${theme === 'light' ? 'dark-mode' : 'light'}`}>
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
          <Alert/>          
        </main>
  ) 
}
export default App;

// path='/' must be the first one followed by path 'home' to give the logo and the home links the same content

// npm i sass --save-dev
// npm i react-router-dom@
// npm i react-icons
// npm i react-simple-typewriter
// emoji windows = touche windows + .
// npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
// npm install react-multi-carousel --save
// npm install --save-dev @babel/plugin-proposal-private-property-in-object
// npm install slick-carousel --save
// npm install gsap (Install the GSAP library) and 
// npm install @gsap/react (Install the GSAP React package)


/*
Based on 'Google JavaScript Style Guide'

File names must be all lowercase and may include underscores (_) or dashes (-), but no additional punctuation. Follow the convention that your project uses. Filenames’ extension must be .js.
*/ 