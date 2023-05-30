import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumbs, Typography } from '@mui/material';

const Breadcrumb = () => {
    const location = useLocation();
    const paths = location.pathname.split('/').filter((path) => path !== '');

    return (
        <div className='flex-1 flex justify-center items-start flex-col mt-7 px-16 sm:px-6 xxl:px-0'>
            <Breadcrumbs>
                <Link to="/resources" className="flex items-center">
                    <i className="bi bi-file-text-fill"></i>
                    <Typography variant="body2">Resources</Typography>
                </Link>

                {paths.map((path, index) => {
                    if (path === 'resources') return;
                    const linkTo = `/${paths.slice(0, index + 1).join('/')}`;

                    return (
                        <Link
                            key={path}
                            to={linkTo}
                            className={`flex items-center`}
                        >
                            <Typography variant="body2">{path}</Typography>
                        </Link>
                    );
                })}
            </Breadcrumbs>
        </div >

    );
};

export default Breadcrumb;