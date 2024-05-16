/* eslint-disable react/jsx-no-undef */
import React, { useState }  from 'react';
import { CircularProgress, CircularProgressLabel , Progress } from '@chakra-ui/react';
import './MainSass/index_main.css';
import PictureProfil from './PictureProfil';
import pictures from './DataMain/PictureData';
import knowledges from './DataMain/AllSkills';

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
                        <div className="About__content__wrapper__skill__programming">
                            <div className="About__content__wrapper__skill__programming__content">
                                <h4>Programming skills</h4>
                                <h6>HTML</h6>
                                <Progress colorScheme='green' width={80} rounded='md' size='md' value={70} />                            </div>
                            <div className="About__content__wrapper__skill__microsoft">
                                <h4>Others skills</h4>
                                <div className="About__content__wrapper__skill__microsoft__contain">

                                    <div className="circle-progress">
                                        <h6>Word</h6>
                                        <CircularProgress value={95} size={20} color='blue.400'>
                                            <CircularProgressLabel fontSize={20}>95%</CircularProgressLabel>
                                        </CircularProgress>
                                    </div>

                                    <div className="circle-progress">
                                        <h6>Excel</h6>
                                        <CircularProgress value={75} color='blue.400'>
                                            <CircularProgressLabel>75%</CircularProgressLabel>
                                        </CircularProgress>
                                    </div>

                                    <div className="circle-progress">
                                        <h6>PowerPoint</h6>
                                        <CircularProgress value={75} color='blue.400'>
                                            <CircularProgressLabel>75%</CircularProgressLabel>
                                        </CircularProgress>
                                    </div>

                                    <div className="circle-progress">
                                        <h6>Canva</h6>
                                        <CircularProgress value={80} color='blue.400'>
                                        <CircularProgressLabel>80%</CircularProgressLabel>
                                        </CircularProgress>
                                    </div>
                                    <div className="circle-progress">
                                        <h6>WordPress</h6>
                                        <CircularProgress value={65} color='blue.400'>
                                        <CircularProgressLabel>65%</CircularProgressLabel>
                                        </CircularProgress>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)}
                    {/* skill hide*/}
                    {showSkills === 3 && (<div className="About__content__wrapper__prog">
                        <div className="About__content__wrapper__skill__programming">
                            <div className="About__content__wrapper__skill__programming__content">
                                <h4>Programming skills</h4>
                                <h6>HTML</h6>
                                <Progress 
                                    colorScheme='green' 
                                    sx={{
                                        "& > div:first-child": { 
                                          transitionProperty: "width 0.5s ease-in-out", 
                                        }, 
                                      }}  
                                    width={80} 
                                    rounded='md' 
                                    size='md' 
                                    value={70} />                            </div>
                            <div className="About__content__wrapper__skill__microsoft">
                                <h4>Others skills</h4>
                                <div className="About__content__wrapper__skill__microsoft__contain">

                                    <div className="circle-progress">
                                        <h6>Word</h6>
                                        <CircularProgress value={95} size={20} color='blue.400'>
                                            <CircularProgressLabel fontSize={20}>95%</CircularProgressLabel>
                                        </CircularProgress>
                                    </div>

                                    <div className="circle-progress">
                                        <h6>Excel</h6>
                                        <CircularProgress value={75} color='blue.400'>
                                            <CircularProgressLabel>75%</CircularProgressLabel>
                                        </CircularProgress>
                                    </div>

                                    <div className="circle-progress">
                                        <h6>PowerPoint</h6>
                                        <CircularProgress value={75} color='blue.400'>
                                            <CircularProgressLabel>75%</CircularProgressLabel>
                                        </CircularProgress>
                                    </div>

                                    <div className="circle-progress">
                                        <h6>Canva</h6>
                                        <CircularProgress value={80} color='blue.400'>
                                        <CircularProgressLabel>80%</CircularProgressLabel>
                                        </CircularProgress>
                                    </div>
                                    <div className="circle-progress">
                                        <h6>WordPress</h6>
                                        <CircularProgress value={65} color='blue.400'>
                                        <CircularProgressLabel>65%</CircularProgressLabel>
                                        </CircularProgress>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )       
}