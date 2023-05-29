import React from 'react';
import { platforms } from "../constants";
import styles from "../style";

const Platforms = () => (
    <div className={`${styles.flexCenter} flex-wrap w-full my-4`}>
        {platforms.map((platform) => (
            <div key={platform.id} className={`flex-1 ${styles.flexCenter} min-w-[192px] sm:min-w-[0] m-5`}>
                <img id={platform.id} src={platform.logo} alt={platform.id} className="w-[52px] min-w-[42px] object-contain" />
            </div>
        ))}
    </div>
);

export default Platforms;