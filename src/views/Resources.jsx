import React from 'react';
import { ContentWrapper, Articles, Breadcrumb, Footer } from '../components';

const Resources = ({ darkMode }) => {
    return (
        <ContentWrapper>
            <Breadcrumb />
            <Articles darkMode={darkMode} />
            <Footer />
        </ContentWrapper >
    );
};

export default Resources;