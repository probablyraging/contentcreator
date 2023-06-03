import React, { lazy, Suspense } from 'react';
import { Text } from "@nextui-org/react";
import { feedback } from "../constants";
import styles from "../style";
import { Loader } from '../components';

const FeedbackCard = lazy(() => import('../components/partials/FeedbackCard'));

const Testimonials = ({ darkMode }) => (
    <Suspense fallback={<Loader darkMode={darkMode} />}>
        <section id="testimonials" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative sm:pb-0 px-16 sm:px-6 xxlup:px-0`}>
            <div className="absolute rounded-full bg-gradient z-[0] w-[10rem] h-[66rem] rotate-[54deg] top-[3rem] right-[70rem] sm:top-[40rem] sm:right-[9rem]" />

            <div className="w-full flex justify-between items-center flex-row md:flex-col mb-16 sm:mb-6 relative z-[1]">
                <Text h2 className={`${styles.headingRes} sm:leading-10 sm:text-center sm:text-[24px]`}>
                    What our community thinks
                </Text>
            </div>

            <div className="flex flex-wrap gap-8 justify-between xl:justify-center w-full feedback-container relative z-[1]">
                {feedback.map((card) => <FeedbackCard key={card.id} {...card} darkMode={darkMode} />)}
            </div>
        </section>
    </Suspense>
);

export default Testimonials;