import React from "react";
import './MainSass/index_main.css';
import { GoDotFill } from "react-icons/go";

export default function ScrollingText(){
    return(
        <div className="text__infinite">
            <div className="text__infinite__scroll">
                <div className="text__infinite__scroll__one">
                    &nbsp;SPENCER WAWAKU <span>&nbsp;< GoDotFill style={{ color: "#FF4500" }} />&nbsp;SPENCER WAWAKU</span><span>&nbsp;< GoDotFill style={{ color: "#FF4500" }} />&nbsp;SPENCER WAWAKU</span><span>&nbsp;< GoDotFill style={{ color: "#FF4500" }} />&nbsp;SPENCER WAWAKU</span><span>&nbsp;< GoDotFill style={{ color: "#FF4500" }} />&nbsp;SPENCER WAWAKU</span>
                </div>
                
            </div>
        </div>
    )
}

// &nbsp is used to create a space that will not break into a new line by word wrap.