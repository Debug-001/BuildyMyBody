export const meta = () => {
  return [
    { title: 'BuildMyBody | Customer Reviews' },
    { name: 'description', content: 'Read customer testimonials and reviews on BuildMyBody for fitness products and supplements. Discover the experiences of customers in New Delhi, Bangalore, Noida, and more.' },
    { name: 'keywords', content: 'BuildMyBody, Fitness Products, Supplements, Customer Reviews, Testimonials, Whey Protein, Bodybuilding' },
  ];
};

const Testimonials = () => {
  return (
    <section id="testmon" className="mt-3">
      <div className="container-xl pt-5 pb-5">
        <div className="row">
          <div className="col-sm-12">
            <div
              className="d-flex justify-content-center mb-5"
              style={{ flexDirection: 'column', alignItems: 'center' }}
            >
              <h1
                className="custom-heading3 text-center"
                style={{ color: '#ff2828', fontWeight: '900' }}
              >
                <em>Customer Reviews</em>
              </h1>
              <hr className="h1-hr" />
            </div>
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              {/* Carousel indicators */}
              <ol className="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to={0}
                  className="active"
                />
                <li data-target="#myCarousel" data-slide-to={1} />
                <li data-target="#myCarousel" data-slide-to={2} />
              </ol>
              {/* Wrapper for carousel items */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="media">
                        <div className="media-body">
                          <div className="testimonial">
                            <p>
                              The product quality was really good and the price
                              was also somewhat affordable. Go for the ON
                              Nutrition Whey Protein package.
                            </p>
                            <p className="overview">
                              <b>Anupam Kumar</b>, New Delhi
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 mt-2 mt-sm-0 mt-lg-0 mt-md-0">
                      <div className="media">
                        <div className="media-body">
                          <div className="testimonial">
                            <p>
                              All types of supplements were there that are
                              required for my bodybuilding. Although I would
                              suggest adding more flavor options if possible.
                              Else everything was great.
                            </p>
                            <p className="overview">
                              <b>Akash Yaduvansi</b>, Bangalore
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="media">
                        <div className="media-body">
                          <div className="testimonial">
                            <p>
                              The ordering experience was quite easy as I order
                              supplements on a monthly basis. Overall a good
                              experience up till now.
                            </p>
                            <p className="overview">
                              <b>Rashmi Singh</b>, Noida
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 mt-2 mt-sm-0 mt-lg-0 mt-md-0">
                      <div className="media">
                        <div className="media-body">
                          <div className="testimonial">
                            <p>
                              Recently they added more flavors of whey protein,
                              and I was literally looking for the flavors
                              option. 100% satisfied with BuildMyBody.
                            </p>
                            <p className="overview">
                              <b>Saket Kumar</b>, Noida
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="media">
                        <div className="media-body">
                          <div className="testimonial">
                            <p>
                              Decent but flavors and categories could be
                              increased.
                            </p>
                            <p className="overview">
                              <b>Smith Kumar</b>, Patna
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 mt-2 mt-sm-0 mt-lg-0 mt-md-0">
                      <div className="media">
                        <div className="media-body">
                          <div className="testimonial">
                            <p>
                              Ordered the ON Whey Protein and got it delivered
                              within 3 days. Good job, guys, keep it up.
                            </p>
                            <p className="overview">
                              <b>Bhavya Sharma</b>, Delhi
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
