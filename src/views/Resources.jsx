import React from 'react';
import { Helmet } from 'react-helmet';
import { ContentWrapper, Articles, Breadcrumb, Footer } from '../components';

const Resources = ({ darkMode }) => {
    return (
        <ContentWrapper>

            <Helmet>
                <meta name="keywords" content="discord server for content creators, content creator discord server, discord server for small content creators, learning, resources, help, advice, knowledge, community, discord server, content creators, discord, content creator, " />
                <meta name="twitter:title" content="ContentCreator - Resources" />
                <meta property="og:title" content="ContentCreator - Resources" />
                <meta property="og:url" content="https://creatordiscord.xyz/resources" />
                <title>ContentCreator - Resources</title>
            </Helmet>

            <Breadcrumb />

            <Articles darkMode={darkMode} />

            <Footer />

        </ContentWrapper >
    );
};

export default Resources;