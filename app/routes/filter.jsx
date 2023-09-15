import React, { useEffect, useState } from 'react';
import { Form, NavLink } from '@remix-run/react';
import Protein from '../../dist/client/img/protien.png';

const Filter = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryHover = (category) => {
        setSelectedCategory(category);
    };

    const handleFeaturesHover = () => {
        setSelectedCategory('Protein');
    };

    const handleFeaturesLeave = () => {
        setSelectedCategory(null);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link cus-1" href="#" onMouseEnter={handleFeaturesHover} onMouseLeave={handleFeaturesLeave}>Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <div className={`row cus ${selectedCategory ? 'show' : ''}`} id="features-column">
                    <div className="col-4">
                        <p onMouseEnter={() => handleCategoryHover('Protein')} style={{ fontSize: '1.6rem', cursor: 'pointer' }} className='filter-hover' >Protien</p>
                        <p onMouseEnter={() => handleCategoryHover('Gainers')} style={{ fontSize: '1.6rem', cursor: 'pointer' }} className='mt-3 filter-hover'>Gainers</p>
                        <p onMouseEnter={() => handleCategoryHover('PrePostWorkout')} style={{ fontSize: '1.6rem', cursor: 'pointer' }} className='mt-3 filter-hover'>Pre/Post Workout</p>
                        <p onMouseEnter={() => handleCategoryHover('WorkoutEssentials')} style={{ fontSize: '1.6rem', cursor: 'pointer' }} className='mt-3 filter-hover'>Workout Essentials</p>
                    </div>
                    <div className="vl-2"></div>
                    <div className="col filter-size">
                        {selectedCategory === 'Protein' && (
                            <div className="content row">
                                <div className="col ">
                                    <NavLink to={'/'}>
                                        <p
                                            className="ml-5"

                                        >
                                            Whey Protein
                                        </p>
                                    </NavLink>
                                    <NavLink to={'/'}>
                                        <p
                                            className="ml-5"

                                        >
                                            Whey Blend
                                        </p>
                                    </NavLink>
                                    <NavLink to={'/'}>
                                        <p
                                            className="ml-5"

                                        >
                                            Whey Protein Isolate
                                        </p>
                                    </NavLink>

                                </div>
                                <div className="col">

                                    <img src={Protein} className="w-50" alt="" />


                                </div>
                            </div>
                        )}
                        {selectedCategory === 'Gainers' && (
                            <div className="content row">
                                <div className="col">
                                    <NavLink to={'/'}>
                                        <p
                                            className="ml-5"

                                        >
                                            Mass Gainer
                                        </p>
                                    </NavLink>
                                    <NavLink to={'/'}>
                                        <p
                                            className="ml-5"

                                        >
                                            Weight Gainer
                                        </p>
                                    </NavLink>

                                </div>
                                <div className="col">

                                    <img src={Protein} className="w-50" alt="" />


                                </div>
                            </div>
                        )}
                        {selectedCategory === 'PrePostWorkout' && (
                            <div className="content row">
                                <div className="col">
                                    <NavLink to={'/'}>
                                        <p
                                            className="ml-5"

                                        >
                                            Pre-Workout Pre-Workout
                                        </p>
                                    </NavLink>
                                    <NavLink to={'/'}>
                                        <p
                                            className="ml-5"

                                        >
                                            Amino Acids && BCAAs
                                        </p>
                                    </NavLink>
                                    <NavLink to={'/'}>
                                        <p
                                            className="ml-5"

                                        >
                                            Glutamine
                                        </p>
                                    </NavLink>
                                    <NavLink to={'/'}>
                                        <p
                                            className="ml-5"

                                        >
                                            Carnitine
                                        </p>
                                    </NavLink>

                                </div>
                                <div className="col">

                                    <img src={Protein} className="w-50" alt="" />


                                </div>
                            </div>
                        )}
                        {selectedCategory === 'WorkoutEssentials' && (
                            <div className="content row">
                                <div className="col">
                                    <NavLink to={'/'}>
                                        <p
                                            className="ml-5"

                                        >
                                            Testosterone Support
                                        </p>
                                    </NavLink>
                                    <NavLink to={'/'}>
                                        <p
                                            className="ml-5"

                                        >
                                            Multivitamins
                                        </p>
                                    </NavLink>
                                    <NavLink to={'/'}>
                                        <p
                                            className="ml-5"

                                        >
                                            Fat Burner
                                        </p>
                                    </NavLink>

                                </div>
                                <div className="col">

                                    <img src={Protein} className="w-50" alt="" />


                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter;
