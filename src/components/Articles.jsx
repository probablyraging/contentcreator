import React from 'react';
import { Text, Card, Row } from "@nextui-org/react";
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
                        <Link key={index} to={transformTitleToId(item.title)} className='md:w-full'>
                            <Card isHoverable isPressable className='min-h-[300px] max-w-[400px] md:max-w-full md:min-h-[250px]'>
                                <Card.Body css={{ p: 0, flex: '0 1 auto', minHeight: '130px' }}>
                                    <Card.Image
                                        src={item.thumb}
                                        objectFit="cover"
                                        width="100%"
                                        height={140}
                                        alt={item.title}
                                    />

                                    <Row wrap="wrap" justify="space-between" align="center" className='p-4'>
                                        <Link to={transformTitleToId(item.title)} className='font-semibold'>
                                            {item.title}
                                        </Link>

                                        <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                                            {item.snippet.slice(0, 150) + '... '}
                                            <Link to={transformTitleToId(item.title)} className='text-[12px] font-normal'>
                                                [read more]
                                            </Link>
                                        </Text>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Articles;