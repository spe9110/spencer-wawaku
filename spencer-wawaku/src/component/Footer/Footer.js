import { useState, useEffect } from "react";
import { FaAngleUp, FaInstagram, FaGithub, FaXTwitter, FaFacebook, FaTiktok, FaLinkedin, FaYoutube } from "react-icons/fa6";
import './FooterSass/index_footer.css';

export default function Footer() {
    const [showBackToTop, setShowBackToTop] = useState(false);
    const currentYear = new Date().getFullYear();
    const handleBackToTop = () => {
        window.scrollTo({ 
            top: 0, 
            behavior: 'smooth' 
        });
    }

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setShowBackToTop(true);
        } else {
            setShowBackToTop(false);
        }
    }

    // Add scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="footer">
            <div>
                <h5>Let's get in touch</h5>
                <hr/>
                <div className="footer__content">
                    <ul className="footer__content__social__media">
                        <a 
                            href="https://www.instagram.com/code_spencer2/"
                            className="instagram-icon"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="instagram"
                            >
                            <FaInstagram />
                        </a>

                        <a 
                            href="https://github.com/spe9110"
                            className="github-icon"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="github"
                            >
                            <FaGithub />
                        </a>

                        <a 
                            href="https://x.com/SpencerNsitu/with_replies"
                            className="twitter-icon"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="twitter"
                            >
                            <FaXTwitter />
                        </a>
                        <a 
                            href="https://www.facebook.com/profile.php?id=61554155662615"
                            className="facebook-icon"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="facebook"
                            >
                            <FaFacebook />
                        </a>

                        <a 
                            href="https://www.tiktok.com/@dev_spe?_t=8nX6AACwZ1c&_r=1"
                            className="tiktok-icon"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="tiktok"
                            >
                            <FaTiktok />
                        </a>

                        <a 
                            href="https://www.linkedin.com/in/spencer-nsitu-zola-971b75136/"
                            className="linkedin-icon"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="linkedin"
                            >
                            <FaLinkedin />
                        </a>

                        <a 
                            href="https://www.youtube.com/watch?v=XqsZX9SA6yQ"
                            className="youtube-icon"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="youtube"
                            >
                            <FaYoutube />
                        </a>
                    </ul>
                    <p className="footer__content__copyright">&copy; {currentYear}  Spencer wawaku. All rights reserved.</p>
                </div>
            </div>

            {showBackToTop && (
                <button className="backTop" onClick={handleBackToTop}>
                    <FaAngleUp />
                </button>
            )}
        </div>
    )
}

/*
 replaced Link with the standard HTML <a> tag for each icon.
The href attribute contains the external link you want to navigate to.
The target="_blank" attribute opens the link in a new tab.
The rel="noopener noreferrer" attribute is a security best practice when using target="_blank" to prevent potential security vulnerabilities.

IMPORTANT:
It looks like you are using the Link component from react-router-dom to create links. However, for external links that navigate to external websites or platforms, you should use the regular HTML anchor (<a>) tag instead of the Link component. 

INCORRECT WAY:
==============
<Link 
                        to={{pathname: "https://www.youtube.com/@codewithspencer-fd7ib"}} 
                        className="youtube-icon"
                        target="_blank"
                        aria-label="youtube"
                        >
                        <FaYoutube />
                    </Link>

CORRECT WAY
============
<a 
                        href="https://www.youtube.com/@codewithspencer-fd7ib"
                        className="youtube-icon"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="youtube"
                        >
                        <FaYoutube />
                    </a>
*/ 