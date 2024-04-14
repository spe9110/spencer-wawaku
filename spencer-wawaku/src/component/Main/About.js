/* eslint-disable react/jsx-no-undef */
import React from "react";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import { Progress } from '@chakra-ui/react'
import './MainSass/index_main.css';

export default function About(){
    return(
        <div className="About">
            <div className="About__slider">
                {/* design */}
                <div className="About__slider__design"></div>
                {/* picture slider*/}
                <div className="About__slider__picture"></div>
            </div>
            <div className="About__content">
                <h3 className="About__content__title">About me</h3>
                <div className="About__content__btn">
                    <div className="About__content__btn__toggle"></div>
                    <button className="About__content__btn__one">info</button>
                    <button className="About__content__btn__two">skill</button>
                </div>
                <div className="About__content__wrapper">
                    {/* info */}
                    <div className="About__content__wrapper__info">
                        <div className="About__content__wrapper__info__intro">
                            <h3>I'm Spencer Wawaku, I am a Frontend Developer freelance based in Rennes at France and I'm a Icodethis Pro member.</h3>
                            <p>I create responsive and user-friendly websites that combine exceptional user interfaces with optimal performance and superior quality.  I am here to provide you with customized solutions tailored to your needs.</p>
                        </div>
                        <div className="About__content__wrapper__info__knowledge">
                            <div id="list-skill">
                                <img src="./photos/icons8-html-48.png" alt="" />
                                <span>HTML</span>
                            </div>
                            <div id="list-skill">
                                <img src="./photos/icons8-css-48.png" alt="" />
                                <span>CSS</span>
                            </div>
                            <div id="list-skill">
                                <img src="./photos/icons8-tailwind-css-48.png" alt="" />
                                <span>Tailwind CSS</span>
                            </div>
                            <div id="list-skill">
                                <img src="./photos/icons8-javascript-48.png" alt="" />
                                <span>Javascript</span>
                            </div>
                            <div id="list-skill">
                                <img src="./photos/icons8-react-native-48.png" alt="" />
                                <span>React JS</span>
                            </div>
                            <div id="list-skill">
                                <img src="./photos/icons8-jquery-50.png" alt="" />
                                <span>Jquery</span>
                            </div>
                            <div id="list-skill">
                                <img src="./photos/icons8-git-48.png" alt="" />
                                <span>Git</span>
                            </div>
                            <div id="list-skill">
                                <img src="./photos/icons8-github-48.png" alt="" />
                                <span>Github</span>
                            </div>
                            <div id="list-skill">
                                <img src="./photos/icons8-wordpress-48.png" alt="" />
                                <span>WordPress</span>
                            </div>
                            <div id="list-skill">
                                <img src="./photos/icons8-microsoft-word-2019-48.png" alt="" />
                                <span>MS Word</span>
                            </div>
                            <div id="list-skill">
                                <img src="./photos/icons8-microsoft-excel-2019-48.png" alt="" />
                                <span>MS Excel</span>
                            </div>
                        </div>
                    </div>
                    {/* skill hide*/}
                    <div className="About__content__wrapper__skill">
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
                    </div>
                </div>
            </div>
        </div>
    )       
}