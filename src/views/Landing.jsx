import React, { lazy, Suspense } from 'react';
import { Spacer } from '@nextui-org/react';
import { Helmet } from 'react-helmet';
import { Loader } from '../components';

const ContentWrapper = lazy(() => import('../components/partials/ContentWrapper'));
const Platforms = lazy(() => import('../components/Platforms'));
const CallToAction = lazy(() => import('../components/CallToAction'));
const Footer = lazy(() => import('../components/Footer'));
const Stats = lazy(() => import('../components/Stats'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const Hero = lazy(() => import('../components/Hero'));

const Landing = ({ darkMode }) => (
    <Suspense fallback={<Loader />}>
        <ContentWrapper>
            <Helmet>
                <meta name="description" content="CreatorDiscord is a Discord server for content creators, developers, influencers, musicians, and more" />
                <meta name="keywords" content="content creator, community discord, a content creator, as a content creator, be a content creator, community creators, content creator and influencer, content creator community, content creator discord, content creator discord server, discord server for content creators, content creator discord server, discord server for small content creators, discord server, content creators, discord, content creator" />
                <meta name="twitter:title" content="CreatorDiscord - A Discord server for content creators" />
                <meta name="twitter:description" content="CreatorDiscord is a Discord server for content creators, developers, influencers, musicians, and more" />
                <meta name="twitter:image" content="/contentcreator_a_discord_server_for_content_creators.png" />
                <meta property="og:title" content="CreatorDiscord - A Discord server for content creators" />
                <meta property="og:url" content="https://creatordiscord.xyz/" />
                <meta property="og:description" content="CreatorDiscord is a Discord server for content creators, developers, influencers, musicians, and more" />
                <meta property="og:image" content="/contentcreator_a_discord_server_for_content_creators.png" />
            </Helmet>
            <Hero />
            <Stats />
            <Spacer y={5} />
            <Testimonials darkMode={darkMode} />
            <Spacer y={5} />
            <CallToAction />
            <Spacer y={5} />
            <Platforms />
            <Footer />
        </ContentWrapper>
    </Suspense>
);

export default Landing;