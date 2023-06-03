import React, { useState, useEffect } from 'react';
import { Text, Button, Loading } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import { BgGradients } from '../components';
import slugify from 'slugify';
import styles from "../style";
import axios from 'axios';

const Articles = ({ darkMode }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [resources, setResources] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [resultCount, setResultCount] = useState(1);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const startIndex = (currentPage - 1) * 6;
    const endIndex = startIndex + 6;

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.post('https://creatordiscord.xyz/api/resources', { page: 1 });
            setResources(response.data.message);
            setResultCount(response.data.message.length);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    const handleLoadMore = async () => {
        setIsLoadingMore(true);
        const nextPage = currentPage + 1;
        const response = await axios.post('https://creatordiscord.xyz/api/resources', { page: nextPage });
        const newResources = response.data.message;
        setResultCount(response.data.message.length);
        setResources((prevResources) => [...prevResources, ...newResources]);
        setCurrentPage(nextPage);
        setIsLoadingMore(false);
    };

    const transformTitleToId = (title) => {
        return slugify(title, { lower: true, strict: true });
    };

    if (isLoading) {
        return (
            <section id="content" className={`flex flex-row sm:flex-col pb-16 xs:pb-5`}>
                <div className={`flex-1 ${styles.flexStart} flex-col px-16 sm:px-6 xxlup:px-0 sm:items-center`}>
                    {/* <BgGradients /> */}
                    <div className='flex justify-center flex-wrap gap-10'>
                        {Array.from({ length: 6 }, (_, index) => (
                            <div
                                key={index}
                                className={`${darkMode ? 'bg-[#16181A] drop-shadow-cardShadowSmDark' : 'bg-[#fff] drop-shadow-cardShadowSm'} relative flex flex-col min-h-[300px] max-w-[400px] md:max-w-full md:min-h-[250px] rounded-2xl border-none card-anim min-w-[400px] md:min-w-full`}
                            >
                                <div className={`h-36 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-2xl rounded-b-none`}></div>
                                <div className="p-4">
                                    <div
                                        style={{ width: Math.floor(Math.random() * (100 - 50 + 1)) + 50 + '%' }}
                                        className={`h-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded mb-6 animate-pulse`}>
                                    </div>
                                    <div
                                        style={{ width: Math.floor(Math.random() * (80 - 70 + 1)) + 70 + '%' }}
                                        className={`h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded mt-4 animate-pulse`}>
                                    </div>
                                    <div
                                        style={{ width: Math.floor(Math.random() * (60 - 40 + 1)) + 40 + '%' }}
                                        className={`h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded mt-4 animate-pulse`}>
                                    </div>
                                    <div
                                        style={{ width: Math.floor(Math.random() * (90 - 60 + 1)) + 60 + '%' }}
                                        className={`h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded mt-4 animate-pulse`}>
                                    </div>
                                    <div
                                        style={{ width: Math.floor(Math.random() * (80 - 30 + 1)) + 30 + '%' }}
                                        className={`h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded mt-4 animate-pulse`}>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="content" className={`flex flex-row sm:flex-col pb-16 xs:pb-5`}>
            <div className={`flex-1 ${styles.flexStart} flex-col px-16 sm:px-6 xxlup:px-0 sm:items-center`}>
                {/* <BgGradients /> */}
                <div className='flex justify-center flex-wrap gap-10'>
                    {resources.slice(0, endIndex).map((item, index) => (
                        <Link key={index} to={transformTitleToId(item.title)}>
                            <div className={`${darkMode ? 'bg-[#16181A] drop-shadow-cardShadowSmDark hover:drop-shadow-cardShadowLgDark' : 'bg-[#fff] drop-shadow-cardShadowSm hover:drop-shadow-cardShadowLg'} relative flex flex-col min-w-0 min-h-[300px] max-w-[400px] md:max-w-full md:min-h-[250px] rounded-2xl border-none hover:translate-y-[-2px] card-anim`}>
                                <img src={item.thumb} className="h-36 object-cover rounded-2xl rounded-b-none" width="960" height="540" alt={item.title} />
                                <div className="p-4">
                                    <Text>
                                        <Link to={transformTitleToId(item.title)} className='font-semibold'>
                                            {item.title}
                                        </Link>
                                    </Text>
                                    <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                                        {item.snippet.slice(0, 150) + '... '}
                                        <Link to={transformTitleToId(item.title)} className='text-[12px] font-normal'>
                                            [read more]
                                        </Link>
                                    </Text>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                {resultCount >= 6 && (
                    <div className={`flex justify-center items-center w-full mt-10 px-16 sm:px-6 xxlup:px-0 ss:justify-center`}>
                        <Button
                            ghost
                            disabled={isLoadingMore}
                            className='w-[180px] h-[42px] rounded-full'
                            onClick={handleLoadMore}
                        >
                            {isLoadingMore ? (
                                <Loading type="points" color="currentColor" size="sm" />
                            ) : (
                                "LOAD MORE"
                            )}
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Articles;