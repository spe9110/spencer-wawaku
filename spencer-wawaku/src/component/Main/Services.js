/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import services from "./DataMain/ServicesData";
import './MainSass/index_main.css';
import { useTheme } from '../Header/DarkMode';

export default function Services(){
    const { theme } = useTheme();

    return(
        <div className={`Services ${theme === 'light' ? 'dark-mode' : 'light'}`}>
            <h3 className="Services__title">Services</h3>
            <p className="Services__help">I can help you with</p>

            {/* card's container */}
            <div className="Services__wrapper">
                {services.map(Item => (
                    <div className="Services__wrapper__card" key={Item.id} >
                        <h1 className="Services__wrapper__card__number"> {Item.number} </h1>
                        <div className="Services__wrapper__card__img">
                            <img src={Item.img} alt="WebDev-Photo" />
                        </div>
                        <h3 className="Services__wrapper__card__title"> {Item.title} </h3>
                        <p className="Services__wrapper__card__details"> {Item.description} </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
