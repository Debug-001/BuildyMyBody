import React from 'react';
import {useState} from 'react';
import {doc, getDoc} from 'firebase/firestore';
import {db} from '~/firebase';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import banner1mob from '../img/banner1mob.png';
import authenticated from '../img/frame3.png';
import frame1 from '../img/frame1.png';
import frame2 from '../img/frame2.png';
import frame3 from '../img/frame3.png';

const Authenticity = () => {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const [productDetails, setProductDetails] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitted');
    const snapshot = await getDoc(doc(db, 'codes', code));
    if (snapshot.exists()) {
      setMessage('Authentication completed, product verified.');
      setProductDetails(snapshot.data());
      console.log('Found');
    } else {
      setMessage('Code not found!  Please check your code again');
      console.log('Not Found');
    }
  };
  return (
    <>
      <Navbar />
      <div>
        <div className="container">
          <h1
            className="custom-heading3 text-center"
            style={{color: '#ff2828', fontWeight: '900'}}
          >
            <em>Verify Your Products</em>
          </h1>
          <div className="row mt-2">
            <div className="col mt-3">
              <div className="d-flex flex-column">
                <form
                  onSubmit={handleSubmit}
                  className="input-group mb-3 d-flex flex-column"
                >
                  <input
                    type="text"
                    className="form-control w-100"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Enter 14-digit code"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  <div id="imageContainer">
                    {message ==
                      'Authentication completed, product verified.' && (
                      <img src={authenticated} alt="authenticated" />
                    )}
                    {message && <h5>{message}</h5>}
                  </div>
                  <button type="submit" id="flash-button" className="p-2">
                    Verify Your Product
                  </button>
                </form>
              </div>

              {/* <div className="input-group mb-3">

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Email"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </div> */}

              {/* <div className="input-group mb-3">

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Mobile Number"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </div> */}
              {/* <button id='flash-button' className='p-2'>Verify</button> */}
            </div>
            <div className="col d-none d-lg-block">
              <div>
                <img src={banner1mob} alt="" />
              </div>
            </div>
          </div>
          <div className="row mt-1 d-flex flex-column justify-content-center align-items-center">
            <h4>PRODUCT</h4>
            <h3>AUTHENTICITY TIPS</h3>
          </div>
          <div className="row ">
            <div className="col-12 col-md-6 col-lg-4 text-center">
              <img src={frame1} className="h-75" alt="" />
              <p>Only accept products with an authentication sticker</p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 text-center">
              <img src={frame2} className="h-75" alt="" />
              <p>
                Don’t accept products with stickers that have been scratched off
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-4     text-center">
              <img src={frame3} className="h-75" alt="" />
              <p>Only buy from authorized retailers</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Authenticity;
