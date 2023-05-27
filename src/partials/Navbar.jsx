import { useState } from 'react';
import { Navbar, Button, Switch } from "@nextui-org/react";
import { MoonIcon, SunIcon } from '../constants/icons';
import { logo } from '../assets'

const NavBar = ({ darkMode, toggleDarkMode }) => {
    const [activeLink, setActiveLink] = useState('home');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const updateDarkMode = () => {
        toggleDarkMode();
    };

    return (
        <Navbar isBordered shouldHideOnScroll variant={'floating'} css={{ background: 'transparent' }}>
            <Navbar.Brand>
                <a href="/">
                    <img src={logo} alt="contentcreator" className="w-[42px] h-[42px] mr-4" />
                </a>
            </Navbar.Brand>
            <Navbar.Content
                className="border-[#00b7f0] flex-1 ml-6"
                variant={'underline-rounded'}
                hideIn="xs"
            >
                <Navbar.Link isActive={activeLink === 'home'} onClick={() => handleLinkClick('home')} href="#home">
                    Home
                </Navbar.Link>
                <Navbar.Link isActive={activeLink === 'testimonials'} onClick={() => handleLinkClick('testimonials')} href="#testimonials">
                    Testimonials
                </Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
                <Switch
                    id="theme-switch"
                    checked={!darkMode}
                    onChange={updateDarkMode}
                    size="md"
                    iconOn={<SunIcon filled />}
                    iconOff={<MoonIcon filled />}
                />
                <Navbar.Item>
                    <Button flat auto color="primary" href="#">
                        Join Now!
                    </Button>
                </Navbar.Item>
            </Navbar.Content>
        </Navbar>
    );
};

export default NavBar;