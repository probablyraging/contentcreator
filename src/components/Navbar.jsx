import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Button, Switch, Text } from "@nextui-org/react";
import { navLinks } from '../constants';
import { MoonIcon, SunIcon } from '../constants/icons';
import { motion } from 'framer-motion';
import { logo } from '../assets';

const NavBar = ({ darkMode, toggleDarkMode }) => {
    const [activeLink, setActiveLink] = useState('home');
    const currentPath = window.location.hash.replace('#', '');

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
                {navLinks.map((item, index) => (
                    <Navbar.Link
                        key={index}
                        isActive={item.paths.includes(currentPath)} onClick={() => handleLinkClick(item.paths[0].replace('#', ''))}>
                        <Link to={item.paths[0].replace('#', '')} className='flex items-center min-h-full'>
                            <Text css={{ color: '$navText' }}>
                                {item.title}
                            </Text>
                        </Link>
                    </Navbar.Link>
                ))}
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
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 11 }}
                >
                    <Navbar.Item>
                        <Button flat auto color="primary" href="#"
                            onClick={() => window.open('https://discord.gg/contentcreator')}>
                            Join Now!
                        </Button>
                    </Navbar.Item>
                </motion.div>
            </Navbar.Content>
        </Navbar >
    );
};

export default NavBar;