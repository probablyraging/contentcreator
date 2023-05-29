import React from 'react';
import { Text, Card } from "@nextui-org/react";
import { percent, rocket } from "../assets";
import { motion } from 'framer-motion';
import styles from "../style";

const Hero = () => {
    return (
        <section id="home" className={`flex flex-row sm:flex-col pt-6 pb-16 xs:pb-5`}>
            <div className={`flex-1 ${styles.flexStart} flex-col px-16 sm:px-6 xxl:px-0 sm:items-center`}>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.5,
                    }}>

                    <Card isHoverable variant="bordered">
                        <Card.Body className='py-2 px-5 select-none'>
                            <div className='flex'>
                                <img src={percent} alt="percent" className="w-[32px] h-[32px]" />
                                <p className={`${styles.paragraph} ml-2 text-[18px] md:text-[14px]`}>
                                    <span className="font-semibold">Friendly</span> community.{" "}
                                    <span className="font-semibold">Great</span> resources.
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                </motion.div>

                <div className="flex flex-row justify-between items-center w-full">
                    <Text h1 className="font-poppins page_head text_rotation w-full sm:text-[30px] sm:leading-[70px]">
                        A Discord server for
                        <span className="sub_text">
                            <div className="flip_vertical">
                                <span>content creators</span>
                                <span>developers</span>
                                <span>musicians</span>
                                <span>influencers</span>
                            </div>
                        </span>
                    </Text>
                </div>

                <Text
                    className={`font-poppins text-[18px] mt-[80px] xs:mt-[60px] md:mt-[40px] max-w-[470px] sm:text-center sm:text-[16px]`}
                    css={{ color: '$accent9' }}
                >
                    A community of content creators, developers, musicians, gamers, and more. Our aim is to bring together like-minded individuals from all corners of the globe in a welcoming and supportive environment.
                </Text>
            </div>

            <div className={`flex-1 flex ${styles.flexCenter} my-0 md:my-10 relative`}>
                <img src={rocket} alt="rocket" className="w-[100%] h-[100%] max-w-[650px] sm:max-w-[250px] relative z-[5]" />

                {/* gradients */}
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink-gradient sm:w-[20%] sm:top-[-16px] sm:blur-[91px]" />
                <div className="absolute z-[0] w-[5rem] h-[12rem] green-gradient top-[10rem] right-0 sm:w-[10%] sm:h-[40%] sm:right-[137px] sm:top-[56px] sm:blur-[100px]" />
                <div className="absolute z-[0] w-[5rem] h-[12rem] blue-gradient top-[10rem] sm:left-[66px] sm:w-[20%] sm:h-[30%] sm:top-[100px] sm:blur-[91px]" />
                <div className="absolute z-[0] w-[14rem] h-[12rem] rounded-full white-gradient top-[28rem] sm:w-[30%] sm:h-[40%] sm:top-[290px]" />
                {/* gradients */}
            </div>
        </section>
    );
};

export default Hero;