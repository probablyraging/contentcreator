import React, { useState, useEffect } from 'react';
import { NextUIProvider, createTheme, Spacer, CssBaseline, Loading } from '@nextui-org/react';
import styles from "./style";
import { Platforms, CallToAction, Footer, NavBar, Stats, Testimonials, Hero } from "./components";
import { useDarkMode } from './constants/utils';

const darkTheme = createTheme({
    type: 'dark',
    theme: {
        colors: {
            black: '#0a0a0a',
            gradient: 'linear-gradient(112deg, #3694ff -63.59%, #adc8e7 -20.3%, var(--nextui-colors-blue600) 70.46%);',
            primary: '#3694ff',
            primaryLight: '#1d68bd',
            primaryLightHover: '#3694ff',
            primaryLightContrast: '$white'
        },
        styles: {
        }
    }
});

const lightTheme = createTheme({
    type: 'light',
    theme: {
        colors: {
            gradient: 'linear-gradient(112deg, #3694ff -63.59%, #adc8e7 -20.3%, var(--nextui-colors-blue600) 70.46%);',
            primary: '#3694ff',
            primaryLight: '#1d68bd',
            primaryLightHover: '#3694ff',
            primaryLightContrast: '$white'
        },
        styles: {
        }
    }
});

const App = () => {
    const [darkMode, toggleDarkMode] = useDarkMode();
    const [isLoading, setIsLoading] = useState(true);
    const [isRendering, setIsRendering] = useState(true);

    const randomNumber = Math.floor(Math.random() * (500 - 300 + 1)) + 300;

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, randomNumber);

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsRendering(false);
        }, 0);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <NextUIProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            {isLoading && (
                <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50 ${darkMode ? 'bg-black' : 'bg-white'}`}>
                    <Loading size='lg' color="secondary" type="points-opacity" />
                </div>
            )}

            {!isRendering && (
                <div className="w-full overflow-hidden">
                    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                        <div className={`${styles.boxWidth}`}>
                            <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                        </div>
                    </div>

                    <div className={`${styles.flexStart}`}>
                        <div className={`${styles.boxWidth}`}>
                            <Hero />
                        </div>
                    </div>

                    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                        <div className={`${styles.boxWidth}`}>
                            <Stats />
                            <Spacer y={5} />
                            <Testimonials />
                            <Spacer y={5} />
                            <CallToAction />
                            <Spacer y={5} />
                            <Platforms />
                            <Footer />
                        </div>
                    </div>
                </div>
            )}
        </NextUIProvider>
    )
};

export default App;