import React, { useRef, useLayoutEffect, memo } from 'react';
import gsap from 'gsap';
import { useTypewriter, Cursor} from 'react-simple-typewriter';
import { GoArrowUpRight } from "react-icons/go";
import { NavLink } from "react-router-dom";
import Profil from './Images/avatar-bis.webp';
import SocialMediaHero from "./SocialMediaHero";
import ScrollingText from "../Main/ScrollingText";
import { useTheme } from '../Header/DarkMode';
import circleSkills from "./DataMain/RoundSkill";
import { Helmet} from "react-helmet";
import './MainSass/index_main.css';
import UxDesign from './UxDesign';


function HomeSection(){
    const { theme } = useTheme();

    const [text] = useTypewriter({
        words: ["I'm a Front-End Developer", "I'm a React Developer", "I'm a Node Developer", "I'm a junior fullstack Developer", "I'm a content creator", "I'm a self-taught programmer" ],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 120,
        delaySpeed: 2500
    });

    const firstAnime = useRef();
    const tl = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            tl.current = gsap.timeline()
            .from("#greet, #name, #job, #descript, #btn_one", {
                duration: 1.3, 
                opacity: 0.01, 
                y: "+30", 
                stagger: 0.5
            })
            .from("#picture", {
                duration: 2, 
                opacity: 0.01, 
                y: "+30", 
                stagger: 1
            })
        });
        return () => ctx.revert();
    }, []);

    return(
        <div ref={firstAnime} className={`Hero ${theme === 'light' ? 'dark-mode' : 'light'}`} id='Hero_Anime' role='main'>
            <UxDesign/>
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
                <div className='Hero__profil__circle'>
                    <div className='Hero__profil__circle__round_1'>
                        {/* Helmet to preload the largest contentful paint image in React */}
                        <Helmet>
                                {circleSkills.map(item => (
                                    <link
                                    key={item.id}
                                    rel="preload"
                                    href={item.circleOne}
                                    as="image"
                                />
                                ))}
                        </Helmet>        
                        {circleSkills.map(item => (
                            <span key={item.id}><img src={item.circleOne} alt='skill_picture' loading='lazy' /></span>
                        ))}        
                    </div>
                    <div className='Hero__profil__circle__round_2'>
                        {circleSkills.map(item => (
                            <span key={item.id}><img src={item.circleTwo} alt='skill_picture'/></span>
                        ))}
                    </div>
                </div>
            </div>
            <ScrollingText/>
            <SocialMediaHero/>
        </div>
    )
}
export default memo(HomeSection);