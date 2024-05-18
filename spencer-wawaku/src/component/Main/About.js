/* eslint-disable react/jsx-no-undef */
import React, { useState }  from 'react';
import { CircularProgress, CircularProgressLabel , Progress } from '@chakra-ui/react';
import './MainSass/index_main.css';
import PictureProfil from './PictureProfil';
import pictures from './DataMain/PictureData';
import knowledges from './DataMain/AllSkills';
import programmingSkills from './DataMain/ProgrammingSkills';
import otherSkills from './DataMain/OtherSkills';
import tools from './DataMain/ToolsData';

// picture variables
const picture = pictures;

export default function About(){
    const [showSkills, setShowSkills] = useState(1);

    const handleShowSkills = (e) => {
        setShowSkills(e)
    }

    return(
        <div className="About">
            <div className="About__slider">
                {/* design */}
                <div className="About__slider__design"></div>
                {/* picture slider*/}
                <div className="About__slider__picture">
                    <PictureProfil pictures={picture} className="About__slider__picture__img" />
                </div>
            </div>
            <div className="About__content">
                <h3 className="About__content__title">About me</h3>
                <div className="About__content__btn">
                    <button className={showSkills === 1 ? "About__content__btn__one active" : "About__content__btn__one"} onClick={()=> handleShowSkills(1)}>All skills</button>
                    <button className={showSkills === 2 ? "About__content__btn__two active" : "About__content__btn__two"} onClick={()=> handleShowSkills(2)}>Programming</button>
                    <button  className={showSkills === 3 ? "About__content__btn__three active" : "About__content__btn__three"} onClick={()=> handleShowSkills(3)}>Others skills</button>
                </div>
                <div className="About__content__wrapper">
                    {/* info */}
                    {showSkills === 1 && (<div className="About__content__wrapper__info">
                        <div className="About__content__wrapper__info__intro">
                            <h3>I'm Spencer Wawaku, I am a junior Full-Stack Developer freelance based in Rennes at France and I'm a Icodethis Pro member.</h3>
                            <p>I create responsive and user-friendly websites that combine exceptional user interfaces with optimal performance and superior quality.  I am here to provide you with customized solutions tailored to your needs.</p>
                        </div>
                        <div className="About__content__wrapper__info__knowledge">
                            {knowledges.map(skill => (
                                <div key={skill.id} className="About__content__wrapper__info__knowledge__list-skill">
                                    <img src={skill.image} alt={skill.id} />
                                    <span>{skill.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>)}
                    {/* skill hide*/}
                    {showSkills === 2 && (<div className="About__content__wrapper__prog">
                        <div className="About__content__wrapper__prog__programming">
                            <h4>Programming skills</h4>
                            {programmingSkills.map((prog) => (
                                <React.Fragment key={prog.id}>
                                    <div className='About__content__wrapper__prog__programming__skill-content'>
                                        <p>{prog.title}</p>
                                        <p>{prog.percentage}</p>
                                    </div>

                                    <div className='About__content__wrapper__prog__programming__skill-bg'>
                                        <div className='About__content__wrapper__prog__programming__skill-bg__skill-progress' style={{width: prog.percentage}}></div>    
                                    </div>
                                </React.Fragment>
                            ))}                            
                        </div>
                        <div className="About__content__wrapper__prog__tool">
                            <h4>Tools skills</h4>
                            {tools.map(prog => (
                                <React.Fragment key={prog.id}>
                                    <div className="About__content__wrapper__prog__tool__tool-content">
                                        <p>{prog.tool}</p>
                                        <p>{prog.toolpercentage}</p>
                                    </div>
                                    <div className='About__content__wrapper__prog__tool__skill-bg'>
                                        <div className='About__content__wrapper__prog__tool__skill-bg__skill-progress' style={{width: prog.toolpercentage}}></div>    
                                    </div>
                                </React.Fragment>
                                
                            ))}                            
                        </div>
                    </div>)}
                    {/* skill hide*/}
                    {showSkills === 3 && (<div className="About__content__wrapper__other-skill">
                        <div className="About__content__wrapper__other-skill__content">
                            <h4>Other skills</h4>
                            <div className="About__content__wrapper__other-skill__content__box">
                                {otherSkills.map((Item) => (
                                    <React.Fragment  key={Item.id}>
                                       <div className="About__content__wrapper__other-skill__content__box__CircleBg">
                                            <div className="About__content__wrapper__other-skill__content__box__CircleBg__progress" style={{width:Item.percentage}}></div>
                                            <p className="About__content__wrapper__other-skill__content__box__CircleBg__percentage">{Item.percentage}</p>
                                            <p className="About__content__wrapper__other-skill__content__box__CircleBg__title">{Item.title}</p>
                                        </div >
                                    </React.Fragment>
                                ))}
                            </div>                           
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )       
}