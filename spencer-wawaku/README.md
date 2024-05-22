# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



<!-- 
This React code snippet is designed to create a sticky header that hides when the user scrolls down and shows when the user scrolls up. Let's break down the code to understand how it works:

1. Ref Creation:
const headerRef = useRef(null);
useRef is a React hook that creates a reference to a DOM element. Here, it initializes headerRef to be null initially. This reference will later be attached to the header element in your JSX.

2. useEffect Hook:

useEffect(() => {
  let prevScrollPos = window.scrollY;

useEffect is a React hook that runs side effects in function components. In this case, it runs once when the component mounts (because the dependency array is empty).
let prevScrollPos = window.scrollY; stores the initial scroll position of the window.

3. Scroll Event Listener:

const handleScroll = () => {
  const currentScrollPos = window.scrollY;
  const headerElement = headerRef.current;
  if (!headerElement) {
    return;
  }
  if (prevScrollPos > currentScrollPos) {
    headerElement.style.transform = "translateY(0)";
  } else {
    headerElement.style.transform = "translateY(-200px)";
  }
  prevScrollPos = currentScrollPos;
};

handleScroll is a function that gets called whenever the user scrolls the window.
currentScrollPos stores the current vertical scroll position.
headerElement gets the current DOM element referenced by headerRef.
The function checks if the header element exists. If not, it returns early.
If the previous scroll position (prevScrollPos) is greater than the current scroll position (currentScrollPos), it means the user is scrolling up, so the header should be shown (translateY(0)).
If the previous scroll position is less than the current scroll position, the user is scrolling down, so the header should be hidden (translateY(-200px)).
The previous scroll position is then updated to the current scroll position.

4. Adding and Cleaning Up the Event Listener:
window.addEventListener('scroll', handleScroll);

return () => {
  window.removeEventListener('scroll', handleScroll);
};

window.addEventListener('scroll', handleScroll); adds the handleScroll function as a listener for the scroll event on the window. This means handleScroll will be called whenever the user scrolls.
The return function in useEffect is a cleanup function that removes the scroll event listener when the component unmounts. This prevents memory leaks by ensuring the event listener is removed.

Full Component Example:
Here’s how you might use the above logic in a functional component:

import React, { useRef, useEffect } from 'react';

const StickyHeader = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header ref={headerRef} style={{ transition: 'transform 0.3s ease' }}>
      {/* Your header content */}
    </header>
  );
};

export default StickyHeader;

    // Header sticky functionality
    // Step one: useRef initialization
    const headerRef = useRef(null);

    // Step two: useEffect Hook
    useEffect(() => {
        let prevScrollPos = window.scrollY;

        // Step three: scroll event listener
        const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        const headerElement = headerRef.current;
        if (!headerElement) {
            return;
        }
        if (prevScrollPos > currentScrollPos) {
            headerElement.style.transform = "translateY(0)";
        } else {
            headerElement.style.transform = "translateY(-200px)";
        }
        prevScrollPos = currentScrollPos;
        };

        // Step four: Adding and cleaning up the event listener
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures this effect runs only once

 -->

 <!-- 
 THE INDEX JS FILE

import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {ThemeProvider} from './component/Header/DarkMode';
import { ChakraProvider } from '@chakra-ui/react';
import { AlertProvider } from './component/Main/AlertMessage/AlertContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <AlertProvider>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </AlertProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
  -->

  <!-- 
  THE APP.js file

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
import ScrollingText from "./component/Main/ScrollingText";
import Alert from "./component/Main/AlertMessage/Alert";

function App() {
  const { theme } = useTheme();
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
          <ScrollingText/>
          {/* <About/> */}
          {/* <Services/> */}
          {/* <Videos/> */}
          {/* <Contact/> */}
          <Footer />
          <Alert/>          
        </main>
  ) 
}
THIS IS THE STRUCTURE FOR MULTIPLE PAGES
   -->

   <!-- 
   Header js file

   import { useState, useEffect } from 'react';
import navbarItems from './Data/Data'; // Importing navbarItems from data.js
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';
import SocialMedia from './SocialMedia';
import LogoImage from './Images/1.png';
import Switch from './Switch';
import { useTheme } from './DarkMode';
import './HeaderSass/index_header.css';


export default function Header() {

    const { theme } = useTheme();

    // we create a useState and initialize the MobileMenuOpen to false
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    // we initialize the hamburgerColor to black
    const [hamburgerColor, setHamburgerColor] = useState(theme === 'light' ? '#ffffff' : '#000000');
    // Store the initial hamburger color
    const initialHamburgerColor = theme === 'light' ? '#ffffff' : '#000000';
    // we initialize the show icon to false
    const [showIcon, setShowIcon] = useState(false);

    // with this function we change me menu on click
    const handleHamburger = ()=>{
        setMobileMenuOpen(!mobileMenuOpen);
        // NOTE: onclick we change not the hamburgerColor but  "mobileMenuOpen" inside the setHamburgerColor function to change it color
        setHamburgerColor(mobileMenuOpen ? initialHamburgerColor : '#ffffff');
    }

    // This function remove the menu on clicking an element
    const handleNavLink = () => {
        if (window.innerWidth < 768) {
            setMobileMenuOpen(false); // Close the mobile menu when a navigation item is clicked
        }
    }

    // useEffect to handle the navigation element's icon
    useEffect(()=>{
        const handleResize = () =>{
            if(window.innerWidth < 768){
                setShowIcon(true);
            } else{
                setShowIcon(false);
            }
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    
    return (
        <div className={`Header ${theme === 'light' ? 'dark-mode' : 'light'}`} >

            {/* logo */}
            <div className='Header__logo'>
                <Link to='/home' className="LinkName">
                    <img className="Header__logo__picture" src={LogoImage} alt="photo_logo" />
                    <h3 className="Header__logo__name">
                        Spencer.
                    </h3>
                </Link>
            </div>

            {/* navigation */}
            {/* to show the menu on click we  create a function on nav element */}
            <nav className={`Header__navbar ${mobileMenuOpen ? 'open' : ''}`}>
                <ul>
                    {navbarItems.map(item => (
                        <li key={item.id}>
                            <NavLink 
                                to={item.url}
                                title={item.title}
                                onClick={handleNavLink} // Call handleNavLink when a navigation item is clicked
                            >
                                {/* this code show/hide this icon on small and wide devices */}
                                {showIcon && <span>{item.icon}</span>}
                                <span>{item.title}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
                {/* social-media */}
                <SocialMedia />
            </nav>

            {/* button */}
            <div className='Header__contact'>
                <Switch/>
                    <NavLink className="Header__contact__contactMe" to='/contact'>
                        <button>Contact</button>
                    </NavLink>
                <button className="Header__contact__hamburgerBtn" onClick={handleHamburger}>
                    {mobileMenuOpen ? <FaXmark color={hamburgerColor} /> : <FaBars color={initialHamburgerColor} />}
                </button>
            </div>
        </div>
    );
}
    -->