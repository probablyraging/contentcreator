import React from 'react';
import { BgGradients, ContentWrapper } from "../components";
import { error404 } from '../assets';

const Error = ({ darkMode }) => {
    return (
        <ContentWrapper>
            <BgGradients />
            <div className='w-full h-full flex items-center justify-center'>
                <img src={error404} className='w-[800px]' />
            </div>
        </ContentWrapper>
    );
};

export default Error;