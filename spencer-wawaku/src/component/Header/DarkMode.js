import { createContext, useContext, useState, useEffect } from "react";
// step 1: we import the createContext from react

// The function argument is a default value we initialize it with undefined
const ThemeContext = createContext(undefined);

// step 2 : we create the Provider component 
// Create the ThemeProvider component to wrap your application
export const ThemeProvider = ({ children }) => {
    // State to manage the theme
    // const [theme, setTheme] = useState('light');

    const [theme, setTheme] = useState(()=>{
        const initialTheme = localStorage.getItem('theme')
        return initialTheme ? initialTheme : 'light';
    });

    // 1 Function to toggle the theme
    // const toggleTheme = () => {
    //     setTheme(theme === 'light' ? 'dark' : 'light');
    // };

    // 2 function
    function getThemeFromLocalStorage(){
        const savedTheme = localStorage.getItem('theme');
        if(savedTheme){
            setTheme(savedTheme)
        }
    }

    // 3 new functions theme
    function toggleTheme(){
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'light' ? 'dark-mode' : 'light';
            localStorage.setItem('theme', newTheme);
            return newTheme;
        });
    }

    //4. we use the useEffect Hook
    useEffect(()=>{
        getThemeFromLocalStorage()
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
        </ThemeContext.Provider>
    );
};

// we create the useCustom Hook that Wrap the useContext Hook 
export const useTheme = () => useContext(ThemeContext)

// step 3: Consume the ThemeContext in the places where the theme has to be displayed - we go to the index.js and use the ThemeProvider Component and wrap the whole App where is needed