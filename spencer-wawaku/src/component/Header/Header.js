import { useState, useRef } from 'react';
import navbarItems from './Data/Data'; // Importing navbarItems from data.js
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';
import SocialMedia from './SocialMedia';
import LogoImage from './Images/spfavicon.png';
import Switch from './Switch';
import { useTheme } from './DarkMode';
import './HeaderSass/index_header.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(useGSAP);

export default function Header() {

    const { theme } = useTheme();

    // we create a useState and initialize the MobileMenuOpen to false
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    // we initialize the hamburgerColor to black
    const [hamburgerColor, setHamburgerColor] = useState(theme === 'light' ? '#ffffff' : '#000000');
    // Store the initial hamburger color
    const initialHamburgerColor = theme === 'light' ? '#ffffff' : '#000000';
    

    // with this function we change me menu on click
    const handleHamburger = ()=>{
        setMobileMenuOpen(!mobileMenuOpen);
        // NOTE: onclick we change not the hamburgerColor but  "mobileMenuOpen" inside the setHamburgerColor function to change it color
        setHamburgerColor(mobileMenuOpen ? initialHamburgerColor : '#ffffff');
    }

    // This function remove the menu on clicking an element
    const handleNavLink = () => {
        if (window.innerWidth <= 768) {
            setMobileMenuOpen(false); // Close the mobile menu when a navigation item is clicked
        }
    }
        // GSAP 
    const thirdAnime = useRef();
    const tl = useRef();

    useGSAP(
        () => {
            tl.current = gsap
                .timeline()
                .from("#logo, #navbar, #btn", {
                    duration: 1, 
                    opacity: 0, 
                    y: "-100%", 
                    stagger: 0.5
                })
                
        }
    );
    return (
        <div ref={thirdAnime} className={`Header ${theme === 'light' ? 'dark-mode' : 'light'}`}>

            {/* logo */}
            <div className='Header__logo'  id='logo'>
                <Link to='/home' className="LinkName">
                    <img className="Header__logo__picture" src={LogoImage} alt="photo_logo" />
                    <h3 className="Header__logo__name">
                        Spencer.
                    </h3>
                </Link>
            </div>

            {/* navigation */}
            {/* to show the menu on click we  create a function on nav element */}
            <nav className={`Header__navbar ${mobileMenuOpen ? 'open' : ''}`} id='navbar'>
                <ul>
                    {navbarItems.map(item => (
                        <li key={item.id}>
                            <NavLink 
                                to={item.url}
                                title={item.title}
                                onClick={handleNavLink} // Call handleNavLink when a navigation item is clicked
                            >
                                {/* this code show/hide this icon on small and wide devices */}
                                <span id='icon-link'>{item.icon}</span>
                                <span id='title'>{item.title}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
                {/* social-media */}
                <SocialMedia />
            </nav>

            {/* button */}
            <div className='Header__contact' id='btn'>
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

/*

// we initialize the show icon to false
    // const [showIcon, setShowIcon] = useState(false);

 // useEffect to handle the navigation element's icon
    // useEffect(()=>{
    //     const handleResize = () =>{
    //         if(window.innerWidth <= 768){
    //             setShowIcon(true);
    //         } else{
    //             setShowIcon(false);
    //         }
    //     }

    //     window.addEventListener("resize", handleResize);
    //     return () => window.removeEventListener("resize", handleResize);
    // }, [])

    return
    
    / this code show/hide this icon on small and wide devices /
    {showIcon && <span id='icon-link'>{item.icon}</span>}
*/ 