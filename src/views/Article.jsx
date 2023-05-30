import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { BgGradientsAlt, Breadcrumb, ContentWrapper, Footer, Loader } from "../components";
import { useFetchResources } from '../constants/utils';
import styles from '../style';

const Test = ({ darkMode }) => {
    const { id } = useParams();
    const resources = useFetchResources(id);

    if (!resources) {
        return <Loader darkMode={darkMode} />
    }

    return (
        <ContentWrapper>

            <Helmet>
                <meta name="description" content={`${resources.snippet.slice(0, 160)}...`} />
                <meta name="twitter:title" content={`ContentCreator - ${resources.title}`} />
                <meta name="twitter:description" content={`${resources.snippet.slice(0, 160)}...`} />
                <meta name="twitter:image" content={resources.thumb} />
                <meta name="keywords" content={`discord server for content creators, content creator discord server, ${resources.snippet.split(' ').join(', ')} `} />
                <meta property="og:title" content={`ContentCreator - ${resources.title}`} />
                <meta property="og:description" content={`${resources.snippet.slice(0, 160)}...`} />
                <meta property="og:image" content={resources.thumb} />
                <meta property="og:url" content={`https://creatordiscord.xyz/resources/${resources.slug}`} />
                <title>ContentCreator - {resources.title}</title>
            </Helmet>

            <Breadcrumb />

            <BgGradientsAlt />

            <section id="home" className={`relative flex flex-col sm:flex-col pt-6 pb-16 xs:pb-5 ${darkMode ? 'bg-[#0c0c0c4f]' : 'bg-[#f9f9f9]'} rounded-[12px] shadow-resourceShadow`}>
                <div className={`flex-1 ${styles.flexStart} flex-col px-44 sm:px-6 sm:items-center`}>
                    <p className='flex items-center w-full text-[64px] leading-[70px] font-bold mt-9'>{resources.title}</p>
                </div>

                <div className='flex-1 flex-col px-44 sm:px-6 justify-center items-center'>
                    <div className='leading-[70px]' dangerouslySetInnerHTML={{ __html: resources.date.toUpperCase() }}></div>
                </div>

                <div className='flex flex-1 flex-col px-44 sm:px-6 justify-center items-center'>
                    <img src={resources.thumb} className='max-w-[640px] rounded-xl' />
                </div>

                <div className='flex-1 ${styles.flexStart} flex-col px-44 sm:px-6 justify-center items-center'>
                    <div dangerouslySetInnerHTML={{ __html: resources.raw.replace('images/image1.png', 'https://i.imgur.com/SqexVBO.png') }}></div>
                </div>
            </section>

            <Footer />

        </ContentWrapper>
    );
};

export default Test;