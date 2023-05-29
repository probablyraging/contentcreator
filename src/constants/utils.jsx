import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
        fetch('https://forthecontentapi.xyz/api/membercount')
            .then(res => res.json())
            .then(data => {
                setMemberCount(data.message);
            });
    }, []);

    return [memberCount, setMemberCount];
}

export const useFetchResources = (slug) => {
    const [resources, setResources] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchResources = async () => {
            try {
                if (slug) {
                    const response = await fetch('https://forthecontentapi.xyz/api/resources', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ resource: slug }),
                    });
                    const data = await response.json();
                    if (data.error) {
                        return navigate('/error');
                    }
                    setResources(data.message);
                } else {
                    const response = await fetch('https://forthecontentapi.xyz/api/resources', {
                        method: 'POST'
                    });
                    const data = await response.json();
                    if (data.error) {
                        return console.log('Error fetching resources');
                    }
                    setResources(data.message);
                }
            } catch (error) {
                console.log('Error fetching resources:', error);
            }
        };

        fetchResources();
    }, [slug, navigate]);

    return resources;
};

export const useLoader = (delay) => {
    const [isLoading, setIsLoading] = useState(true);
    const randomNumber = Math.floor(Math.random() * (500 - 300 + 1)) + 300;

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, delay ? delay : randomNumber);

        return () => clearTimeout(timeout);
    }, []);

    return [isLoading, setIsLoading];
}

export const useRenderer = () => {
    const [isRendering, setIsRendering] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsRendering(false);
        }, 0);

        return () => clearTimeout(timeout);
    }, []);

    return [isRendering, setIsRendering];
}