import React, { useEffect, useState } from 'react';
import { Form, NavLink } from '@remix-run/react';
import Protein from '../../dist/client/img/protien.png';

const Filter = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);

    const handleFeaturesClick = (category) => {
        setSelectedCategory(category === selectedCategory ? null : category);
    };

    const handleSubMenuLeave = () => {
        if (!isNavbarCollapsed) {
            setSelectedCategory(null);
        }
    };

    const handleNavbarToggle = () => {
        setIsNavbarCollapsed(!isNavbarCollapsed);
        setSelectedCategory(null);
    };



    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={handleNavbarToggle}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isNavbarCollapsed ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a
                                className={`nav-link cus-1 ${selectedCategory === 'Protein' ? 'active' : ''}`}
                                href="#"
                                onClick={() => handleFeaturesClick('Protein')}
                            >
                                Features
                            </a>                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container-fluid">
                <div className={`row cus ${selectedCategory ? 'show' : ''}`} id="features-column" onMouseLeave={handleSubMenuLeave}>
                    <div className="col-4">
                        <p
                            onClick={() => handleFeaturesClick('Protein')}
                            style={{
                                fontSize: '1.6rem',
                                cursor: 'pointer',
                                fontWeight: selectedCategory === 'Protein' ? 'bold' : 'normal', // Conditional fontWeight
                            }}
                            className={`filter-hover ${selectedCategory === 'Protein' ? 'active' : ''}`}
                        >
                            Protein
                        </p>
                        <p onClick={() => handleFeaturesClick('Gainers')} style={{ fontSize: '1.6rem', cursor: 'pointer' }} className='mt-3 filter-hover'>Gainers</p>
                        <p onClick={() => handleFeaturesClick('PrePostWorkout')} style={{ fontSize: '1.6rem', cursor: 'pointer' }} className='mt-3 filter-hover'>Pre/Post Workout</p>
                        <p onClick={() => handleFeaturesClick('WorkoutEssentials')} style={{ fontSize: '1.6rem', cursor: 'pointer' }} className='mt-3 filter-hover'>Workout Essentials</p>
                        <button className='category-btn btn w-100 mt-3'>
                            Shop All
                        </button>
                    </div>
                    <div className="vl-2"></div>
                    <div className="col filter-size submenuuuu">
                        {selectedCategory === 'Protein' && (
                            <div className="content row">
                                <div className="col-lg-6 col-md-12">
                                    <NavLink to={'/'}>
                                        <p className="ml-5">Whey Protein</p>
                                    </NavLink>
                                    <NavLink to={'/'}>
                                        <p className="ml-5">Whey Blend</p>
                                    </NavLink>
                                    <NavLink to={'/'}>
                                        <p className="ml-5">Whey Protein Isolate</p>
                                    </NavLink>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <img src={Protein} className="w-50" alt="" />
                                </div>
                            </div>
                        )}
                        {selectedCategory === 'Gainers' && (
                            <div className="content row">
                                <div className="col-lg-6 col-md-12">
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
                                <div className="col-lg-6 col-md-12">

                                    <img src={Protein} className="w-50" alt="" />


                                </div>
                            </div>
                        )}
                        {selectedCategory === 'PrePostWorkout' && (
                            <div className="content row">
                                <div className="col-lg-6 col-md-12">
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
                                <div className="col-lg-6 col-md-12">

                                    <img src={Protein} className="w-50" alt="" />


                                </div>
                            </div>
                        )}
                        {selectedCategory === 'WorkoutEssentials' && (
                            <div className="content row">
                                <div className="col-lg-6 col-md-12">
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
                                <div className="col-lg-6 col-md-12">

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
