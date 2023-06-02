import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Breadcrumbs, Typography } from '@mui/material';
import { Loader } from "../components";

const BgGradientsAlt = lazy(() => import('../components/partials/BgGradientsAlt'));
const ContentWrapper = lazy(() => import('../components/partials/ContentWrapper'));
const Footer = lazy(() => import('../components/partials/Footer'));

const ExtGuide = ({ darkMode }) => {
    return (
        <Suspense fallback={<Loader />}>
            <ContentWrapper>
                <Helmet>
                    <title>ForTheContent Extension Guide - CreatorDiscord</title>
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

                <BgGradientsAlt />

                <div className={`flex flex-row justify-between items-center mt-7 mb-7 px-16 sm:px-6 xxlup:px-0 ss:justify-center`}>
                    <Breadcrumbs className='ss:hidden'>
                        <Link to="/" className="flex items-center">
                            <i className="bi bi-house-fill mr-2"></i>
                            <Typography variant="body2">CreatorDiscord</Typography>
                        </Link>
                        <Link to='/extguide' className={`flex items-center`}>
                            <Typography variant="body2">Extension Guide</Typography>
                        </Link>
                    </Breadcrumbs>
                </div>

                <section id="content" className={`post-body relative flex flex-col sm:flex-col p-12 xs:pb-5 ${darkMode ? 'bg-[#0c0c0c4f]' : 'bg-[#f9f9f9]'} rounded-[12px] shadow-resourceShadow`}>
                    <h3 className='text-[#3694ff]'>Queue</h3>
                    <ol>
                        <li>
                            Once you've signed in, you'll be taken to the dashboard. Here, you can see the Play Queue button and a queue of videos submitted by other users
                        </li>
                        <li>
                            To start earning tokens, click on the Play Queue button. A new browser window will open and the queue will start playing. You must watch the video for at least 10 minutes (or the full length if it's shorter than 10 mins) to earn 1 token
                        </li>
                        <li>
                            After you've earned 5 tokens, you can submit your own video to the queue. To do this, click the Submit Video (+) button on the dashboard and enter the YouTube URL to your video. Your video will be added to the queue for other users to watch and like
                        </li>
                        <li>
                            Keep watching videos and submitting your own to earn more tokens and increase your exposure
                        </li>
                    </ol>
                    <br />
                    <h3 className='text-[#3694ff]'>Settings</h3>
                    <ul>
                        <li>
                            <strong>Notifications</strong> - Get notified when your previous video expires and you're eligible to submit a new video
                        </li>
                        <li>
                            <strong>Discord</strong> - Receive notifications via Discord direct message
                        </li>
                        <li>
                            <strong>Browser</strong> - Receive notifications via the browser
                        </li>
                        <li>
                            <strong>Mute Queue Window</strong> - Choose whether the queue will play with or without sound
                        </li>
                        <li>
                            <strong>Play Videos For</strong> - Choose how long you want videos in the queue to play for before skipping to the next <i>(default is 10 minutes)</i>
                        </li>
                    </ul>
                    <br />
                    <h3 className='text-[#3694ff]'>Other Information</h3>
                    <ul>
                        <li>
                            You can only earn 5 tokens per day. The token cap resets every day at midnight GMT +11
                        </li>
                        <li>
                            Make sure you watch each video for the full required time. Skipping ahead or leaving the video early will not count towards your token balance
                        </li>
                    </ul>
                </section>

                <Footer />
            </ContentWrapper>
        </Suspense>
    );
};

export default ExtGuide;