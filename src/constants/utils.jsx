import React, { useState, useEffect } from 'react';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('darkMode');
        if (storedTheme) {
            setDarkMode(storedTheme === 'true');
            updateScrollbarColors(storedTheme === 'true');
        } else {
            const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setDarkMode(prefersDarkMode);
        }
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

export const fetchMemberCount = () => {
    const [memberCount, setMemberCount] = useState(null);

    useEffect(() => {
        fetch('http://54.79.93.12/api/membercount')
            .then(res => res.json())
            .then(data => {
                setMemberCount(data.message)
            });
    }, []);

    return [memberCount, setMemberCount];
}