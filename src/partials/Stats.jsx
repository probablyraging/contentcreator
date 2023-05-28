import * as React from 'react';
import { Text } from "@nextui-org/react";
import { stats } from "../constants";
import { motion } from 'framer-motion';

const Stats = () => (
    <section className={`sm:block flex justify-between flex-row flex-wrap mb-20 sm:mb-6`}>
        {stats.map((stat, index) => (
            <motion.div
                key={stat.id}
                className={`flex-1 flex justify-center items-center flex-row m-3`}
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: (index + 4) * 0.1,
                }}>
                <div className="flex items-center">
                    <Text h4
                        className="font-poppins font-semibold text-[38px] md:text-[24px] leading-[53.16px] xs:leading-[43.16px] mb-0"
                        style={{ display: 'inline-block' }}>
                        {stat.value}
                    </Text>
                    <Text
                        className="font-poppins font-medium text-[20px] md:text-[16px] leading-[26.58px] xs:leading-[21.58px] uppercase ml-3"
                        css={{ display: 'inline-block', textGradient: "90deg, rgba(14,98,194,1) 0%, rgba(83,155,237,1) 76%, rgba(14,98,194,1) 100%", }}>
                        {stat.title}
                    </Text>
                </div>
            </motion.div>
        ))}
    </section>
);

export default Stats;