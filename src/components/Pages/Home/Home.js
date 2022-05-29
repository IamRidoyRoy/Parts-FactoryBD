import React from 'react';
import Business from '../Shared/Business/Business';
import Parts from '../Shared/Parts/Parts';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Business></Business>
        </div>
    );
};

export default Home;