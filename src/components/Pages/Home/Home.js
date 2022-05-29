import React from 'react';
import Business from '../Shared/Business/Business';
import NewsLetter from '../Shared/NewsLetter/NewsLetter';
import Parts from '../Shared/Parts/Parts';
import RecentBlog from '../Shared/RecentBlog/RecentBlog';
import Testimonial from '../Shared/Reviews/Testimonial';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Business></Business>
            <RecentBlog></RecentBlog>
            <NewsLetter></NewsLetter>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;