"use client";

import { useState, useEffect, Suspense, lazy } from "react";
import { Routes, Route } from 'react-router-dom';
import { useTheme } from './component/Header/DarkMode';
import { ErrorBoundary } from "react-error-boundary";

const Header = lazy(()=> import('./component/Header/Header'));
const Home = lazy(()=> import('./component/Main/Home'));
const About = lazy(()=> import('./component/Main/About'));
const Services = lazy(()=> import("./component/Main/Services"));
const Videos = lazy(()=> import('./component/Main/Videos'));
const Contact = lazy(()=> import('./component/Main/Contact'));
const Footer = lazy(()=> import("./component/Footer/Footer"));
const Alert = lazy(()=> import("./component/Main/AlertMessage/Alert"));
const LoadingScreen = lazy(()=> import("./loader/LoadingScreen"));
const NotFoundPage = lazy(()=> import("./component/Main/404"));

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
          <ErrorBoundary fallback={<div 
            style={{ 
              color: "red",
              display: "grid",
              placeItems: "center",
              fontSize: "2rem",
              fontWeight: "600"
            }}>Something went wrong</div>}>
            <Suspense fallback={<p>Loading...</p>}>
              <Header />
              <Routes>        
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFoundPage />} /> 
              </Routes>
              <Footer />
              <Alert/>
          </Suspense>
          </ErrorBoundary>
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
// npm install babel-core babel-loader babel-preset-react css-loader react react-dom react-hot-loader style-loader webpack webpack-dev-server --save-dev


/*
https://css-tricks.com/adding-a-cdn-to-your-website/
Based on 'Google JavaScript Style Guide'

File names must be all lowercase and may include underscores (_) or dashes (-), but no additional punctuation. Follow the convention that your project uses. Filenames’ extension must be .js.
*/ 