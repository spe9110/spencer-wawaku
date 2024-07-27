/* eslint-disable jsx-a11y/img-redundant-alt */
import { useRef, useLayoutEffect } from "react";
import services from "./DataMain/ServicesData";
import './MainSass/index_main.css';
import { useTheme } from '../Header/DarkMode';
import gsap from 'gsap';

export default function ServicesSection(){
    const { theme } = useTheme();

    // GSAP
    const servicesAnime = useRef();
    const tl = useRef();

    // typically it's best to useLayoutEffect() instead of useEffect() to have React render the initial state properly from the very start.
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            tl.current = gsap.timeline()
                .from("#service, #help, #wrapper", {
                    duration: 1.5, 
                    opacity: 0,
                    stagger: 1
                })
        });
        return () => ctx.revert();
    }, []);

    return(
        <div className={`Services ${theme === 'light' ? 'dark-mode' : 'light'}`} ref={servicesAnime} role='main'>
            <h3 id="service" className="Services__title">Services</h3>
            <p id="help" className="Services__help">I can help you with</p>

            {/* card's container */}
            <div id="wrapper" className="Services__wrapper">
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
