import React from 'react'
import Slider from 'react-slick';
import { NavLink } from '@remix-run/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pre from '../img/pre.png'
const New = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1, // Show 3 slides on large screens
        arrows: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992, // Medium screens
                settings: {
                    slidesToShow: 3, // Show 2 slides on medium screens
                },


            },
            {
                breakpoint: 576, // Small screens
                settings: {
                    slidesToShow: 2, // Show 1 slide on small screens
                },

            },
        ],
    };
    return (
        <div className='container' style={{ marginTop: '7.8rem' }}>
            <div className='text-center carousel'>
                <h1 class="font-weight-bold custom-heading3" style={{ paddingTop: '0rem' }}>
                    <em> Trending Products </em>
                </h1>
                {/* <p>Best deals on individual products picked for you. Shop Now to grab the deals!</p> */}

            </div>
            <Slider {...settings}>
                {/* Your components go here */}

                <div className="slider-item p-2 text-dark">
                    <img src={pre} alt="" className='w-100' />
                    <div className='mt-1'>
                        <p style={{ fontWeight: '600', fontSize: '.9rem' }}>Enhanced Athelte
                        </p>
                        <button class="d-flex justify-content-center btn mt-4 category-btn w-100 flash-button" id="flash-button">Add to Cart</button>
                        {/* <p style={{ fontSize: '.9rem' }}>Flat 50% Off</p> */}
                        {/* <button id='flash-button' className='w-100 p-1'>Shop Now</button> */}
                    </div>
                </div>




                <div className="slider-item p-2 text-dark">
                    <img src={pre} alt="" className='w-100' />
                    <div className='mt-1'>
                        <p style={{ fontWeight: '600', fontSize: '.9rem' }}>Enhanced Athelte
                        </p>
                        <button class="d-flex justify-content-center btn mt-4 category-btn w-100 flash-button" id="flash-button">Add to Cart</button>
                        {/* <p style={{ fontSize: '.9rem' }}>Upto 40% off on Enhanced Athlete Products</p> */}
                        {/* <button id='flash-button' className='w-100 p-1'>Shop Now</button> */}
                    </div>
                </div>


                <div className="slider-item p-2 text-dark">
                    <img src={pre} alt="" className='w-100' />
                    <div className='mt-1'>
                        <p style={{ fontWeight: '600', fontSize: '.9rem' }}>Enhanced Athelte
                        </p>
                        <button class="d-flex justify-content-center btn mt-4 category-btn w-100 flash-button" id="flash-button">Add to Cart</button>
                        {/* <p style={{ fontSize: '.9rem' }}>Flat 43% Off</p> */}
                        {/* <button id='flash-button' className='w-100 p-1'>Shop Now</button> */}
                    </div>
                </div>


                <div className="slider-item p-2 text-dark">
                    <img src={pre} alt="" className='w-100' />
                    <div className='mt-1'>
                        <p style={{ fontWeight: '600', fontSize: '.9rem' }}>Enhanced Athelte
                        </p>
                        <button class="d-flex justify-content-center btn mt-4 category-btn w-100 flash-button" id="flash-button">Add to Cart</button>
                        {/* <p style={{ fontSize: '.9rem' }}>Upto 40% off on Enhanced Athlete Products.</p> */}
                        {/* <button id='flash-button' className='w-100 p-1'>Shop Now</button> */}
                    </div>
                </div>


                <div className="slider-item p-2 text-dark">
                    <img src={pre} alt="" className='w-100' />
                    <div className='mt-1'>
                        <p style={{ fontWeight: '600', fontSize: '.9rem' }}>Enhanced Athelte
                        </p>
                        <button class="d-flex justify-content-center btn mt-4 category-btn w-100 flash-button" id="flash-button">Add to Cart</button>
                        {/* <p style={{ fontSize: '.9rem' }}>Upto 40% off on Enhanced Athlete Products.</p> */}
                        {/* <button id='flash-button' className='w-100 p-1'>Shop Now</button> */}
                    </div>
                </div>


                <div className="slider-item p-2 text-dark">
                    <img src={pre} alt="" className='w-100' />
                    <div className='mt-1'>
                        <p style={{ fontWeight: '600', fontSize: '.9rem' }}>Enhanced Athelte
                        </p>
                        <button class="d-flex justify-content-center btn mt-4 category-btn w-100 flash-button" id="flash-button">Add to Cart</button>
                        {/* <p style={{ fontSize: '.9rem' }}>Upto 40% off on Enhanced Athlete Products.</p> */}
                        {/* <button id='flash-button' className='w-100 p-1'>Shop Now</button> */}
                    </div>
                </div>


                <div className="slider-item p-2 text-dark">
                    <img src={pre} alt="" className='w-100' />
                    <div className='mt-1'>
                        <p style={{ fontWeight: '600', fontSize: '.9rem' }}>Enhanced Athelte
                        </p>
                        <button class="d-flex justify-content-center btn mt-4 category-btn w-100 flash-button" id="flash-button">Add to Cart</button>
                        {/* <p style={{ fontSize: '.9rem' }}>Upto 40% off on Enhanced Athlete Products.</p> */}
                        {/* <button id='flash-button' className='w-100 p-1'>Shop Now</button> */}
                    </div>
                </div>


                <div className="slider-item p-2 text-dark">
                    <img src={pre} alt="" className='w-100' />
                    <div className='mt-1'>
                        <p style={{ fontWeight: '600', fontSize: '.9rem' }}>Enhanced Athelte
                        </p>
                        <button class="d-flex justify-content-center btn mt-4 category-btn w-100 flash-button" id="flash-button">Add to Cart</button>
                        {/* <p style={{ fontSize: '.9rem' }}>Upto 40% off on Enhanced Athlete Products.</p> */}
                        {/* <button id='flash-button' className='w-100 p-1'>Shop Now</button> */}
                    </div>
                </div>

            </Slider>
        </div>
    )
}

export default New
