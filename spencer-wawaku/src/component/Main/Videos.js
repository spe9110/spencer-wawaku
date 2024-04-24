/* eslint-disable no-undef */
import React from "react";
import './MainSass/index_main.css';
import videos from "./DataMain/VideosData";
import Slider from "react-slick";
import CountUpPage from "./CountUpPage";

export default function Videos(){
    var settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return(
        <div className="Videos">
            <h3 className="Videos__title">Videos</h3>
            <p className="Videos__watch">Watch me on Youtube</p>
            
            {/* videos container */}
            <div className="Videos__container">
                <Slider {...settings}>
                    {videos.map(videoItem => (
                            <div className="Videos__container__card" key={videoItem.id}>
                                <div className="Videos__container__card__img">
                                    <img src={videoItem.image} alt="photo_main" className="Videos__container__card__img__picture"/>
                                    <span className="Videos__container__card__img__label">{videoItem.label}</span>
                                </div>
                                <div className="Videos__container__card__content">
                                    <h3 className="Videos__container__card__content__title">{videoItem.title}</h3>
                                    <p className="Videos__container__card__content__description">{videoItem.description}</p>
                                    <div className="Videos__container__card__content__profil">
                                        <div className="Videos__container__card__content__profil__author">
                                            <img src={videoItem.profil} alt="" className="Videos__container__card__content__profil__author__picture"/>
                                            <span className="Videos__container__card__content__profil__author__name">{videoItem.author}</span>
                                        </div>
                                        <div className="Videos__container__card__content__profil__dateButton">
                                            <span className="Videos__container__card__content__profil__dateButton__date">{videoItem.date}</span>
                                            <button className="Videos__container__card__content__profil__dateButton__btn">
                                                <a 
                                                    href={videoItem.url}
                                                    rel="noopener noreferrer"
                                                    target="_blank"
                                                    aria-label={videoItem.title}
                                                >
                                                    Watch
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </Slider>
            </div>
            <CountUpPage/>
        </div>
    )
}
