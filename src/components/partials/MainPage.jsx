import React from 'react';
import { useRenderer } from '../../constants/utils';

const MainPage = ({ children }) => {
    const [isRendering, setIsRendering] = useRenderer();

    return (
        <>
            {!isRendering && (
                <div className="w-full overflow-hidden">
                    {children}
                </div>
            )}
        </>
    );
};

export default MainPage;