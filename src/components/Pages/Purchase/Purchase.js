import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
const Purchase = () => {
    const { productId } = useParams();

    const [product, setProduct] = useState([]);
    console.log('got pp', product);

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={product.image} alt='' />
                    <div>
                        <div class="card w-96 bg-primary text-primary-content">
                            <div class="card-body">
                                <h2 class="card-title">Product Name:{product.name}</h2>
                                <p>Product Quantity:</p>
                                <div className='text-center'>
                                    <Link to='/checkout'><button className='btn btn-primary'>Place Order</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;