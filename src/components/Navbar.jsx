import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Button, Switch, Text, Link as NavLink } from "@nextui-org/react";
import { navLinks } from '../constants';
import { MoonIcon, SunIcon } from '../constants/icons';
import { motion } from 'framer-motion';
import { logo } from '../assets';

const NavBar = ({ darkMode, toggleDarkMode }) => {
    const [activeLink, setActiveLink] = useState('home');
    const currentPath = window.location.pathname;

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const updateDarkMode = () => {
        toggleDarkMode();
    };

    return (
        <Navbar isBordered shouldHideOnScroll variant={'floating'} css={{ background: 'transparent' }}>
            <Navbar.Toggle className='ssup:hidden' />
            <Navbar.Brand>
                <Link to="/">
                    <img src={logo} alt="contentcreator" className="w-[42px] h-[42px] mr-4 sm:mr-0" />
                </Link>
            </Navbar.Brand>
            <Navbar.Content
                className="border-[#00b7f0] flex-1 ml-6"
                variant={'underline-rounded'}
                hideIn="xs"
            >
                {navLinks.map((item, index) => (
                    <Navbar.Link
                        key={index}
                        isExternal={item.external}
                        target={item.external ? '_blank' : ''}
                        isActive={item.paths.includes(currentPath)}
                        onClick={() => handleLinkClick(item.paths[0])}>
                        <Link
                            to={item.paths[0]} className='flex items-center min-h-full'
                            target={item.external ? '_blank' : ''}>
                            <Text css={{ color: '$navText' }}>
                                {item.title}
                            </Text>
                        </Link>
                    </Navbar.Link>
                ))}
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Item>
                    <Switch
                        id="theme-switch"
                        checked={!darkMode}
                        onChange={updateDarkMode}
                        size="md"
                        iconOn={<SunIcon filled />}
                        iconOff={<MoonIcon filled />}
                    />
                </Navbar.Item>
                <Navbar.Item>
                    <motion.div
                        className='ss:hidden'
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 400, damping: 11 }}
                    >
                        <Button flat auto color="primary" href="#"
                            onClick={() => window.open('https://discord.gg/contentcreator')}>
                            <i className="bi bi-discord mr-4 text-[20px]"></i> Join Now!
                        </Button>
                    </motion.div>
                </Navbar.Item>
            </Navbar.Content>

            <Navbar.Collapse>
                {navLinks.map((item, index) => (
                    <Navbar.CollapseItem key={index}>
                        <NavLink
                            color="inherit"
                            css={{
                                color: '$navText',
                                minWidth: "100%",
                            }}
                            href={item.paths[0]}
                        >
                            {item.title}
                        </NavLink>
                    </Navbar.CollapseItem>
                ))}
                <Navbar.CollapseItem>
                    <Button flat auto color="primary" href="#" className='min-w-full mt-6'
                        onClick={() => window.open('https://discord.gg/contentcreator')}>
                        <i className="bi bi-discord mr-4 text-[20px]"></i> Join Now!
                    </Button>
                </Navbar.CollapseItem>
            </Navbar.Collapse>

        </Navbar >
    );
};

export default NavBar;