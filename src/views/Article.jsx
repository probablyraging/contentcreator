import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { Button, Input } from '@nextui-org/react';
import { Loader } from "../components";
import { useFetchResources } from '../constants/utils';
import styles from '../style';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import slugify from 'slugify';

const BgGradientsAlt = lazy(() => import('../components/partials/BgGradientsAlt'));
const Breadcrumb = lazy(() => import('../components/partials/Breadcrumb'));
const ContentWrapper = lazy(() => import('../components/partials/ContentWrapper'));
const Footer = lazy(() => import('../components/partials/Footer'));

const Article = ({ darkMode }) => {
    const { id } = useParams();
    const resources = useFetchResources(id);
    const [resourceTitle, setResourceTitle] = useState('');
    const [resourceImage, setResourceImage] = useState('');
    const [resourceKeywords, setResourceKeywords] = useState('');
    const [resourceBody, setEditorContent] = useState('');
    const [hasCookie, setHasCookie] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isEditButtonVisible, setIsEditButtonVisible] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        if (resources) {
            setEditorContent(resources.raw);
        }
    }, [resources]);

    useEffect(() => {
        try {
            axios.post('https://creatordiscord.xyz/api/validate', { validateToken: document.cookie })
                .then(response => {
                    if (response.data.success) {
                        setHasCookie(true);
                    } else {
                        setHasCookie(false);
                    }
                });
        } catch (error) {
            console.log(error);
            setHasCookie(false);
        }
    }, []);

    if (!resources) {
        return <Loader darkMode={darkMode} />;
    }

    const modalOpenHandler = () => setModalVisible(true);
    const modalCloseHandler = () => setModalVisible(false);

    const handleCancelClick = () => {
        setIsEditing(false);
        setIsEditButtonVisible(true);
        setEditorContent(resources.raw);
    };

    const handleEditButtonClick = () => {
        setIsEditing(true);
        setIsEditButtonVisible(false);
    };

    const handleDeleteButtonClick = () => {
        try {
            axios.post('https://creatordiscord.xyz/api/deleteresource', { slug: id })
                .then(response => {
                    if (response.data.message === 'Ok') window.location.href = '/resources';
                });
        } catch (error) {
            console.log(error);
        }
    };

    const handleSaveClick = (e) => {
        e.preventDefault();
        try {
            const newSlug = slugify(resourceTitle ? resourceTitle : resources.title, { lower: true, strict: true });
            axios.post('https://creatordiscord.xyz/api/updateresource', {
                slug: id,
                title: resourceTitle ? resourceTitle : resources.title,
                thumb: resourceImage ? resourceImage : resources.thumb,
                keywords: resourceKeywords ? resourceKeywords : resources.keywords,
                raw: resourceBody ? resourceBody : resources.raw,
                newSlug: newSlug
            })
                .then(response => {
                    if (response.data.message === 'Ok') window.location.href = location.pathname.replace(id, newSlug);
                });
        } catch (error) {
            console.log(error);
        }
    };

    const renderTitleEditor = () => {
        if (isEditing) {
            return (
                <div className='px-20'>
                    <Input
                        bordered
                        className={`lgup:w-[900px] mdup:w-[800px] smup:w-[700px] ssup:w-[600px] xsup:w-[500px] ${darkMode ? 'bg-[#141414]' : 'bg-white'}`}
                        label='Title'
                        initialValue={resources.title}
                        onChange={(e) => setResourceTitle(e.target.value)}
                    />
                </div>
            );
        }
        return null;
    };

    const renderImageEditor = () => {
        if (isEditing) {
            return (
                <div className='px-20'>
                    <Input
                        bordered
                        className={`lgup:w-[900px] mdup:w-[800px] smup:w-[700px] ssup:w-[600px] xsup:w-[500px] ${darkMode ? 'bg-[#141414]' : 'bg-white'}`}
                        label='Thumbnail'
                        initialValue={resources.thumb}
                        onChange={(e) => setResourceImage(e.target.value)}
                    />
                </div>
            );
        }
        return null;
    };

    const renderKeywordEditor = () => {
        if (isEditing) {
            return (
                <div className='px-20 mt-5'>
                    <Input
                        bordered
                        className={`lgup:w-[900px] mdup:w-[800px] smup:w-[700px] ssup:w-[600px] xsup:w-[500px] ${darkMode ? 'bg-[#141414]' : 'bg-white'}`}
                        label='Keywords'
                        initialValue={resources.keywords}
                        onChange={(e) => setResourceKeywords(e.target.value)}
                    />
                </div>
            );
        }
        return null;
    };

    const renderEditor = () => {
        if (isEditing) {
            return (
                <Suspense fallback={<Loader darkMode={darkMode} />}>
                    <div className='px-20'>
                        <Editor
                            apiKey='sn859udbwuko5zl0h8tp6q4dv6xil8zqzr15o6cs04pnkry0'
                            value={resourceBody}
                            onEditorChange={setEditorContent}
                            plugins='preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons'
                            toolbar='undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl'
                            menubar='file edit view insert format tools table help'
                        />
                        <div className='flex gap-6 float-right mt-10'>
                            <Button auto color="cancel" onClick={handleCancelClick}>
                                Cancel
                            </Button>
                            <Button flat auto color="primary" type="submit">
                                Save
                            </Button>
                        </div>
                    </div>
                </Suspense>
            );
        } else {
            return (
                <Suspense fallback={<Loader darkMode={darkMode} />}>
                    <div dangerouslySetInnerHTML={{ __html: resources.raw }}></div>
                </Suspense>
            );
        }
    };

    return (
        <Suspense fallback={<Loader darkMode={darkMode} />}>
            <ContentWrapper>
                <Helmet>
                    <title>{resources.title} - CreatorDiscord</title>
                    <meta name="description" content={`${resources.snippet.slice(0, 160)}...`} />
                    <meta name="keywords" content={`${resources.keywords} `} />
                    <meta name="twitter:title" content={`${resources.title} - CreatorDiscord`} />
                    <meta name="twitter:description" content={`${resources.snippet.slice(0, 160)}...`} />
                    <meta name="twitter:image" content={resources.thumb} />
                    <meta property="og:title" content={`${resources.title} CreatorDiscord`} />
                    <meta property="og:url" content={`https://creatordiscord.xyz/resources/${resources.slug}`} />
                    <meta property="og:description" content={`${resources.snippet.slice(0, 160)}...`} />
                    <meta property="og:image" content={resources.thumb} />
                </Helmet>

                <Breadcrumb
                    darkMode={darkMode}
                    hasCookie={hasCookie}
                    handleEditButtonClick={handleEditButtonClick}
                    modalOpenHandler={modalOpenHandler}
                    modalVisible={modalVisible}
                    modalCloseHandler={modalCloseHandler}
                    handleDeleteButtonClick={handleDeleteButtonClick}
                    isEditing={isEditing}
                    isEditButtonVisible={isEditButtonVisible}
                />

                {/* <BgGradientsAlt /> */}

                <section id="content" className={`relative flex flex-col ss:text-center sm:flex-col pt-6 pb-16 xs:pb-5 ${darkMode ? 'bg-[#0c0c0c4f]' : 'bg-[#f9f9f9]'} rounded-[12px] shadow-resourceShadow`}>
                    <form onSubmit={handleSaveClick}>

                        {isEditing ? (
                            <>{renderTitleEditor()}</>
                        ) : (
                            <div className={`flex-1 ${styles.flexStart} flex-col lgup:px-44 mdup:px-32 smup:px-14 px-6 sm:items-center`}>
                                <p id='resource-title' className='flex items-center w-full lgup:text-[64px] mdup:text-[52px] smup:text-[40px] text-[36px] lgup:leading-[70px] mdup:leading-[60px] smup:leading-[50px] leading-[40px] font-bold mt-9'>
                                    {resources.title}
                                </p>
                            </div>
                        )}

                        <div className='flex flex-row flex-wrap mb-5 lgup:px-44 mdup:px-32 smup:px-14 px-6 items-center ss:justify-center'>
                            {!isEditing && (
                                <div className='leading-[70px] sm:text-[14px]' dangerouslySetInnerHTML={{ __html: resources.date.toUpperCase() }}></div>
                            )}
                        </div>

                        {isEditing ? (
                            <>{renderImageEditor()}</>
                        ) : (
                            <div className='flex flex-1 flex-col lgup:px-44 mdup:px-32 smup:px-14 px-6 mb-10 justify-center items-center'>
                                <img src={resources.thumb} className='max-w-[640px] ss:max-w-full rounded-xl' />
                            </div>
                        )}

                        {isEditing && (
                            <>{renderKeywordEditor()}</>
                        )}

                        {isEditing ? (
                            <>{renderEditor()}</>
                        ) : (
                            <div className="flex-1 ${styles.flexStart} flex-col lgup:px-44 mdup:px-32 smup:px-14 px-6 justify-center items-center">
                                <div dangerouslySetInnerHTML={{ __html: resources.raw }}></div>
                            </div>
                        )}

                    </form>
                </section>

                <Footer />
            </ContentWrapper>
        </Suspense>
    );
};

export default Article;