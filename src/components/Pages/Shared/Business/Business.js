import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCircleNotch, faFlag, faPersonSnowboarding, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';


const Business = () => {

    return (
        <div>
            <h2 className='text-primary font-bold text-4xl text-center mt-12 mb-10'>We gain trust from milions of people</h2>
            <h2 className='text-secondary font-bold text-xl text-center mb-5'>User Expection is our first priority</h2>
            <p></p>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure>  <FontAwesomeIcon className='text-6xl' icon={faFlag} /></figure>
                    <div class="card-body ">
                        <h2 class="text-4xl text-center">100+ Countries</h2>
                    </div>
                </div>
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure>  <FontAwesomeIcon className='text-6xl' icon={faProjectDiagram} /></figure>
                    <div class="card-body ">
                        <h2 class="text-4xl text-center">700+ Projects</h2>
                    </div>
                </div>
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure>  <FontAwesomeIcon className='text-6xl' icon={faPersonSnowboarding} /></figure>
                    <div class="card-body ">
                        <h2 class="text-4xl text-center"> 500+ Happy Clients</h2>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Business;