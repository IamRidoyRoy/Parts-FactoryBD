import React from 'react';

const Review = ({ reviews }) => {
    const { name, location, img, review } = reviews
    return (

        <div className="card lg:max-w-96 bg-base-100 shadow-xl mt-5 text-center mx-12 ">
            <div className="card-body">

                <div className=''>
                    <div className="avatar">
                        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div className='mx-3'>
                        <p className="">{name}</p>
                        <p>Location: {location}</p>
                    </div>
                </div>
                <p>{review}</p>
            </div>
        </div>

    );
};

export default Review;