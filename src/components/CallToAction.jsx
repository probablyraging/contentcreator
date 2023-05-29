import React from 'react';
import { Card, Button, } from "@nextui-org/react";
import { motion } from 'framer-motion';
import { fetchMemberCount } from '../constants/utils';
import styles from "../style";

const CallToAction = () => {
    const [memberCount, setMemberCount] = fetchMemberCount();

    return (
        <>
            <motion.div
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 18,
                    delay: 0,
                }}>
                <Card id='call-to-action'
                    css={{ px: "$24", py: "$12", mw: "100%", backgroundSize: 'cover' }}>
                    <Card.Body css={{ py: "$2" }}>
                        <div className="flex flex-row sm:flex-col sm:items-center gap-16">
                            <div className="flex-1 flex flex-col">
                                <h2 id="test" className={`${styles.headingRes} sm:leading-10 sm:text-[20px] sm:text-center text-[#3694ff]`}>Join the Discord server today!</h2>
                                <p className={`${styles.paragraph} max-w-[470px] mt-5 sm:text-[14px] sm:text-center font-medium`}>
                                    There are currently <span className="font-semibold text-[#3694ff]">{memberCount}</span> content creators in our community, and you're missing out.
                                </p>
                            </div>
                            <div className="m-auto">
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 11 }}
                                >
                                    <Button flat color="primary" size="xl" auto href="#" className="sm:h-12"
                                        onClick={() => window.open('https://discord.gg/contentcreator')}
                                        css={{ color: '#ffffff' }}>
                                        Join Now!
                                    </Button>
                                </motion.div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </motion.div>
        </>
    );
};

export default CallToAction;