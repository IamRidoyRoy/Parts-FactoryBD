import React, { useEffect, useState } from 'react';
import SingleParts from './SingleParts';

const Parts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div>
            <h2 className='text-4xl text-center text-primary font-bold mt-10'>Parts</h2>
            <div className='grid grid-cols-1 justify-items-center lg:grid-cols-3 mx-12'>
                {
                    parts.map(single =>
                        <SingleParts
                            key={single._id}
                            single={single}
                        ></SingleParts>)
                }
            </div>
        </div>
    );
};

export default Parts;