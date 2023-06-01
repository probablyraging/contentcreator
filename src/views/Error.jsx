import React from 'react';
import { Helmet } from 'react-helmet';
import { BgGradients, ContentWrapper } from "../components";
import { error404 } from '../assets';

const Error = () => {
    return (
        <ContentWrapper>

            <Helmet>
                <meta name="twitter:title" content="404 - CreatorDiscord" />
                <meta property="og:title" content="404 - CreatorDiscord" />
                <meta property="og:url" content="https://creatordiscord.xyz/error" />
                <title>404 - CreatorDiscord</title>
            </Helmet>

            <BgGradients />

            <div className='w-full h-full flex items-center justify-center'>
                <img src={error404} className='w-[800px]' />
            </div>

        </ContentWrapper>
    );
};

export default Error;