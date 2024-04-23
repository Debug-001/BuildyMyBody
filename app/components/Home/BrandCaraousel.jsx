import {Link} from '@remix-run/react';
import * as React from 'react';
import {useEffect, useState, useRef} from 'react';
import Slider from 'react-slick';

export const meta = () => {
  return [
    {title: 'BuildMyBody | Fitness Articles'},
    {
      name: 'description',
      content:
        'Explore fitness articles on BuildMyBody for health and wellness tips.',
    },
    {
      name: 'keywords',
      content: 'BuildMyBody, Fitness Articles, Health, Wellness',
    },
  ];
};

const BrandCaraousel = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);
  const articles = [
    {
      image:
        'https://cdn.shopify.com/s/files/1/0272/0566/4803/articles/How-to-increase-lifting-capacity-blog.png?v=1580125755&width=1600&height=723&crop=center',
      date: 'January 27, 2020',
      title: 'How to increase lifting capacity?',
      url: '/blogs/news/how-to-increase-lifting-capacity',
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0272/0566/4803/articles/breakfast_post_930_x_420.jpg?v=1600331489&width=1600&height=723&crop=center',
      date: 'September 17, 2020',
      title: 'Breaking The Myths About Breakfast One At A Time',
      url: '/blogs/news/breaking-the-myths-about-breakfast-one-at-a-time',
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0272/0566/4803/articles/rice_vs_chapati_post_930_x_420.jpg?v=1601462664&width=1600&height=723&crop=center',
      date: 'September 30, 2020',
      title: 'Rice VS Chapati - Which is better?',
      url: '/blogs/news/rice-vs-chapati-which-is-better',
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0272/0566/4803/articles/Fitness_Hacks_During_Navratri.jpg?v=1603090261&width=1600&height=723&crop=center',
      date: 'October 19, 2020',
      title: 'Fitness Hacks During Navratri',
      url: '/blogs/news/fitness-hacks-during-navratri',
    },
  ];
  return (
    <>
      <section id="fitness-car">
        <div className="container-fluid pt-5 pb-5 mt-2  mb-5">
          <div
            className="d-flex justify-content-center mb-5 pt-5"
            style={{flexDirection: 'column', alignItems: 'center'}}
          >
            <h1 className="custom-heading3">
              <em>Fitness Articles</em>
            </h1>
            <hr className="h1-hr" />
          </div>
          <div className="fitness-slider">
            <Slider
              className="ml-lg-5 mr-lg-5"
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
                    nextArrow: <></>,
                    prevArrow: <></>,
                  },
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: true,
                    nextArrow: <></>,
                    prevArrow: <></>,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    nextArrow: <></>,
                    prevArrow: <></>,
                  },
                },
              ]}
            >
              {articles.map((article, index) => (
                <div className="card" id="articles-card" key={index}>
                  <img
                    className="card-img-articles"
                    src={article.image}
                    alt="Card image cap"
                  />
                  <Link to={article.url} className="card-content2">
                    <p className="mt-3">
                      <em style={{color: '#474544'}}>{article.date}</em>
                    </p>
                    <h2
                      className="font-weight-bold mt-2"
                      style={{color: '#474544'}}
                    >
                      {article.title}
                    </h2>
                    <Link
                      to={article.url}
                      className="btn category-btn d-flex justify-content-center mt-4"
                    >
                      Read More
                    </Link>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandCaraousel;
