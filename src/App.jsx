import React, { lazy, Suspense } from 'react';
import { NextUIProvider, CssBaseline } from '@nextui-org/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing, Resources, Error, Article, LogIn, Create, ExtGuide, Privacy, HideYouTubeShorts } from './views'
import { Loader } from './components';
import { darkTheme, lightTheme } from './constants/themes';
import { useDarkMode } from './constants/utils';

const MainPage = lazy(() => import('./components/partials/MainPage'));
const NavBarWrapper = lazy(() => import('./components/partials/NavBarWrapper'));
const NavBar = lazy(() => import('./components/Navbar'));
const BackToTop = lazy(() => import('./components/partials/BackToTop'));

const App = () => {
    const [darkMode, toggleDarkMode] = useDarkMode();

    return (
        <BrowserRouter>
            <NextUIProvider theme={darkMode ? darkTheme : lightTheme}>
                <CssBaseline />

                <Suspense fallback={<Loader darkMode={darkMode} />}>
                    <MainPage>
                        <NavBarWrapper>
                            <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                        </NavBarWrapper>

                        <BackToTop darkMode={darkMode} />

                        <Routes>
                            <Route path="/" element={<Landing darkMode={darkMode} />} />
                            <Route path="/login" element={<LogIn darkMode={darkMode} />} />
                            <Route path="/extguide" element={<ExtGuide darkMode={darkMode} />} />
                            <Route path="/privacy" element={<Privacy darkMode={darkMode} />} />
                            <Route path="/resources" element={<Resources darkMode={darkMode} />} />
                            <Route path="/resources/create" element={<Create darkMode={darkMode} />} />
                            <Route path="/resources/:id" element={<Article darkMode={darkMode} />} />
                            <Route path="/whyamiseeingthis" element={<HideYouTubeShorts darkMode={darkMode} />} />
                            <Route path="/error" element={<Error darkMode={darkMode} />} />
                            <Route path="*" element={<Error darkMode={darkMode} />} />
                        </Routes>
                    </MainPage>
                </Suspense>

            </NextUIProvider>
        </BrowserRouter>
    )
};

export default App;