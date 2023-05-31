import React, { useState, useEffect } from 'react';
import { Text } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import { BgGradients } from '../components';
import slugify from 'slugify';
import styles from "../style";
import axios from 'axios';

const Articles = ({ darkMode }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [resources, setResources] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.post('https://creatordiscord.xyz/api/resources');
            setResources(response.data.message);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    const transformTitleToId = (title) => {
        return slugify(title, { lower: true, strict: true });
    };

    if (isLoading) {
        return (
            <section id="home" className={`flex flex-row sm:flex-col pt-6 pb-16 xs:pb-5`}>
                <div className={`flex-1 ${styles.flexStart} flex-col px-16 sm:px-6 xxlup:px-0 sm:items-center`}>
                    <BgGradients />
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
        <section id="home" className={`flex flex-row sm:flex-col pt-6 pb-16 xs:pb-5`}>
            <div className={`flex-1 ${styles.flexStart} flex-col px-16 sm:px-6 xxlup:px-0 sm:items-center`}>
                <BgGradients />
                <div className='flex justify-center flex-wrap gap-10'>
                    {resources.map((item, index) => (
                        <Link key={index} to={transformTitleToId(item.title)}>
                            <div className={`${darkMode ? 'bg-[#16181A] drop-shadow-cardShadowSmDark hover:drop-shadow-cardShadowLgDark' : 'bg-[#fff] drop-shadow-cardShadowSm hover:drop-shadow-cardShadowLg'} relative flex flex-col min-w-0 min-h-[300px] max-w-[400px] md:max-w-full md:min-h-[250px] rounded-2xl border-none hover:translate-y-[-2px] card-anim`}>
                                <img src={item.thumb} className="h-36 object-cover rounded-2xl rounded-b-none" alt={item.title} />
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
            </div>
        </section>
    );
};

export default Articles;