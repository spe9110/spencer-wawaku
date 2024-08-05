import React, { memo } from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import './MainSass/index_main.css';
import videos from "./DataMain/VideosData";
import CountUpPage from "./CountUpPage";
import { useTheme } from '../Header/DarkMode';
import UxDesign from "./UxDesign";


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className='nextArrow' onClick={onClick}>
      <FaArrowRight/>
    </div>
  );
}
  
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className='prevArrow' onClick={onClick}>
      <FaArrowLeft/>
    </div>
  );
}

function Videos(){
    const { theme } = useTheme();
    
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        pauseOnHover: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                dots: false
              }
            },
            {
              breakpoint: 499,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
              }
            }
          ],
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return(
        <div className={`Videos ${theme === 'light' ? 'dark-mode' : 'light'}`} role='main'>
            <UxDesign />
            <h3 className="Videos__title">Videos</h3>
            <p className="Videos__watch">Watch me on Youtube</p>
            
            {/* videos container */}
            <Slider {...settings}>
                {videos.map(videoItem => (
                    <div className="Videos__card" key={videoItem.id}>
                        <div className="Videos__card__img">
                            <img 
                              src={videoItem.image} 
                              alt="photo_main" 
                              className="Videos__card__img__picture"
                              loading="lazy"
                              />
                            <span className="Videos__card__img__label">{videoItem.label}</span>
                        </div>
                        <div className="Videos__card__content">
                            <h3 className="Videos__card__content__title">{videoItem.title}</h3>
                            <p className="Videos__card__content__description">{videoItem.description}</p>
                            <div className="Videos__card__content__profil">
                                <div className="Videos__card__content__profil__author">
                                    <img 
                                      src={videoItem.profil} 
                                      alt={videoItem.author} 
                                      className="Videos__card__content__profil__author__picture"
                                      loading="lazy"
                                      />
                                    <div className="Videos__card__content__profil__author__nameJob">
                                    <span className="Videos__card__content__profil__author__nameJob__name">{videoItem.author}</span>
                                    <span className="Videos__card__content__profil__author__nameJob__job">{videoItem.job}</span>
                                    </div>
                                </div>
                                <div className="Videos__card__content__profil__dateButton">
                                    <span className="Videos__card__content__profil__dateButton__date">{videoItem.date}</span>
                                    <button className="Videos__card__content__profil__dateButton__btn">
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
                ))}
            </Slider>
            <CountUpPage/>
        </div>
    )
}
export default memo(Videos);