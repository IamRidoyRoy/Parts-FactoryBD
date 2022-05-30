import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-96">
                <img src="https://media.istockphoto.com/photos/old-parts-of-motorcycles-background-picture-id532550846?s=612x612" alt='' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-96">
                <img src="https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?cs=srgb&dl=pexels-mike-b-190574.jpg&fm=jpg" alt='' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full max-h-96">
                <img src="https://cdn.pixabay.com/photo/2016/09/27/15/06/motorcycle-1698583_960_720.jpg" alt='' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;