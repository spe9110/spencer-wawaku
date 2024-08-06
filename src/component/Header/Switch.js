import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { useTheme } from './DarkMode';
import './HeaderSass/index_header.css';


const Switch = () =>{
    const {theme, toggleTheme} = useTheme();


    function handleTheme(){
        // setToggleIcon(prevToggleIcon => !prevToggleIcon)
        toggleTheme(theme === 'light' ? 'dark-mode': 'light')
    }

    return( 
        //  theme && (<button type='button' onClick={handleToggleIcon}>{toggleIcon ? <IoSunny /> : <FaMoon />}</button>)
        <button onClick={handleTheme} className="Switch-btn">
            {theme === 'light' ? <IoSunny /> : <FaMoon />}
        </button>
    )
}
export default Switch;