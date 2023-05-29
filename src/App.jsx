import React from 'react';
import { NextUIProvider, CssBaseline } from '@nextui-org/react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Landing, Resources, Error, Article } from './views'
import { MainPage, NavBarWrapper, NavBar, Loader, BackToTop } from './components';
import { darkTheme, lightTheme } from './constants/themes';
import { useDarkMode } from './constants/utils';

const App = () => {
    const [darkMode, toggleDarkMode] = useDarkMode();

    return (
        <HashRouter>
            <NextUIProvider theme={darkMode ? darkTheme : lightTheme}>
                <CssBaseline />

                <Loader darkMode={darkMode} />

                <MainPage>
                    <NavBarWrapper>
                        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                    </NavBarWrapper>

                    <BackToTop darkMode={darkMode} />

                    <Routes>
                        <Route path="/" element={<Landing darkMode={darkMode} />} />
                        <Route path="/resources" element={<Resources darkMode={darkMode} />} />
                        <Route path="/resources/:id" element={<Article darkMode={darkMode} />} />
                        <Route path="/error" element={<Error darkMode={darkMode} />} />
                        <Route path="*" element={<Error darkMode={darkMode} />} />
                    </Routes>

                </MainPage>

            </NextUIProvider>
        </HashRouter>
    )
};

export default App;