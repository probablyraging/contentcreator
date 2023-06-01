import React, { useState, lazy, Suspense } from 'react';
import { Input, Button } from '@nextui-org/react';
import { Loader } from '../components';
import axios from 'axios';

const ContentWrapper = lazy(() => import('../components/partials/ContentWrapper'));
const BgGradientsAlt = lazy(() => import('../components/partials/BgGradientsAlt'));

const LogIn = ({ darkMode }) => {
    const [password, setPassword] = useState('');
    const [loginFailed, setLoginFailed] = useState(false);

    if (document.cookie.includes('_session')) window.location.href = '/resources';

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://creatordiscord.xyz/api/validate', { loginToken: password });
            if (response.data.cookie) {
                document.cookie = `_session=${response.data.cookie}; max-age=86400;`;
                window.location.href = '/resources';
            } else {
                setLoginFailed(true);
            }
        } catch (error) {
            setLoginFailed(true);
        }
    };

    return (
        <Suspense fallback={<Loader />}>
            <ContentWrapper>
                <BgGradientsAlt />
                <div className='flex justify-center items-center w-full min-h-[90vh] z-0'>
                    <div className={`flex justify-center items-center min-h-fit py-12 px-6 ${darkMode ? 'bg-[#0c0c0ce4] shadow-lgBoxLight' : 'bg-[#f9f9f9] shadow-lgBoxDark'} rounded-lg z-0`}>
                        <form
                            className='flex flex-col gap-5 justify-center items-center'
                            onSubmit={handleSubmit}>
                            <Input.Password
                                bordered
                                labelPlaceholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {loginFailed && (
                                <p className='text-[#eb5f5f] text-[14px]'>Login failed. Please try again.</p>
                            )}
                            <Button
                                className='max-h-[32px]'
                                css={{ background: '#6c6c6c' }}
                                type="submit"
                            >
                                Login
                            </Button>
                        </form>
                    </div>
                </div>
            </ContentWrapper>
        </Suspense>
    );
};

export default LogIn;