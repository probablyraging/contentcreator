import React from 'react';
import { Spacer } from '@nextui-org/react';
import { ContentWrapper, Platforms, CallToAction, Footer, Stats, Testimonials, Hero } from "../components";

const Landing = () => (
    <ContentWrapper>
        <Hero />
        <Stats />
        <Spacer y={5} />
        <Testimonials />
        <Spacer y={5} />
        <CallToAction />
        <Spacer y={5} />
        <Platforms />
        <Footer />
    </ContentWrapper>
);

export default Landing;