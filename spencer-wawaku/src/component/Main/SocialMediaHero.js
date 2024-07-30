import React from 'react';
import { useRef, useLayoutEffect } from "react";
import socials from "../Header/Data/IconsData";
import './MainSass/index_main.css';
import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';

// gsap.registerPlugin(useGSAP);

export default function SocialMediaHero(){
    const secondAnime = useRef();
    const tl = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            tl.current = gsap.timeline()
            .from("#socialMedia", {
                duration: 3, 
                opacity: 0, 
                x: "50%", 
                delay: 3, 
                stagger: 1.5
            })
        });
        return () => ctx.revert();
    }, []);

    return(
        <div ref={secondAnime} className="Social__Media" id='socialMedia'>
            <ul>
                {socials.map(social => (
                    <li key={social.id}>
                        <a
                            href={social.url}
                            className={`${social.title}-icon`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.title}
                        >
                            <span>{social.icon}</span>
                            <span>{social.title}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}