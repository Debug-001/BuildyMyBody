import { useState } from 'react';
import Protien from '../../../dist/client/img/protien.png'
const Testimonials = () => {
    return (
        <div id="carouselExampleIndicators" style={{ background: '#FAF4EF' }} className="carousel slide" data-ride="carousel">
            <h2 className='text-center'>Testimonials</h2>
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active d-flex justify-content-center">

                    <img className="d-block " src={Protien} alt="First slide" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5 style={{ color: '#474544 ' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, voluptate.</h5>

                    </div>

                </div>

            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};

export default Testimonials;
