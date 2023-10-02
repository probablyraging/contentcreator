import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '../../constants/icons';

const BackToTopButton = ({ darkMode }) => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.pageYOffset > 400);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleButtonClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <motion.div
                onClick={handleButtonClick}
                className={`flex items-center fixed bottom-4 right-4 rounded-md py-2 px-4 z-10 cursor-pointer
                ${showButton ?
                        'flex' :
                        'hidden'}
                ${darkMode ?
                        'bg-[#121212b5] text-white border border-solid border-[#ffffff26] shadow-lg hover:bg-[#0e0e0e]' :
                        'bg-[#ffffffcc] text-black border border-solid border-[#00000026] shadow-lg hover:brightness-95'} `}
                initial={{ opacity: 0 }}
                animate={{ opacity: showButton ? 1 : 0 }}
                transition={{ duration: 0.1 }}
            >
                <ChevronDownIcon fill="currentColor" size="18px" className="rotate-180" />
            </motion.div>
        </>
    );
};

export default BackToTopButton;