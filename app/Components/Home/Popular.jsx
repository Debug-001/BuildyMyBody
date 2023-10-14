import React from 'react'
import whey from '../../../dist/client/img/whey.png';
import gainer from '../../../dist/client/img/gainer.png';
import workout from '../../../dist/client/img/workout.png';
import pre from '../../../dist/client/img/pre.png';

const Popular = () => {
    return (
        <>
            <div className='container-fluid d-none d-lg-block'>
                <div className="text-center">
                    <h1 class="font-weight-bold custom-heading3"><em>Popular in Sports Nutrition</em></h1>
                </div>
                <div className="row">

                    <div className="col-lg-4 col-md-4 col-sm-4  ">
                        <div className="certificate-card ">
                            <p className="text-center mt-4 ">
                                <img
                                    src={whey}
                                    className="w-50"
                                    alt=""
                                />
                            </p>
                            <div className="text-center">
                                <span
                                    style={{ fontWeight: 'bold', fontSize: '1rem' }}
                                    className="mt-2 text-dark"
                                >
                                    Whey Protein
                                </span>
                            </div>

                        </div>

                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4  ">
                        <div className="certificate-card">
                            <p className="text-center mt-4">
                                <img
                                    src={gainer}
                                    className="w-50"
                                    alt=""
                                />
                            </p>
                            <div className="text-center">
                                <span
                                    style={{ fontWeight: 'bold', fontSize: '1rem' }}
                                    className="mt-2 text-center text-dark"
                                >
                                    Mass Gainer
                                </span>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4  ">
                        <div className="certificate-card ">
                            <p className="text-center mt-4 ">
                                <img
                                    src={whey}
                                    className="w-50"
                                    alt=""
                                />
                            </p>

                            <div className="text-center">
                                <span
                                    className="text-center mt-2 text-dark"
                                    style={{ fontWeight: 'bold', fontSize: '1rem' }}
                                >
                                    Creatine
                                </span>
                            </div>
                        </div>

                    </div>
                </div>



                <div className="row">





                    <div className="col-lg-4 col-md-4 col-sm-4  ">
                        <div className="certificate-card ">
                            <p className="text-center mt-4 ">
                                <img
                                    src={whey}
                                    className="w-50"
                                    alt=""
                                />
                            </p>
                            <div className="text-center">
                                <span
                                    className="text-center mt-2 text-dark"
                                    style={{ fontWeight: 'bold', fontSize: '1rem' }}
                                >
                                    Amino Acids/BCAAs
                                </span>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4  ">
                        <div className="certificate-card">
                            <p className="text-center mt-4">
                                <img
                                    src={pre}
                                    className="w-50"
                                    alt=""
                                />
                            </p>
                            <div className="text-center">
                                <span
                                    className="text-center mt-2 text-dark"
                                    style={{ fontWeight: 'bold', fontSize: '1rem' }}
                                >
                                    Pre/Post Workout
                                </span>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4 ">
                        <div className="certificate-card">
                            <p className="text-center mt-4">
                                <img
                                    src={workout}
                                    className="w-50"
                                    alt=""
                                />
                            </p>
                            <div className="text-center">
                                <span
                                    className="text-center mt-2 text-dark"
                                    style={{ fontWeight: 'bold', fontSize: '1rem' }}
                                >
                                    Workout Essentials
                                </span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>


            <div className="container-fluid d-lg-none">
                <div className="text-center">
                    <h1 class="font-weight-bold custom-heading3"><em>Popular in Sports Nutrition</em></h1>
                </div>
                <div className="row">
                    <div className="col-6  ">
                        <div className="certificate-card ">
                            <p className="text-center mt-4 ">
                                <img
                                    src={whey}
                                    className="w-50"
                                    alt=""
                                />
                            </p>
                            <div className="text-center">
                                <span
                                    style={{ fontWeight: 'bold', fontSize: '1rem' }}
                                    className="mt-2 text-dark"
                                >
                                    Whey Protein
                                </span>
                            </div>

                        </div>

                    </div>


                    <div className="col-6  ">
                        <div className="certificate-card">
                            <p className="text-center mt-4">
                                <img
                                    src={gainer}
                                    className="w-50"
                                    alt=""
                                />
                            </p>
                            <div className="text-center">
                                <span
                                    style={{ fontWeight: 'bold', fontSize: '1rem' }}
                                    className="mt-2 text-center text-dark"
                                >
                                    Mass Gainer
                                </span>
                            </div>
                        </div>

                    </div>
                </div>





                <div className="row">
                    <div className="col-6  ">
                        <div className="certificate-card ">
                            <p className="text-center mt-4 ">
                                <img
                                    src={whey}
                                    className="w-50"
                                    alt=""
                                />
                            </p>

                            <div className="text-center">
                                <span
                                    className="text-center mt-2 text-dark"
                                    style={{ fontWeight: 'bold', fontSize: '1rem' }}
                                >
                                    Creatine
                                </span>
                            </div>
                        </div>

                    </div>

                    <div className="col-6  ">
                        <div className="certificate-card ">
                            <p className="text-center mt-4 ">
                                <img
                                    src={whey}
                                    className="w-50"
                                    alt=""
                                />
                            </p>
                            <div className="text-center">
                                <span
                                    className="text-center mt-2 text-dark"
                                    style={{ fontWeight: 'bold', fontSize: '1rem' }}
                                >
                                    Amino Acids/BCAAs
                                </span>
                            </div>
                        </div>

                    </div>
                </div>




                <div className="row">
                    <div className="col-6  ">
                        <div className="certificate-card">
                            <p className="text-center mt-4">
                                <img
                                    src={pre}
                                    className="w-50"
                                    alt=""
                                />
                            </p>
                            <div className="text-center">
                                <span
                                    className="text-center mt-2 text-dark"
                                    style={{ fontWeight: 'bold', fontSize: '1rem' }}
                                >
                                    Pre/Post Workout
                                </span>
                            </div>
                        </div>

                    </div>

                    <div className="col-6 ">
                        <div className="certificate-card">
                            <p className="text-center mt-4">
                                <img
                                    src={workout}
                                    className="w-50"
                                    alt=""
                                />
                            </p>
                            <div className="text-center">
                                <span
                                    className="text-center mt-2 text-dark"
                                    style={{ fontWeight: 'bold', fontSize: '1rem' }}
                                >
                                    Workout Essentials
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Popular
