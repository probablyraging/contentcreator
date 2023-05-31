import React from 'react';
import { Text } from "@nextui-org/react";
import { Tilt } from 'react-tilt';
import { quotes } from "../../assets";

const FeedbackCard = ({ darkMode, content, name, title, img }) => (
    <Tilt options={{ max: 15, scale: 1 }}>
        <div className={`${darkMode ? 'bg-[#16181A] drop-shadow-cardShadowSmDark hover:drop-shadow-cardShadowLgDark' : 'bg-[#fff] drop-shadow-cardShadowSm hover:drop-shadow-cardShadowLg'} relative flex flex-col min-w-0 min-h-[300px] max-w-[400px] md:w-full md:min-h-[250px] rounded-2xl border-none card-anim`}>
            <div className="p-4">
                <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain sm:max-w-[32px]" />
                <p className="font-poppins font-normal text-[18px] leading-[32.4px] my-10 sm:text-[14px] sm:text-center">
                    {content}
                </p>
            </div>
            <div>
                <div className={`${darkMode ? 'bg-[#1b1e20]' : 'bg-[#f4f4f4]'} flex flex-row py-2 px-4 rounded-2xl rounded-t-none`}>
                    <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full mr-6" />
                    <div>
                        <Text h4
                            className="font-poppins font-semibold text-[20px] sm:text-[18px] leading-[32px]"
                            css={{ display: 'inline-block', textGradient: "90deg, rgba(14,98,194,1) 0%, rgba(83,155,237,1) 76%, rgba(14,98,194,1) 100%", }}>
                            {name}
                        </Text>
                        <p className="font-poppins font-normal text-[16px] leading-[24px]">
                            {title}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </Tilt>
);

export default FeedbackCard;