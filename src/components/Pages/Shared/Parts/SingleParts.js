import React from 'react';

const SingleParts = ({ single }) => {
    const { name, img, description, price, available } = single;
    return (
        <div class="card card-compact lg:w-80 gap-5 bg-base-100 shadow-xl my-3 text-center">
            <figure><img className='h-40' src={img} alt="Motor Bike Parts" /></figure>
            <div class="card-body">
                <h2 class="card text-xl">{name}</h2>
                <p>Price: {price}$, Available : {available} Piece</p>
                <p></p>
                <p>{description}</p>
                <div class="card-actions justify-center ">
                    <button class="btn btn-primary ">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleParts;