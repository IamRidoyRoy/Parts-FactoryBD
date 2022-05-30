import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleParts = ({ single }) => {
    const { name, img, description, price, available, minimum, _id } = single;
    const navigate = useNavigate();
    const navigateToServiceDetails = id => {
        navigate(`/product/${id}`);
    }
    return (
        <div className="card card-compact lg:w-80 gap-5 bg-base-100 shadow-xl my-3 text-center">
            <figure><img className='h-40' src={img} alt="Motor Bike Parts" /></figure>
            <div className="card-body">
                <h2 className="card text-xl">{name}</h2>
                <p className='font-bold text-secondary'>Price: {price}$, Available : {available} Piece</p>
                <p>Minimum Order Quantity: {minimum}</p>
                <p>{description}</p>
                <div className="card-actions justify-center ">
                    <button onClick={() => navigateToServiceDetails(_id)} className="btn btn-primary ">Buy Now</button>
                    {/* <button className='btn btn-primary'>Book - {name}</button> */}

                </div>
            </div>
        </div>
    );
};

export default SingleParts;