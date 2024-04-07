import React from "react";
import { useTypewriter, Cursor} from 'react-simple-typewriter';
import './MainSass/index_main.css';
import { GoArrowUpRight } from "react-icons/go";
import { NavLink } from "react-router-dom";
import Profil from './Images/avatar-bis.png';

export default function Home(){
    const [text] = useTypewriter({
        words: ["I'm a Front-End Developer", "I'm a React Developer", "I'm a Node Developer", "I'm a junior fullstack Developer", "I'm an Educator"],
        loop: {},
        typeSpeed: 250,
        deleteSpeed: 30,
        delaySpeed: 2500
    })

    return(
        <div className="Hero">
            {/* info */}
            <div className="Hero__info">
                <p className="Hero__info__greet">Hello it's</p>
                <h3 className="Hero__info__name">Spencer WAWAKU</h3>
                <h4 className="Hero__info__job">
                    <span>{text}</span>
                    <span style={{marginLeft:10}}><Cursor cursorStyle='✍🏾' /></span>
                </h4>
                <hr />
                <p className="Hero__info__description">As a passionate web developer, I'm ready to bring your ideas to life by creating captivating and innovative digital experiences.</p>
                <div className="Hero__info__btn">
                    <NavLink to='/contact' className="Hero__info__btn__one">
                            Get in touch
                        </NavLink>
                    <NavLink to='/contact' className="Hero__info__btn__two"><GoArrowUpRight /></NavLink>
                </div>
            </div>
            {/* profil */}
            <div className="Hero__profil">
                <div>
                    <img src={Profil} className="Hero__profil__picture" alt="avatar_picture"/>
                </div>
            </div>
        </div>
    )
}
