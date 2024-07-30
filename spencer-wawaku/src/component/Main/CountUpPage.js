import React from 'react';
import { useState } from "react";
import './MainSass/index_main.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { MdWork } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { FaYoutube } from "react-icons/fa";


export default function CountUpPage(){
    const [countOn, setCountOn] = useState(false);

    return(
        <div className="CountUp">
            <ScrollTrigger onEnter={()=>setCountOn(true)} onExit={()=>setCountOn(false)}>
                <div className="CountUp__wrapper">
                    <div className="CountUp__wrapper__experience">
                        <span className="CountUp__wrapper__experience__icon">
                            <MdWork/>
                        </span>
                        <span className="CountUp__wrapper__experience__number">
                            {countOn && <CountUp start={0} end={1} duration={2.75} suffix="+" delay={0}/>}
                        </span>
                        <span className="CountUp__wrapper__experience__title">
                            Experience
                        </span>
                    </div>
                    <div className="CountUp__wrapper__project">
                        <span className="CountUp__wrapper__project__icon">
                            <GoProjectRoadmap/>
                        </span>
                        <span className="CountUp__wrapper__project__number">
                            {countOn && <CountUp start={0} end={38} duration={2.75} suffix="+" delay={0}/>}
                        </span>
                        <span className="CountUp__wrapper__project__title">
                            Projects Completed
                        </span>
                    </div>
                    <div className="CountUp__wrapper__subscribers">
                        <span className="CountUp__wrapper__subscribers__icon">
                            <FaYoutube/>
                        </span>
                        <span className="CountUp__wrapper__subscribers__number">
                            {countOn && <CountUp start={0} end={130} duration={2.75} suffix="+" delay={0}/>}
                        </span>
                        <span className="CountUp__wrapper__subscribers__title">
                            Subscribers
                        </span>
                    </div>
                </div>
            </ScrollTrigger>
        </div>
    )
}