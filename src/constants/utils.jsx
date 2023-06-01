import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
        axios.get('https://creatordiscord.xyz/api/membercount')
            .then(response => {
                setMemberCount(response.data.message);
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
                    axios.post('https://creatordiscord.xyz/api/resources', { resource: slug })
                        .then(response => {
                            if (response.data.error) return navigate('/error');
                            setResources(response.data.message);
                        });
                } else {
                    axios.post('https://creatordiscord.xyz/api/resources')
                        .then(response => {
                            if (response.data.error) return console.log('Error fetching resources');;
                            setResources(response.data.message);
                        });
                }
            } catch (error) {
                console.log('Error fetching resources:', error);
            }
        };

        fetchResources();
    }, [slug, navigate]);

    return resources;
};

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