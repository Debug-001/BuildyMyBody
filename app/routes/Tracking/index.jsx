import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
// import Protien from './public/img/protien.png'
function Track() {
  return (
    <>
      <Navbar />
      <div className="main-div ">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="text-left track">TRACK YOUR ORDER</p>
              <hr className="mt-3" />
              <p className="text-left track-2">Order Number : 123456</p>
              <div className="order-info d-flex ">
                <p className="text-left track-2">Shipped via: Delivery</p>
                <p className="text-left track-2">Status: Arriving Today</p>
                <p className="text-left track-2">
                  Expected Delivery: 20 June 2023
                </p>
              </div>
              <div className="card mx-0">
                <div className="row d-flex justify-content-center">
                  <div className="col-12">
                    <ul id="progressbar" className="text-center">
                      <li className="step0"></li>
                      <li className="step0"></li>
                      <li className="step0"></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col border border-dark d-flex ">
              <img
                src="../img/protien.png"
                className=" w-25 "
                alt="your product"
              ></img>
              <div className="protien-info mt-5">
                <p className="text-justify text-uppercase track-2">
                  nitric whey protein, 4.4 lb cafe mocha
                </p>
                <button type="button" className="btn mt-2">
                  View Your Product
                </button>
                <button type="button" className="btn mt-2">
                  Write A Product Review
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col  d-flex h-100 mt-lg-4 ">
              <img
                src="../img/authenticity.png"
                className="img-fluid w-10 ml-5 protien-img"
                alt="your product"
              ></img>

              <span>
                <p className="text-justify text-1">UNTHENTICITY</p>
              </span>
              <p className="text-left text-2 ">GUARANTEED</p>
            </div>
            <div className="vertical-line d-none d-lg-block mb-3"></div>

            <div className="col  h-100 mt-lg-5 ">
              <div className="input-box d-flex  justify-content-center">
                <input className="form-control " type="number" />
                <input className="form-control ml-2" type="number" />
                <input className="form-control ml-2" type="number" />
                <input className="form-control ml-2" type="number" />
                <input className="form-control ml-2" type="number" />
                <input className="form-control ml-2" type="number" />
              </div>
              <p className="text-center text-uppercase mt-2">
                enter your unique code
              </p>
              <p className="text-center">
                {' '}
                <button className="btn text-uppercase mt-2">check now</button>
              </p>
            </div>
            {/* <p className="text-center">UNTHENTICITY</p> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Track;
