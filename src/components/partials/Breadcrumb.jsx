import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumbs, Typography } from '@mui/material';
import { Button, Text, Modal } from '@nextui-org/react';
import axios from 'axios';

const Breadcrumb = ({ handleEditButtonClick, modalOpenHandler, modalVisible, modalCloseHandler, handleDeleteButtonClick, isEditButtonVisible }) => {
    const [hasCookie, setHasCookie] = useState(false);
    const location = useLocation();
    const paths = location.pathname.split('/').filter((path) => path !== '');
    const currentPath = location.pathname;

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

    return (
        <div className={`flex flex-row justify-between items-center mt-7 mb-7 px-16 sm:px-6 xxlup:px-0 ss:justify-center`}>
            <Breadcrumbs className='ss:hidden'>
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
            {hasCookie && (currentPath === '/resources' || currentPath === '/resources/') && (
                <Link to={'/resources/create'}>
                    <Button flat auto color="primary">
                        <Text css={{ color: '$white' }}>
                            Create
                        </Text>
                    </Button>
                </Link>
            )}
            {hasCookie && isEditButtonVisible && currentPath !== '/resources' && (
                <div className='flex'>
                    <Button flat auto color="primary" className='ml-6' onClick={handleEditButtonClick}>
                        Edit
                    </Button>
                    <Button auto color="error" className='ml-2' onClick={modalOpenHandler}>
                        Delete
                    </Button>
                    <Modal
                        closeButton
                        blur
                        aria-labelledby="confirm"
                        open={modalVisible}
                        onClose={modalCloseHandler}
                    >
                        <Modal.Body>
                            <Text>
                                Are you sure you want to delete this resource?
                            </Text>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button auto color='error' onPress={handleDeleteButtonClick}>
                                Delete
                            </Button>
                            <Button auto color='cancel' onPress={modalCloseHandler}>
                                Cancel
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            )}
        </div >
    );
};

export default Breadcrumb;