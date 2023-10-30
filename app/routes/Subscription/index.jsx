import React from 'react'
import protien from '../../img/protien.png'
const index = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3 className='text-center'>Subscription Plan</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div class="card" >
                            <img src={protien} class="card-img-top" alt="..." />
                            <div class="card-body flex-column" style={{ background: 'none', borderColor: 'black' }}>
                                <h5 class="card-title">Every 3 Days</h5>
                                <p class="card-text">Save 30%</p>
                                <a href="#" class="btn btn-primary mt-3">Buy Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div class="card" >
                            <img src={protien} class="card-img-top" alt="..." />
                            <div class="card-body flex-column" style={{ background: 'none', borderColor: 'black' }}>
                                <h5 class="card-title">Every 1 week</h5>
                                <p class="card-text">Save 25%</p>
                                <a href="#" class="btn btn-primary mt-3">Buy Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div class="card" >
                            <img src={protien} class="card-img-top" alt="..." />
                            <div class="card-body flex-column" style={{ background: 'none', borderColor: 'black' }}>
                                <h5 class="card-title">Every 1 Month</h5>
                                <p class="card-text">Save 15%</p>
                                <a href="#" class="btn btn-primary mt-3">Buy Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div class="card" >
                            <img src={protien} class="card-img-top" alt="..." />
                            <div class="card-body flex-column" style={{ background: 'none', borderColor: 'black' }}>
                                <h5 class="card-title">Every 1 Year</h5>
                                <p class="card-text">Save 10%</p>
                                <a href="#" class="btn btn-primary mt-3">Buy Now</a>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="row">
                    <div className="col">
                        <h3 className='text-center'>Benefits</h3>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default index
