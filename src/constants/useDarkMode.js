import { useState, useEffect } from 'react';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('darkMode');
        if (storedTheme) {
            setDarkMode(storedTheme === 'true');
            updateScrollbarColors(storedTheme === 'true');
        }
        // else {
        //     const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        //     setDarkMode(prefersDarkMode);
        // }
    }, []);

    const updateScrollbarColors = (isDarkMode) => {
        const scrollbarTrackColor = isDarkMode ? '#000' : '#fff';
        document.documentElement.style.setProperty('--scrollbar-new-color', scrollbarTrackColor);
    };

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        updateScrollbarColors(newDarkMode);
        localStorage.setItem('darkMode', newDarkMode.toString());
    };

    return [darkMode, toggleDarkMode];
};

export default useDarkMode;