import React from 'react';
import styles from '../../style';

const ContentWrapper = ({ children }) => {
    return (
        <>
            <div className={`${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    {children}
                </div>
            </div>
        </>
    );
};

export default ContentWrapper;