// AboutUs.js

import React from 'react';

const Try = ({ email, aboutUs, phone, website, name }) => {
    return (
        <div className="about-us">

            <p>Name:{name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <p>About Us: {aboutUs}</p>
        </div>
    );
};

export default Try;
