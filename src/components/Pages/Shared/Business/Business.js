import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCircleNotch, faFlag, faPersonSnowboarding, faProjectDiagram, faQuestion } from '@fortawesome/free-solid-svg-icons';


const Business = () => {

    return (
        <div className='mx-12 my-16'>
            <h2 className='text-primary font-bold text-4xl text-center mt-12 mb-5'>We gain trust from milions of people</h2>
            <h2 className='text-secondary font-bold text-xl text-center'>User Expection is our first priority</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-10 '>
                <div class="card card-compact  bg-base-100 shadow-xl">
                    <figure>  <FontAwesomeIcon className='text-6xl' icon={faFlag} /></figure>
                    <div class="card-body ">
                        <h2 class="text-4xl text-center">100+ Countries</h2>
                    </div>
                </div>
                <div class="card card-compact   bg-base-100 shadow-xl">
                    <figure>  <FontAwesomeIcon className='text-6xl' icon={faProjectDiagram} /></figure>
                    <div class="card-body ">
                        <h2 class="text-4xl text-center">700+ Projects</h2>
                    </div>
                </div>
                <div class="card card-compact   bg-base-100 shadow-xl">
                    <figure>  <FontAwesomeIcon className='text-6xl' icon={faPersonSnowboarding} /></figure>
                    <div class="card-body ">
                        <h2 class="text-4xl text-center"> 500+ Happy Clients</h2>
                    </div>
                </div>

            </div>
            <div class="card card-compact bg-base-100 shadow-xl my-12 py-5">
                <figure>  <FontAwesomeIcon className='text-6xl' icon={faQuestion} /></figure>
                <div class="card-body">
                    <h2 class="text-4xl text-center"> If You have any Question, Please Contact Us!</h2>
                    <button className='btn btn-secondary mx-auto lg:w-96'>Contact Us</button>
                </div>
            </div>

        </div >
    );
};

export default Business;