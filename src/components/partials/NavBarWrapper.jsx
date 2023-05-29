import React from 'react';
import styles from '../../style';

const NavBarWrapper = ({ children }) => {
    return (
        <div className={`${styles.flexCenter}`}>
            {children}
        </div>
    )
}

export default NavBarWrapper;