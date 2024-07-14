import { useRef } from 'react';
import { useTypewriter, Cursor} from 'react-simple-typewriter';
import './MainSass/index_main.css';
import { GoArrowUpRight } from "react-icons/go";
import { NavLink } from "react-router-dom";
import Profil from './Images/avatar-bis.png';
import SocialMediaHero from "./SocialMediaHero";
import ScrollingText from "../Main/ScrollingText";
import { useTheme } from '../Header/DarkMode';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(useGSAP);

export default function HomeSection(){
    const { theme } = useTheme();

    const [text] = useTypewriter({
        words: ["I'm a Front-End Developer", "I'm a React Developer", "I'm a Node Developer", "I'm a junior fullstack Developer", "I'm a content creator", "I'm a self-taught programmer" ],
        loop: {},
        typeSpeed: 250,
        deleteSpeed: 30,
        delaySpeed: 2500
    });

    const firstAnime = useRef();
    const tl = useRef();

    useGSAP(
        () => {
            tl.current = gsap
                .timeline()
                .from("#greet", {
                    duration: .5, 
                    opacity: 0, 
                    x: "-50%", 
                    delay: 0.1, 
                    stagger: 0.5
                    })
                .from("#name", {
                    duration: 1, 
                    opacity: 0, 
                    x: "-50%", 
                    delay: 0.2, 
                    stagger: 0.5
                })
                .from("#job", {
                    duration: 1.5, 
                    opacity: 0, 
                    x: "-50%", 
                    delay: 0.3, 
                    stagger: 0.5
                })
                .from("#descript", {
                    duration: 2, 
                    opacity: 0, 
                    x: "-50%", 
                    delay: 0.4, 
                    stagger: 0.5
                })
                .from("#btn_one", {
                    duration: 2, 
                    opacity: 0, 
                    y: "10%", 
                    delay: 0.5, 
                    stagger: 0.5
                })
                .from("#picture", {
                    duration: 3, 
                    opacity: 0, 
                    y: "20%", 
                    delay: 0.6, 
                    stagger: 0.5
                })
        }
    );

    return(
        <div ref={firstAnime} className={`Hero ${theme === 'light' ? 'dark-mode' : 'light'}`} id='Hero_Anime'>
            {/* info */}
            <div className="Hero__info">
                <p id='greet' className="Hero__info__greet">Hello <span style={{fontSize:30}}>👋🏾</span> it's </p>
                <h3 id='name' className="Hero__info__name">Spencer WAWAKU</h3>
                <h4 id='job' className="Hero__info__job">
                    <span>{text}</span>
                    <span style={{marginLeft:10}}><Cursor cursorStyle='✍🏾' /></span>
                </h4>
                <hr />
                <p id='descript' className="Hero__info__description">As a passionate web developer, I'm ready to bring your ideas to life by creating captivating and innovative digital experiences.</p>
                <div className="Hero__info__btn"  id='btn_one'>
                    <NavLink to='/contact' className="Hero__info__btn__one">
                            Get in touch
                        </NavLink>
                    <NavLink to='/contact' className="Hero__info__btn__two"><GoArrowUpRight /></NavLink>
                </div>
            </div>
            {/* profil */}
            <div className="Hero__profil" id='picture'>
                    <img src={Profil} className="Hero__profil__picture" alt="avatar_picture"/>
                <div className="Hero__profil__code">
                    <span>console.log(data)</span>
                </div>
                <div className="Hero__profil__code__one">
                    <span>NODEJS</span>
                </div>
                <div className="Hero__profil__code__two">
                    <span>REACT</span>
                </div>
                <div className="Hero__profil__code__three">
                    <span>HTML</span>
                </div>
                <div className="Hero__profil__code__four">
                    <span>CSS</span>
                </div>                    
                <div className="Hero__profil__code__five">
                    <span>SASS</span>
                </div>                    
                <div className="Hero__profil__code__six">
                    <span>JAVASCRIPT</span>
                </div>                    
            </div>
            <ScrollingText/>
            <SocialMediaHero/>
        </div>
    )
}
