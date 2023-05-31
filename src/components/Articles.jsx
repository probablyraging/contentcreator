import React from 'react';
import { Text } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import { Loader, BgGradients } from '../components';
import { useFetchResources } from '../constants/utils';
import slugify from 'slugify';
import styles from "../style";

const Articles = ({ darkMode }) => {
    const resources = useFetchResources();

    if (!resources) {
        return <Loader darkMode={darkMode} />
    }

    const transformTitleToId = (title) => {
        return slugify(title, { lower: true, strict: true });
    };

    return (
        <section id="home" className={`flex flex-row sm:flex-col pt-6 pb-16 xs:pb-5`}>
            <div className={`flex-1 ${styles.flexStart} flex-col px-16 sm:px-6 xxlup:px-0 sm:items-center`}>
                <BgGradients />
                <div className='flex justify-center flex-wrap gap-10'>
                    {resources.map((item, index) => (
                        <Link key={index} to={transformTitleToId(item.title)}>
                            <div className={`${darkMode ? 'bg-[#16181A] drop-shadow-cardShadowSmDark hover:drop-shadow-cardShadowLgDark' : 'bg-[#fff] drop-shadow-cardShadowSm hover:drop-shadow-cardShadowLg'} relative flex flex-col min-w-0 min-h-[300px] max-w-[400px] md:max-w-full md:min-h-[250px] rounded-2xl border-none hover:translate-y-[-2px] card-anim`}>
                                <img src={item.thumb} className="h-36 object-cover rounded-2xl rounded-b-none" alt={item.title} />
                                <div className=" p-4">
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