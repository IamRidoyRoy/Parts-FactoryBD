import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import DetailsModal from './DetailsModal';
const Purchase = ({ setDetails }) => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        const url = `https://polar-depths-39868.herokuapp.com/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])


    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <label
                        onClick={() => setDetails(product)}

                        htmlFor="my-modal-6" className='btn btn-sm btn-primary uppercase text-white'>Details About The Product
                    </label>
                    <img width={500} src={product.img} alt='' />
                    <div>
                        <div className="card w-96 bg-primary text-primary-content">
                            <div className="card-body">
                                <h2 className="card-title">Product Name: {product.name}</h2>
                                <form className='grid grid-cols-1 justify-items-center  gap-3 mt-5'>
                                    <input type="text" name='name' value={user?.displayName} className="input text-neutral input-bordered w-full max-w-xs" />
                                    <input type="text" name='email' value={user?.email} className="input text-neutral input-bordered w-full max-w-xs" />
                                    <input type="text" name='phone' placeholder="Phone number" className="input input-bordered w-full max-w-xs" required />
                                    <input type="text" name='address' placeholder='Address' className="input text-neutral input-bordered w-full max-w-xs" />
                                    <select name='quantity' className="select text-neutral select-bordered w-full max-w-xs">

                                        <option>{product.minimum} piece</option>


                                    </select>
                                    <input type="submit" value='Place Order' className="btn btn-secondary w-full max-w-xs" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DetailsModal product={product} user={user}></DetailsModal>
        </div>
    );
};

export default Purchase;