import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Input, Button } from '@nextui-org/react';
import { Loader } from '../components';
import { useNavigate } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import slugify from 'slugify';

const ContentWrapper = lazy(() => import('../components/partials/ContentWrapper'));
const BgGradientsAlt = lazy(() => import('../components/partials/BgGradientsAlt'));
const Footer = lazy(() => import('../components/partials/Footer'));

const Create = ({ darkMode }) => {
    const [resourceTitle, setResourceTitle] = useState('');
    const [resourceImage, setResourceImage] = useState('');
    const [resourceBody, setEditorContent] = useState('');
    const [resourceSnippet, setResourceSnippet] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        try {
            axios.post('https://creatordiscord.xyz/api/validate', { validateToken: document.cookie })
                .then(response => {
                    if (!response.data.success) navigate('/login');
                });
        } catch (error) {
            console.log(error);
            useNavigate('/error');
        }
    }, []);

    const handleCancelClick = () => navigate('/resources');

    const handleSaveClick = (e) => {
        e.preventDefault();
        try {
            const slug = slugify(resourceTitle, { lower: true, strict: true });
            axios.post('https://creatordiscord.xyz/api/createresource', {
                title: resourceTitle,
                snippet: resourceSnippet,
                thumb: resourceImage,
                raw: resourceBody,
                slug: slug,
                date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) + ' <span style="color: #3694ff;">•</span> by ProbablyRaging'
            })
                .then(response => {
                    if (response.data.message === 'Ok') window.location.href = `/resources/${slug}`;
                });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Suspense fallback={<Loader />}>
            <ContentWrapper>
                <BgGradientsAlt />

                <section id="content" className={`relative flex flex-col mt-8 ss:text-center sm:flex-col pt-6 pb-16 xs:pb-5 ${darkMode ? 'bg-[#0c0c0c4f]' : 'bg-[#f9f9f9]'} rounded-[12px] shadow-resourceShadow`}>
                    <form onSubmit={handleSaveClick}>
                        <div className='px-20 mt-6'>
                            <Input
                                bordered
                                required
                                className='lgup:w-[900px] mdup:w-[800px] smup:w-[700px] ssup:w-[600px] xsup:w-[500px] bg-white'
                                labelLeft='Title'
                                aria-label='title'
                                onChange={(e) => setResourceTitle(e.target.value)}
                            />
                        </div>

                        <div className='px-20 mt-6'>
                            <Input
                                bordered
                                required
                                className='lgup:w-[900px] mdup:w-[800px] smup:w-[700px] ssup:w-[600px] xsup:w-[500px] bg-white'
                                labelLeft='Thumbnail'
                                aria-label='thumbnail'
                                onChange={(e) => setResourceImage(e.target.value)}
                            />
                        </div>

                        <div className='px-20 mt-6'>
                            <Input
                                bordered
                                required
                                className='lgup:w-[900px] mdup:w-[800px] smup:w-[700px] ssup:w-[600px] xsup:w-[500px] bg-white'
                                labelLeft='Snippet'
                                aria-label='snippet'
                                onChange={(e) => setResourceSnippet(e.target.value)}
                            />
                        </div>

                        <div className='px-20'>
                            <Editor
                                apiKey='sn859udbwuko5zl0h8tp6q4dv6xil8zqzr15o6cs04pnkry0'
                                plugins='preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons'
                                toolbar='undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl'
                                menubar='file edit view insert format tools table help'
                                onEditorChange={setEditorContent}
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
                    </form>
                </section>

                <Footer />
            </ContentWrapper>
        </Suspense>
    )
}

export default Create;