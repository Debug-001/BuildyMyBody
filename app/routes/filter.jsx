import React, { useEffect, useState } from 'react';
import { Form, NavLink } from '@remix-run/react';
import Protien2 from '../../dist/client/img/protien2.png';
import on from '../../dist/client/img/on.png';
import mt from '../../dist/client/img/mt.jpg';
import uni from '../../dist/client/img/uni.jpg';
import cl from '../../dist/client/img/cl.jpg';
import whey from '../../dist/client/img/whey.png';
import gainer from '../../dist/client/img/gainer.png';
import workout from '../../dist/client/img/workout.png';
import pre from '../../dist/client/img/pre.png';

import { BsSearch } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
const Filter = () => {
    // const [selectedCategory, setSelectedCategory] = useState(null);
    // const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);

    // const handleFeaturesClick = (category) => {
    //     setSelectedCategory(category === selectedCategory ? null : category);
    // };

    // const handleSubMenuLeave = () => {
    //     if (!isNavbarCollapsed) {
    //         setSelectedCategory(null);
    //     }
    // };

    // const handleNavbarToggle = () => {
    //     setIsNavbarCollapsed(!isNavbarCollapsed);
    //     setSelectedCategory(null);
    // };


    return (

        <>


            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">My Website</a>


                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>


                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav ">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Services
                            </a>
                            <div class="dropdown-menu" aria-labelledby="servicesDropdown">
                                <a class="dropdown-item" href="#">Service 1</a>
                                <a class="dropdown-item" href="#">Service 2</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item dropdown-toggle" href="#" id="moreServicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Protien
                                </a>
                                <div class="dropdown-menu fil-menu" aria-labelledby="moreServicesDropdown">
                                    <a class="dropdown-item" href="#">Whey Protien</a>
                                    <a class="dropdown-item" href="#">Whey Blend</a>
                                    <a class="dropdown-item" href="#">Whey Protien Isolate </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>


    );
};

export default Filter;
