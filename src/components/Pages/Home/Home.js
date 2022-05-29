import React from 'react';
import Business from '../Shared/Business/Business';
import Parts from '../Shared/Parts/Parts';
import Testimonial from '../Shared/Reviews/Testimonial';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Business></Business>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;