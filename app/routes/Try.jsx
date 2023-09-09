// AboutUs.js

import React from 'react';
import First from '../../dist/client/img/first.jpeg';

const Try = ({email, aboutUs, phone, website, name, img}) => {
  return (
    <div className="about-us">
      <p>image: {img}</p>

      <p>
        <span className="bold">Email:</span>
        <span className="ml-2 bold2" style={{cursor: 'pointer'}}>
          {email}
        </span>{' '}
      </p>
      <p>
        <span className="bold">Phone:</span>
        <span className="ml-2 bold2" style={{cursor: 'pointer'}}>
          {phone}
        </span>{' '}
      </p>
      <p>
        <span className="bold">Website:</span>
        <span className="ml-2 bold2" style={{cursor: 'pointer'}}>
          {website}
        </span>{' '}
      </p>
      <p>
        <span className="bold">About Us:</span>
        <span className="ml-2 bold2">{aboutUs}</span>{' '}
      </p>
    </div>
  );
};

export default Try;
