import React from 'react';
import { Spacer } from '@nextui-org/react';
import { ContentWrapper, Platforms, CallToAction, Footer, Stats, Testimonials, Hero } from "../components";
import { Helmet } from 'react-helmet';

const Landing = ({ darkMode }) => (
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
);

export default Landing;