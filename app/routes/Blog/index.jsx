import React from 'react';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';

function Blog() {
  const navigate = useNavigate();

  const navigateToBlog2 = () => {
    navigate('/blog2');
  };

  const navigateToFood = () => {
    navigate('/blog_food');
  };
  const navigateToHealthy = () => {
    navigate('/blog_healthy');
  };
  const navigateToNavratri = () => {
    navigate('/blog_navratri');
  };
  const navigateToFitness = () => {
    navigate('/blog_fitness');
  };
  const navigateToAll = () => {
    navigate('/blog');
  };

  return (
    <>
      <Navbar />
      <div className="main-div m-0 p-0" style={{ background: 'black' }}>

        <div className="container">
          <p className="text-center  blogs-text" style={{ color: 'white' }}>BLOGS</p>
          {/* <nav className="nav nav-pills flex-column flex-sm-row  justify-content-center blog-links mt-3">
            <a
              className=" text-sm-center nav-link blog-colour "
              onClick={navigateToAll}
              href="#"
              style={{ color: 'white' }}
            >
              All
            </a>
            <a
              className=" text-sm-center nav-link blog-colour"
              onClick={navigateToFitness}
              href="#"
              style={{ color: 'white' }}
            >
              Fitness
            </a>
            <a
              className=" text-sm-center nav-link blog-colour"
              onClick={navigateToFood}
              href="#"
              style={{ color: 'white' }}
            >
              Food
            </a>
            <a
              className=" text-sm-center nav-link blog-colour"
              onClick={navigateToHealthy}
              href="#"
              style={{ color: 'white' }}
            >
              Healthy Eating
            </a>
            <a
              className=" text-sm-center nav-link blog-colour"
              onClick={navigateToNavratri}
              href="#"
              style={{ color: 'white' }}
            >
              Navratri
            </a>
          </nav> */}
          <div className="row no-gutters mt-5 blog-margin">
            <div className="col-lg-6 col-sm-12 col-md-12 ">
              <img src="../img/blog-1.jpg" className="img-fluid login-img " />
            </div>

            <div className="col  ">
              <p className="text-center mt-2 blog-name" style={{ color: 'white' }}>
                Fitness Hacks During Navratri:
              </p>
              <p className="text-center pt-lg-0 pb-lg-0 pl-lg-4 pr-lg-4 mt-5" style={{ color: 'white' }}>
                Navratri time is here. A great opportunity to detox your body. But
                there are some things you should keep in mind while fasting - to
                balance out the pros and cons. Today we’ll learn them very quickly
                -
              </p>
              <p className="text-center">
                {/* <button type="submit" className="btn font-weight-bold mt-4 blog-btn text-light"> Read More</button> */}
                <a
                  className="btn font-weight-bold mt-4 blog-btn text-light"
                  target="_blank"
                  href="https://m.timesofindia.com/life-style/food-news/5-tips-that-will-make-navratri-fasting-healthier-for-you/photostory/98935923.cms"
                  style={{ color: 'white' }}
                >
                  Read More
                </a>
              </p>
            </div>
          </div>

          <div className="row no-gutters mt-5">
            <div className="col-md-12 d-lg-none d-md-block ">
              <img src="../img/blog-2.jpg" className="img-fluid login-img " />
            </div>
            <div className=" col-lg-6 col-sm-12 col-md-12">
              <p className="text-center mt-2 blog-name" style={{ color: 'white' }}>Hydration is the key:</p>
              <p className="text-center mt-5 mr-lg-2" style={{ color: 'white' }}>
                Fast or no fast, water intake is super important for your body.
                During fasting, the body’s stored energy resources are used.
                That’s why hydration becomes even more necessary. With fruit
                intake, water needs can be managed but drinking it is always
                better, to be on the safer side. Fruit juice is a good middle way
                between this water and fruit dilemma. Try that as an experiment.
              </p>
              <p className="text-center">
                {/* <button type="submit" className="btn font-weight-bold mt-4 blog-btn text-light " > Read More</button> */}
                <a
                  className="btn font-weight-bold mt-4 blog-btn text-light"
                  target="_blank"
                  href="https://familydoctor.org/athletes-the-importance-of-good-hydration/"
                  style={{ color: 'white' }}
                >
                  Read More
                </a>
              </p>
            </div>
            <div className="col-lg-6 d-none d-lg-block ">
              <img src="../img/blog-2.jpg" className="img-fluid login-img" />
            </div>
          </div>

          <div className="row no-gutters mt-5">
            <div className="col-lg-6 col-sm-12 col-md-12">
              <img src="../img/blog-3.jpg" className="img-fluid login-img" />
            </div>
            <div className="col  ">
              <p className="text-center mt-2 blog-name" style={{ color: 'white' }}>
                Avoid fried, oily and sugary stuff:
              </p>
              <p className="text-center mt-5 ml-lg-2" style={{ color: 'white' }}>
                Potatoes might become your friend during Navratri time. There are
                so many chips available in the market made of things other than
                just potatoes. But they’re not a healthy option. Too much oil in
                them. Plus, sugar anyways is empty calories. This doesn’t mean you
                can’t have sweets. Just make sure to have them in moderation. Not
                to mention, binging will ruin the purpose of fast. Remember you’re
                fasting for detoxing and giving your body a break.
              </p>
              <p className="text-center">
                {/* <button type="submit" className="btn font-weight-bold mt-4 blog-btn text-light"> Read More</button> */}
                <a
                  className="btn font-weight-bold mt-4 blog-btn text-light"
                  target="_blank"
                  href=" https://www.healthline.com/nutrition/greasy-food#5.-May-raise-your-risk-of-diabetes"
                  style={{ color: 'white' }}
                >
                  Read More
                </a>
              </p>
            </div>
          </div>

          <div className="row no-gutters mt-5">
            <div className="col-md-12 d-lg-none d-md-block ">
              <img src="../img/blog-2.jpg" className="img-fluid login-img " />
            </div>
            <div className=" col-lg-6 col-sm-12 col-md-12">
              <p className="text-center mt-2 blog-name" style={{ color: 'white' }}>
                How to increase lifting capacity?
              </p>
              <p className="text-center mt-5 mr-lg-2" style={{ color: 'white' }}>
                Lifting capacity is defined as the amount of weight you can lift.
                Now, this measurement can be taken in the span of an hour or a
                week. But in general, high lifting capacity is often equated with
                your strength because squatting 100 kilos for 5 reps is equivalent
                to 10 reps of 50 kilos. But who’s stronger?
              </p>
              <p className="text-center">
                {/* <button type="submit" className="btn font-weight-bold mt-4 blog-btn text-light "> Read More</button> */}
                <a
                  className="btn font-weight-bold mt-4 blog-btn text-light"
                  target="_blank"
                  href="  https://www.wikihow.com/Lift-Heavier-Weights"
                  style={{ color: 'white' }}
                >
                  Read More
                </a>
              </p>
            </div>
            <div className="col-lg-6 d-none d-lg-block ">
              <img src="../img/blog-4.jpg" className="img-fluid login-img" />
            </div>
          </div>
          {/* <div className="row">
            <div className="col d-flex justify-content-center blog-next-btn-flex mt-5">
              <p className="text-center">
                {' '}
                <button
                  type="submit"
                  className="btn font-weight-bold w-100 blog-next-btn mt-3"
                  style={{ color: 'white' }}
                >
                  {' '}
                  <AiOutlineArrowLeft />
                </button>
              </p>
              <p className="text-center">
                <button
                  type="submit"
                  className="btn font-weight-bold mt-3 ml-3 blog-next-btn"
                  style={{ color: 'white' }}
                >
                  {' '}
                  1
                </button>
              </p>
              <p className="text-center">
                <button
                  type="submit"
                  onClick={navigateToBlog2}
                  className="btn font-weight-bold mt-3 blog-next-btn"
                  style={{ color: 'white' }}
                >
                  {' '}
                  2
                </button>
              </p>
              <p className="text-center">
                <button
                  type="submit"
                  onClick={navigateToBlog2}
                  className="btn font-weight-bold  w-100 blog-next-btn mt-3 "
                  style={{ color: 'white' }}
                >
                  {' '}
                  <AiOutlineArrowRight className="" />
                </button>
              </p>
            </div>
          </div> */}
          <br />
        </div>

      </div>
      <Footer />
    </>
  );
}

export default Blog;
