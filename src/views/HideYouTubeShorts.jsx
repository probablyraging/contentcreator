import React, { lazy, Suspense } from 'react';
import { Text } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Breadcrumbs, Typography } from '@mui/material';
import { Loader } from "../components";

const BgGradientsAlt = lazy(() => import('../components/partials/BgGradientsAlt'));
const ContentWrapper = lazy(() => import('../components/partials/ContentWrapper'));
const Footer = lazy(() => import('../components/partials/Footer'));

const HideYouTubeShorts = ({ darkMode }) => {
    return (
        <Suspense fallback={<Loader darkMode={darkMode} />}>
            <ContentWrapper>
                <Helmet>
                    <title>Hide YouTube Shorts - CreatorDiscord</title>
                    <meta name="description" content="CreatorDiscord is a Discord server for content creators, developers, influencers, musicians, and more" />
                    <meta name="keywords" content="content creator, community discord, a content creator, as a content creator, be a content creator, community creators, content creator and influencer, content creator community, content creator discord, content creator discord server, discord server for content creators, content creator discord server, discord server for small content creators, discord server, content creators, discord, content creator" />
                    <meta name="twitter:title" content="Hide YouTube Shorts - CreatorDiscord" />
                    <meta name="twitter:description" content="CreatorDiscord is a Discord server for content creators, developers, influencers, musicians, and more" />
                    <meta name="twitter:image" content="/contentcreator_a_discord_server_for_content_creators.png" />
                    <meta property="og:title" content="Hide YouTube Shorts - CreatorDiscord" />
                    <meta property="og:url" content="https://creatordiscord.xyz/" />
                    <meta property="og:description" content="CreatorDiscord is a Discord server for content creators, developers, influencers, musicians, and more" />
                    <meta property="og:image" content="/contentcreator_a_discord_server_for_content_creators.png" />
                </Helmet>

                <BgGradientsAlt />

                <div className={`flex flex-row justify-between items-center mt-7 mb-7 px-16 sm:px-6 xxlup:px-0 ss:justify-center`}>
                    <Breadcrumbs className='ss:hidden'>
                        <Link to="/" className="flex items-center">
                            <i className="bi bi-house-fill mr-2"></i>
                            <Typography variant="body2">CreatorDiscord</Typography>
                        </Link>
                        <Link to='/extguide' className={`flex items-center`}>
                            <Typography variant="body2">Why Am I Seeing This</Typography>
                        </Link>
                    </Breadcrumbs>
                </div>

                <section id="content" className={`post-body relative flex flex-col sm:flex-col p-12 xs:pb-5 ${darkMode ? 'bg-[#0c0c0c4f]' : 'bg-[#f9f9f9]'} rounded-[12px] shadow-resourceShadow`}>
                    <h3 className='text-[#3694ff]'>Why Am I Seeing This?</h3>
                    <Text className='mb-6'>
                        TLDR; YouTube made UI changes to the subscriptions page, meaning we can no longer fill the gap created when removing Shorts videos from the page. You can disable the "Shorts Removed By HYS" image in the Miscellaneous tab of the extension.
                    </Text>
                    <Text className='mb-6'>
                        Unfortunately, YouTube has made some UI and layout changes to the subscriptions page, which means that when an element such as a Shorts video is removed from the page, it is not automatically filled with another video. This results in a significant empty space on the page.
                    </Text>
                    <Text className='mb-6'>
                        I considered leaving the empty space as is, but it didn't look right. So, I thought it would be a nicer touch to fill it with a placeholder image. I acknowledge that it may not be the ideal solution, and I assure you that I have spent hours trying to find a better alternative. However, at the moment, I don't believe a better solution is possible. If you prefer to see the empty space instead of the placeholder image, you can disable it in the Miscellaneous tab of the extension.
                    </Text>
                    <Text className='mb-6'>
                        Please note that these new UI changes are currently being tested with a small group of users and may not be permanent.
                    </Text>
                    <Text>
                        Thank you for your understanding!
                    </Text>
                </section>

                <Footer />
            </ContentWrapper>
        </Suspense>
    );
};

export default HideYouTubeShorts;