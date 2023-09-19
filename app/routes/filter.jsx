import React, { useEffect, useState } from 'react';
import { Form, NavLink } from '@remix-run/react';
import Protien2 from '../../dist/client/img/protien2.png';
import { BsSearch } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { RiAccountCircleLine } from 'react-icons/ri';
import { BiCategoryAlt } from 'react-icons/bi'
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
            <nav className="navbar navbar-expand-lg navbar-light " style={{ background: 'black' }}>
                <NavLink className="navbar-brand ml-lg-4" to="/">
                    <img className="logo_img w-75" src="/img/logo.png" alt="" />
                </NavLink>
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
                    <span className="navbar-toggler-icon ">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </span>
                </button>
                <div className={`collapse navbar-collapse ${isNavbarCollapsed ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ml-auto mr-auto">
                        <div class="dropdown show">
                            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown link
                            </a>

                            <div class="dropdown-menu drop-custom" aria-labelledby="dropdownMenuLink">
                                <div className="row">
                                    <div className="col d-flex">
                                        <div className='  '>
                                            <div className='d-flex flex-column align-items-center'>
                                                <BiCategoryAlt />
                                                <span>hello</span>
                                            </div>
                                        </div>
                                        <div className='  '>
                                            <div className='d-flex flex-column align-items-center'>
                                                <img src={Protien2} alt="" style={{ width: '5rem' }} />
                                                <span>hello</span>
                                            </div>
                                        </div>
                                        <div className='  '>
                                            <div className='d-flex flex-column align-items-center'>
                                                <img src={Protien2} alt="" style={{ width: '5rem' }} />
                                                <span>hello</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col d-flex">
                                        <div className='  '>
                                            <div className='d-flex flex-column align-items-center'>
                                                <img src={Protien2} alt="" style={{ width: '5rem' }} />
                                                <span>hello</span>
                                            </div>
                                        </div>
                                        <div className='  '>
                                            <div className='d-flex flex-column align-items-center' >
                                                <img src={Protien2} alt="" style={{ width: '5rem' }} />
                                                <span>hello</span>
                                            </div>
                                        </div>


                                    </div>



                                </div>



                            </div>
                        </div>
                        <li className="nav-item">
                            <NavLink
                                className={`nav-link cus-1 text-light ${selectedCategory === 'Protein' ? 'active' : ''}`}
                                to="#"
                                onClick={() => handleFeaturesClick('Protein')}
                            >
                                All Products
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={'nav-link active text-light'} to='/blog'>Blog</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={'nav-link active text-light'} to='/contact'>Contact Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={'nav-link active text-light'} to='/certificates'>Certifications</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={'nav-link active text-light'} to='/authenticity'>Authenticity</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={'nav-link active text-light'} to='/filter'>Filter</NavLink>
                        </li>

                    </ul>
                    <ul className='navbar-nav  ml-auto'>
                        <div className="d-flex ">
                            <div className="icon-search ">
                                <li >
                                    <NavLink to="/search" >
                                        <BsSearch size={18} />
                                    </NavLink>
                                </li>
                            </div>

                            <div className="icon-cart ml-3">
                                <li>
                                    <NavLink to="/cart">
                                        <FiShoppingCart size={18} />
                                    </NavLink>
                                </li>
                            </div>
                            <div className="icon-cart ml-3">
                                <li>
                                    <NavLink to="/account" className={'border border-light p-2'}>
                                        Account
                                    </NavLink>
                                </li>
                            </div>
                        </div>
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
                            <NavLink to='/products/all'>Shop All</NavLink>
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
