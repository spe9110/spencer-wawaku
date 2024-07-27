import { useState } from 'react';
import navbarItems from './Data/Data'; // Importing navbarItems from data.js
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';
import SocialMedia from './SocialMedia';
import LogoImage from './Images/spfavicon.png';
import Switch from './Switch';
import { useTheme } from './DarkMode';
import './HeaderSass/index_header.css';
// import gsap from 'gsap';

export default function Header() {

    const { theme } = useTheme();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hamburgerColor, setHamburgerColor] = useState(theme === '#000' ? '#ffffff' : '#000000');
    const initialHamburgerColor = theme === '#000' ? '#ffffff' : '#000000';

    const handleHamburger = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        setHamburgerColor(!mobileMenuOpen ? '#ffffff' : initialHamburgerColor);
    };

    const handleNavLink = () => {
        if (window.innerWidth <= 768) {
            setMobileMenuOpen(false);
        }
    };

    return (
        <div className={`Header ${theme === 'light' ? 'dark-mode' : 'light'}`} role='banner'>
            {/* logo */}
            <div className='Header__logo' id='logo'>
                <Link to='/home' className="LinkName">
                    <img className="Header__logo__picture" src={LogoImage} alt="photo_logo" />
                    <h3 className="Header__logo__name">Spencer.</h3>
                </Link>
            </div>

            {/* navigation */}
            <nav className={`Header__navbar ${mobileMenuOpen ? 'open' : ''}`} id='navbar' role='navigation'>
                <ul>
                    {navbarItems.map(item => (
                        <li key={item.id}>
                            <NavLink
                                to={item.url}
                                title={item.title}
                                onClick={handleNavLink}
                            >
                                <span id='icon-link'>{item.icon}</span>
                                <span id='title'>{item.title}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <SocialMedia />
            </nav>

            {/* button */}
            <div className='Header__contact' id='btn'>
                <Switch />
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
