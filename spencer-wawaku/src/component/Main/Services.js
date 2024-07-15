/* eslint-disable jsx-a11y/img-redundant-alt */
import { useRef } from "react";
import services from "./DataMain/ServicesData";
import './MainSass/index_main.css';
import { useTheme } from '../Header/DarkMode';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(useGSAP);

export default function ServicesSection(){
    const { theme } = useTheme();

    const servicesAnime = useRef(null);
    const tl = useRef(gsap.timeline());

    useGSAP(
        () => {
            tl.current = gsap.timeline()
                .from(servicesAnime.current.children, {
                    duration: 1.5, 
                    opacity: 0,
                    stagger: 1
                })
        }
    )

    return(
        <div className={`Services ${theme === 'light' ? 'dark-mode' : 'light'}`} ref={servicesAnime} role='main'>
            <h3 className="Services__title">Services</h3>
            <p className="Services__help">I can help you with</p>

            {/* card's container */}
            <div className="Services__wrapper">
                {services.map(Item => (
                    <div className="Services__wrapper__card" key={Item.id}>
                        <h1 className="Services__wrapper__card__number"> {Item.number} </h1>
                        <div className="Services__wrapper__card__img">
                            <img src={Item.icon} alt='WebDev-Photo' />
                        </div>
                        <h3 className="Services__wrapper__card__title"> {Item.title} </h3>
                        <p className="Services__wrapper__card__details"> {Item.description} </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
