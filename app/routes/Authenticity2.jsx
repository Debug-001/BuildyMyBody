import React from 'react'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import banner1mob from '../img/banner1mob.png'
const Authenticity2 = () => {
    return (
        <>
            <Navbar />
            <div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="input-group mb-3">

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Your 6 Digit Code Here"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </div>

                            <div className="input-group mb-3">

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Email"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </div>

                            <div className="input-group mb-3">

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Mobile Number"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </div>
                            <button id='flash-button' className='p-2'>Verify</button>

                        </div>
                        <div className="col d-none d-lg-block">
                            <div>
                                <img src={banner1mob} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                        <h4>PRODUCT</h4>
                        <h3>AUTHENTICITY TIPS</h3>
                    </div>
                    <div className="row ">
                        <div className="col text-center">
                            <p>Only accept products with an authentication sticker</p>
                        </div>
                        <div className="col text-center">
                            <p>Don’t accept products with stickers that have been scratched off</p>
                        </div>
                        <div className='col text-center'>
                            <p>Only buy from authorized retailers</p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Authenticity2
