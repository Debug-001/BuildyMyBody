import React, { useState } from 'react';
// import banner1 from '../../img/discount-banner1.jpg';
// import banner2 from '../../img/discount-banner2.jpg';
// import banner3 from '../../img/discount-banner3.jpg';
import dubai from '../../img/dubai.png';
import dubaimob from '../../img/dubaimob.png';


const Carousel = () => {


  return (
    <section className='p-3' >
      <div>
        <img src={dubai} className='w-100 d-none d-lg-block' style={{ borderRadius: '10px' }} alt="logo-dubai" />
        <img src={dubaimob} className='w-100 d-block d-lg-none' style={{ borderRadius: '10px' }} alt="logo-dubai" />
      </div>
    </section>
  );
};

export default Carousel;
