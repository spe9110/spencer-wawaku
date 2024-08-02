import React, { useState, useEffect, useCallback } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import './MainSass/index_main.css';

const CarouselIndicator = ({ pictures, activeIndex, onClick }) => {
    if(!pictures || !pictures.length){
        return null; // Render nothing if images is null or empty
    }

    return (
        <div className="carousel__indicators" >
            {pictures.map((_, index) => (
                <span
                    key={index}
                    className={`carousel__indicator ${index === activeIndex ? 'active' : ''}`}
                    onClick={()=> onClick(index)}
                >

                </span>
            ))}
        </div>
    )
}

const PictureProfil = ({ pictures, interval = 3000 }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    // handle Prevous function
    const prevSlide = useCallback(() => {
        setActiveIndex((activeIndex) =>
            activeIndex === 0 ? pictures.length - 1 : activeIndex - 1
        );
    }, [pictures.length]);

    // handle next function
    const nextSlide = useCallback(() => {
        setActiveIndex((activeIndex) =>
            activeIndex === pictures.length - 1 ? 0 : activeIndex + 1
        );
    }, [pictures.length]);

    // go to slide indicator
    const goToSlide = useCallback((index) => {
        setActiveIndex(index);
    }, []);

    useEffect(() => {
        const autoPlayInterval = setInterval(nextSlide, interval);
        return () => {
            clearInterval(autoPlayInterval)
        };
    }, [interval, nextSlide]);

  return (
    <>
        <button onClick={prevSlide} className='carousel__btn carousel__btn--prev'>
            <FaArrowLeft/>
        </button>

        <img src={pictures[activeIndex]} alt={`slide ${activeIndex}`} className="About__slider__picture__img" />

        <button onClick={nextSlide} className='carousel__btn carousel__btn--next'>
            <FaArrowRight/>
        </button>

        <CarouselIndicator
        pictures={pictures}
        activeIndex={activeIndex}
        onClick={goToSlide}
        />
    </>
    )
}

export default PictureProfil;
