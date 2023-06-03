import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Loader } from '../components';

const ContentWrapper = lazy(() => import('../components/partials/ContentWrapper'));
const Articles = lazy(() => import('../components/Articles'));
const Breadcrumb = lazy(() => import('../components/partials/Breadcrumb'));
const Footer = lazy(() => import('../components/partials/Footer'));

const Resources = ({ darkMode }) => {
    return (
        <Suspense fallback={<Loader darkMode={darkMode} />}>
            <ContentWrapper>

                <Helmet>
                    <title>Resources - CreatorDiscord</title>
                    <meta name="description" content="CreatorDiscord is a Discord server for content creators, developers, influencers, musicians, and more" />
                    <meta name="keywords" content="discord server for content creators, content creator discord server, discord server for small content creators, learning, resources, help, advice, knowledge, community, discord server, content creators, discord, content creator, " />
                    <meta name="twitter:title" content="Resources - CreatorDiscord" />
                    <meta name="twitter:description" content="CreatorDiscord is a Discord server for content creators, developers, influencers, musicians, and more" />
                    <meta name="twitter:image" content="/contentcreator_a_discord_server_for_content_creators.png" />
                    <meta property="og:title" content="Resources - CreatorDiscord" />
                    <meta property="og:url" content="https://creatordiscord.xyz/resources" />
                    <meta property="og:description" content="CreatorDiscord is a Discord server for content creators, developers, influencers, musicians, and more" />
                    <meta property="og:image" content="/contentcreator_a_discord_server_for_content_creators.png" />
                </Helmet>

                <Breadcrumb />

                <Articles darkMode={darkMode} />

                <Footer />

            </ContentWrapper >
        </Suspense>
    );
};

export default Resources;