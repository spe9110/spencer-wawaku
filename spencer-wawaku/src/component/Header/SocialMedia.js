import React, { useState, useEffect } from 'react';
import socials from './Data/IconsData';
import './HeaderSass/index_header.css';

export default function SocialMedia() {
    // Store the social media icons
    const socialMediaIcons = socials;

    // Initialize the show title to false
    const [showTitle, setShowTitle] = useState(true);

    // useEffect to handle the social media icons
    useEffect(()=>{
        const handleResizeTitle = () =>{
            if(window.innerWidth < 768){
                setShowTitle(false);
            } else{
                setShowTitle(true);
            }
        }
        // Call handleResize initially to set the initial state based on the window width
        // handleResizeTitle();

        window.addEventListener("resize", handleResizeTitle);
        return () => {
            window.removeEventListener("resize", handleResizeTitle);
        };
        
    },[])

    return (
        <div className='social-media'>
            <ul>
                {socialMediaIcons.map(socialMedia => (
                    <li key={socialMedia.id}>
                        <a
                            href={socialMedia.url}
                            className={`${socialMedia.title}-icon`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={socialMedia.title}
                        >
                            <span>{socialMedia.icon}</span>
                            {showTitle && <span>{socialMedia.title}</span>}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}