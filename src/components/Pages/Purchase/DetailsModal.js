import React from 'react';

const DetailsModal = ({ product }) => {
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-primary">Name: {product.name} </h3>
                    <p>Price: {product.price}, Available: {product.available}</p>
                    <p className='text-error'>Minimum Order Quantity: {product.minimum}</p>
                    <h3 className='text-secondary'>Product details:</h3>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    );
};

export default DetailsModal;