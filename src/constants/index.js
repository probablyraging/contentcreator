import { people01, people02, people03, twitter, instagram, youtube, twitch, tiktok } from "../assets";

export const navLinks = [
    {
        id: "home",
        title: "Home",
        path: "/",
    },
    {
        id: "resources",
        title: "Resources",
        path: "/resources",
    },
    {
        id: "extension",
        title: "Chrome Extension",
        path: "https://chrome.google.com/webstore/detail/forthecontent/kbnghoajbjomkegkhiiafelmmecnajhd",
        external: true,
    },
];

export const feedback = [
    {
        id: "feedback-1",
        content: "I love this server, I've gotten help with my YouTube channel, I love the games, even having a general conversation is fun.",
        name: "Lord Tabby#0333",
        title: "Content Creator",
        img: people01,
    },
    {
        id: "feedback-2",
        content: "Overall great server for creators lots of helpful information and resources as well as services.",
        name: "invaderzenny#9362",
        title: "Content Creator",
        img: people02,
    },
    {
        id: "feedback-3",
        content: "This server is a really rare kind of server. It actually helps content creators find ways of improving! I'd definitely recommend it!",
        name: "Sparrow#2136",
        title: "Content Creator",
        img: people03,
    },
];

export const stats = [
    {
        id: "stats-1",
        title: "Discord Members",
        value: "12K+",
    },
    {
        id: "stats-2",
        title: "Help & Advice Threads",
        value: "230+",
    },
    {
        id: "stats-3",
        title: "Useful Resources",
        value: "8",
    },
];

export const platforms = [
    {
        id: "youtube_logo",
        logo: youtube,
    },
    {
        id: "twitch_logo",
        logo: twitch,
    },
    {
        id: "tiktok_logo",
        logo: tiktok,
    },
    {
        id: "twitter_logo",
        logo: twitter,
    },
    {
        id: "instagram_logo",
        logo: instagram,
    },
];