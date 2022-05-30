import React, { useEffect, useState } from 'react';
import DetailsModal from '../../Purchase/DetailsModal';
import SingleParts from './SingleParts';

const Parts = () => {
    const [parts, setParts] = useState([]);
    const [details, setDetails] = useState(null);

    useEffect(() => {
        fetch('https://polar-depths-39868.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div className='my-16'>
            <h2 className='text-4xl text-center text-primary font-bold mt-10'>Parts</h2>
            <div className='grid grid-cols-1 justify-items-center lg:grid-cols-3 mx-12'>
                {
                    parts?.map(single =>
                        <SingleParts
                            key={single._id}
                            single={single}
                        ></SingleParts>)
                }
            </div>

            {
                details &&
                <DetailsModal
                    details={details}
                    setDetails={setDetails}
                    parts={parts}
                >
                </DetailsModal>
            }
        </div>
    );
};

export default Parts;