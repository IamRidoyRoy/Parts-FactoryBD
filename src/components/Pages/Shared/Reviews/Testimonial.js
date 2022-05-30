import React from 'react';
import people1 from '../../../../assets/images/people1.png'
import people2 from '../../../../assets/images/people2.png'
import people3 from '../../../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {
    const reviewData = [
        {
            _id: 1,
            name: 'Nick Walter',
            review: 'Easy to order, SUPER fast (free express) delivery, quality product and super helpful installation video! Thanks heaps!!',
            location: 'Canada',
            img: people1
        },
        {
            _id: 2,
            name: 'Victoria Wilium',
            review: 'Awesome service, had my part in a couple of days, it was exactly what I ordered and they were super easy to deal with. Highly recommend them and I will use them again without a doubt.',
            location: 'USA',
            img: people2
        },
        {
            _id: 3,
            name: 'Ansthesia Clinton',
            review: 'Thankyou so much to the guys at parts factory. They gave me so much help with my i30 as I do not know much about Bikes. They have amazing customer service and I highly recommend them.',
            location: 'California',
            img: people3
        }
    ]
    return (
        <section className='my-16'>
            <div className='text-center '>
                <div>
                    <h4 className='text-4xl  text-primary font-sans font-bold'>Reviews</h4>
                    <h2 className='text-4xl'>Our most valuable Clinets</h2>
                </div>

            </div>
            <div className='grid grid-cols-1  lg:grid-cols-3  gap-5'>
                {
                    reviewData.map(reviews =>
                        <Review
                            key={reviews._id}
                            reviews={reviews}
                        ></Review>
                    )
                }
            </div>
        </section>
    );
};

export default Testimonial;