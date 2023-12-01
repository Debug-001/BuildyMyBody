import React from 'react';
import whey from '../../img/whey.png';
import gainer from '../../img/gainer.png';
import workout from '../../img/workout.png';
import pre from '../../img/pre.png';
import creatine from '../../img/creatine.png';
import amino from '../../img/amino.png';
import { Link } from '@remix-run/react';

const Popular = () => {
  const tiles = [
    { title: 'Whey Protein', url: 'whey-protein', image: whey },
    { title: 'Mass Gainer', url: 'mass-gainer-1', image: gainer },
    { title: 'Creatine', url: 'creatine', image: creatine },
    { title: 'Amino Acids/BCAAs', url: 'amino-acids-bcaas-1', image: amino },
    {
      title: 'Pre/Post Workout',
      url: 'pre-post-workout',
      image: pre,
    },
    {
      title: 'Workout Essentials',
      url: 'workout-essentials',
      image: workout,
    },
  ];
  return (
    <>
      <div className="container-fluid" data-aos="fade-up">
        <div className="text-center">
          <h1 className="font-weight-bold custom-heading3">
            <em style={{ color: '#ff2828' }}>Popular in Sports Nutrition</em>
          </h1>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {tiles.map((tile) => (
            <Link to={`/products/${tile.url}`} className="col" key={tile.url}>
              <div className="certificate-card ">
                <p className="text-center mt-4 ">
                  <img src={tile.image} className="w-50" alt="" />
                </p>
                <div className="text-center">
                  <span
                    style={{ fontWeight: 'bold', fontSize: '1rem' }}
                    className="mt-2 text-dark"
                  >
                    {tile.title}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Popular;
