import React from "react";
import './MainSass/index_main.css';
import { GoDotFill } from "react-icons/go";
import { useTheme } from '../Header/DarkMode';

export default function ScrollingText(){
    const { theme } = useTheme();
    return(
        <div className={`text__infinite ${theme === 'light' ? 'dark-mode' : 'light'}`}>
            <div className="text__infinite__scroll">
                <div className="text__infinite__scroll__one">
                    <div>&nbsp;SPENCER WAWAKU <span>&nbsp;< GoDotFill style={{ color: "#FF4500", fontSize: 20 }} />&nbsp;SPENCER WAWAKU</span>&nbsp;< GoDotFill style={{ color: "#FF4500", fontSize: 20 }} />&nbsp;SPENCER WAWAKU <span>&nbsp;< GoDotFill style={{ color: "#FF4500", fontSize: 20 }} />&nbsp;SPENCER WAWAKU</span>&nbsp;< GoDotFill style={{ color: "#FF4500", fontSize: 20 }} />&nbsp;SPENCER WAWAKU <span>&nbsp;< GoDotFill style={{ color: "#FF4500", fontSize: 20 }} />&nbsp;SPENCER WAWAKU</span>&nbsp;< GoDotFill style={{ color: "#FF4500", fontSize: 20 }} />&nbsp;SPENCER WAWAKU <span>&nbsp;< GoDotFill style={{ color: "#FF4500", fontSize: 20 }} />&nbsp;SPENCER WAWAKU</span>&nbsp;< GoDotFill style={{ color: "#FF4500", fontSize: 20 }} /></div>
                    <div>&nbsp;SPENCER WAWAKU <span>&nbsp;< GoDotFill style={{ color: "#FF4500", fontSize: 20 }} />&nbsp;SPENCER WAWAKU</span>&nbsp;< GoDotFill style={{ color: "#FF4500", fontSize: 20 }} />&nbsp;SPENCER WAWAKU <span>&nbsp;< GoDotFill style={{ color: "#FF4500", fontSize: 20 }} />&nbsp;SPENCER WAWAKU</span>&nbsp;< GoDotFill style={{ color: "#FF4500", fontSize: 20 }} />&nbsp;SPENCER WAWAKU <span>&nbsp;< GoDotFill style={{ color: "#FF4500", fontSize: 20 }} />&nbsp;SPENCER WAWAKU</span>&nbsp;< GoDotFill style={{ color: "#FF4500", fontSize: 20 }} />&nbsp;SPENCER WAWAKU <span>&nbsp;< GoDotFill style={{ color: "#FF4500", fontSize: 20 }} />&nbsp;SPENCER WAWAKU</span>&nbsp;< GoDotFill style={{ color: "#FF4500", fontSize: 20 }} /></div>
                    <div>&nbsp;SPENCER WAWAKU <span>&nbsp;< GoDotFill style={{ color: "#FF4500", fontSize: 20 }} />&nbsp;SPENCER WAWAKU</span>&nbsp;< GoDotFill style={{ color: "#FF4500", fontSize: 20 }} />&nbsp;SPENCER WAWAKU <span>&nbsp;< GoDotFill style={{ color: "#FF4500", fontSize: 20 }} />&nbsp;SPENCER WAWAKU</span>&nbsp;< GoDotFill style={{ color: "#FF4500", fontSize: 20 }} />&nbsp;SPENCER WAWAKU <span>&nbsp;< GoDotFill style={{ color: "#FF4500", fontSize: 20 }} />&nbsp;SPENCER WAWAKU</span>&nbsp;< GoDotFill style={{ color: "#FF4500", fontSize: 20 }} />&nbsp;SPENCER WAWAKU <span>&nbsp;< GoDotFill style={{ color: "#FF4500", fontSize: 20 }} />&nbsp;SPENCER WAWAKU</span>&nbsp;< GoDotFill style={{ color: "#FF4500", fontSize: 20 }} /></div>
                    <div>&nbsp;SPENCER WAWAKU <span>&nbsp;< GoDotFill style={{ color: "#FF4500", fontSize: 20 }} />&nbsp;SPENCER WAWAKU</span>&nbsp;< GoDotFill style={{ color: "#FF4500", fontSize: 20 }} />&nbsp;SPENCER WAWAKU <span>&nbsp;< GoDotFill style={{ color: "#FF4500", fontSize: 20 }} />&nbsp;SPENCER WAWAKU</span>&nbsp;< GoDotFill style={{ color: "#FF4500", fontSize: 20 }} />&nbsp;SPENCER WAWAKU <span>&nbsp;< GoDotFill style={{ color: "#FF4500", fontSize: 20 }} />&nbsp;SPENCER WAWAKU</span>&nbsp;< GoDotFill style={{ color: "#FF4500", fontSize: 20 }} />&nbsp;SPENCER WAWAKU <span>&nbsp;< GoDotFill style={{ color: "#FF4500", fontSize: 20 }} />&nbsp;SPENCER WAWAKU</span>&nbsp;< GoDotFill style={{ color: "#FF4500", fontSize: 20 }} /></div>
                </div>
            </div>
        </div>
    )
}

// &nbsp is used to create a space that will not break into a new line by word wrap.
// &nbsp;SPENCER WAWAKU is the first element
// <span>&nbsp;< GoDotFill style={{ color: "#FF4500", fontSize: 20 }} />&nbsp;SPENCER WAWAKU</span> it's the second element
// &nbsp;< GoDotFill style={{ color: "#FF4500", fontSize: 20 }} />&nbsp;SPENCER WAWAKU  it's the third element