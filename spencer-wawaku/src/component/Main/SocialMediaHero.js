import React from "react";
import socials from "../Header/Data/IconsData";
import './MainSass/index_main.css';

export default function SocialMediaHero(){
    return(
        <div>
            <ul className="Social__Media">
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