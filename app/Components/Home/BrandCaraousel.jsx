import { Link } from '@remix-run/react';
import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';

const BrandCaraousel = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  return (
    <>
      <section id="fitness-car" style={{ background: '#FAF4EF' }} >
        <div className="container">
          <h1 className="fitnessarticel d-flex justify-content-center font-weight-bold custom-heading">
            <em className='mt-5'>FITNESS ARTICLES</em>
          </h1>
          <div className="fitness-slider">
            <Slider
              asNavFor={nav1}
              ref={slider2}
              slidesToShow={3}
              swipeToSlide={true}
              focusOnSelect={true}
              responsive={[
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                  },
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: true,
                  },
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: true,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                  },
                },
              ]}
            >
              <div className="card" id="articles-card">
                <img
                  className="card-img-articles"
                  src="/img/article1.jpg"
                  alt="Card image cap"
                />
                <Link to="/blog" className="card-content2">
                  <p className="mt-3">
                    {' '}
                    <em style={{ color: '#474544 ' }}>10th June, 2019</em>
                  </p>
                  <h2
                    className="font-weight-bold mt-2"
                    style={{ color: '#474544 ' }}
                  >
                    Fitness Hacks During Navratri
                  </h2>

                  <Link
                    to="#"
                    className=" btn category-btn  d-flex justify-content-center mt-4"
                  >
                    Read More
                  </Link>
                </Link>
              </div>
              <div className="card" id="articles-card">
                <img
                  className="card-img-articles"
                  src="/img/article2.jpg"
                  alt="Card image cap"
                />
                <Link to="/blog" className="card-content2">
                  <p className="mt-3 ">
                    {' '}
                    <em style={{ color: '#474544 ' }}>10th June, 2019</em>
                  </p>
                  <h2
                    className="font-weight-bold mt-2"
                    style={{ color: '#474544 ' }}
                  >
                    Fitness Hacks During Navratri
                  </h2>
                  <Link
                    to="#"
                    className=" btn category-btn  d-flex justify-content-center mt-4"
                  >
                    Read More
                  </Link>
                </Link>
              </div>
              <div className="card" id="articles-card">
                <img
                  className="card-img-articles"
                  src="/img/article3.jpg"
                  alt="Card image cap"
                />
                <Link to="/blog" className="card-content2">
                  <p className="mt-3">
                    {' '}
                    <em style={{ color: '#474544 ' }}>10th June, 2019</em>
                  </p>
                  <h2
                    className="font-weight-bold mt-2"
                    style={{ color: '#474544 ' }}
                  >
                    Fitness Hacks During Navratri
                  </h2>
                  <Link
                    to="#"
                    className=" btn category-btn  d-flex justify-content-center mt-4"
                  >
                    Read More
                  </Link>
                </Link>
              </div>
              <div className="card" id="articles-card">
                <img
                  className="card-img-articles"
                  src="/img/article4.jpg"
                  alt="Card image cap"
                />
                <Link to="/blog" className="card-content2">
                  <p className="mt-3">
                    {' '}
                    <em style={{ color: '#474544 ' }}>10th June, 2019</em>
                  </p>
                  <h2
                    className="font-weight-bold mt-2"
                    style={{ color: '#474544 ' }}
                  >
                    Fitness Hacks During Navratri
                  </h2>
                  <Link
                    to="#"
                    className=" btn category-btn  d-flex justify-content-center mt-4"
                  >
                    Read More
                  </Link>
                </Link>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section id="brand-car" style={{ background: '#FAF4EF' }} >
        <div className="container mt-5">
          <h1 className="d-flex font-weight-bold justify-content-center custom-heading">
            <em>BRANDS</em>
          </h1>
          <div className="brands-slider">
            <Slider
              asNavFor={nav1}
              ref={slider2}
              slidesToShow={3}
              swipeToSlide={true}
              focusOnSelect={true}
              responsive={[
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                  },
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: true,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                  },
                },
              ]}
            >
              <div className="card  d-flex justify-content-center">
                <img
                  className="card-img-brand	  "
                  src="/img/bc1.jpg"
                  alt="Card image cap"
                />
              </div>
              <div className="card  d-flex justify-content-center">
                <img
                  className="card-img-brand  "
                  src="/img/bc2.jpg"
                  alt="Card image cap"
                />
              </div>
              <div className="card   d-flex justify-content-center">
                <img
                  className="card-img-brand  "
                  src="/img/bc3.jpg"
                  alt="Card image cap"
                />
              </div>
              <div className="card   d-flex justify-content-center">
                <img
                  className="card-img-brand  "
                  src="/img/bc4.jpg"
                  alt="Card image cap"
                />
              </div>
              <div className="card   d-flex justify-content-center">
                <img
                  className="card-img-brand  "
                  src="/img/bc5.jpg"
                  alt="Card image cap"
                />
              </div>
              <div className="card  d-flex justify-content-center">
                <img
                  className="card-img-brand  "
                  src="/img/bc6.jpg"
                  alt="Card image cap"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandCaraousel;
