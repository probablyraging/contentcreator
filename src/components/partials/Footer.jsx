import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <section className={`flex items-center flex-col m-10`}>
        <p className="font-poppins font-normal text-center text-[10px] leading-[18px] text-gray-500">
            Copyright Ⓒ 2023 CreatorDiscord. All Rights Reserved.
        </p>
        <Link to='/privacy' className='font-poppins font-normal text-center text-[10px] leading-[18px]'>
            Privacy Policy
        </Link>
    </section>
);

export default Footer;