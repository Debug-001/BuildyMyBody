import {useState} from 'react';
import {doc, getDoc} from 'firebase/firestore';
import {db} from '~/firebase';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import banner1mob from '../img/banner1mob.png';
import frame1 from '../img/frame1.png';
import frame2 from '../img/frame2.png';
import frame3 from '../img/frame3.png';
import Authenticityimg from '../img/authenticity3.jpg';

const Authenticity = () => {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const [productDetails, setProductDetails] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitted');
    const snapshot = await getDoc(doc(db, 'codes', code));
    if (snapshot.exists()) {
      setMessage('100% Authentic Certified Product.');
      setProductDetails(snapshot.data());
      console.log('Found');
    } else {
      setMessage('Code not found! Please check your code again');
      console.log('Not Found');
    }
  };
  return (
    <>
      <Navbar />
      <section id="authenticity-section">
        <div className="container">
          <div
            className="d-flex justify-content-start mb-5"
            style={{flexDirection: 'column', alignItems: 'center'}}
          >
            <h1
              className="font-weight-bolder pt-4"
              style={{fontWeight: '900', color: '#ff2828'}}
            >
              <em>Verify your products </em>
            </h1>
            <hr className="h1-hr" />
          </div>
          <div className="row mt-2">
            <div className="col d-none d-lg-block">
              <div>
                <img
                  src={banner1mob}
                  className="verify-auth-img"
                  alt="authenticity-img"
                />
              </div>
            </div>
            <div className="col mt-3">
              <div className="d-flex flex-column justify-content-center">
                {/* <p className='h3 text-center'></p> */}
                <form
                  onSubmit={handleSubmit}
                  className="input-group mb-3 pt-5 d-flex flex-column"
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
                  <button
                    type="submit"
                    id="flash-button"
                    className="p-2 rounded"
                  >
                    Verify Your Product
                  </button>
                  <div id="imageContainer">
                    {message === '100% Authentic Certified Product.' && (
                      <div className="row d-flex align-items-center mt-2">
                        <div className="col-sm-4 d-flex justify-content-end">
                          <img
                            src={Authenticityimg}
                            alt="authenticated"
                            className="mt-3"
                          />
                        </div>
                        <div className="col-sm-8">
                          <p className="h5 font-weight-bolder">{message}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="bottom-section pt-5">
            <p className="h2 font-weight-bolder text-center pb-5 pt-5">
              Product Authenticity Tips
            </p>
            <div className="row pb-5">
              <div className="col-12 col-md-6 col-lg-4 pt-2 text-center">
                <img src={frame1} className="h-75" alt="" />
                <p classname="p-4 font-weight-bolder">Only accept products with an authentication sticker</p>
              </div>
              <div className="col-12 col-md-6 col-lg-4 text-center">
                <img src={frame2} className="h-75" alt="" />
                <p classname="p-4 font-weight-bolder">
                  Don't accept products with stickers that have been scratched
                  off
                </p>
              </div>
              <div className="col-12 col-md-6 col-lg-4  text-center">
                <img src={frame3} className="h-75" alt="" />
                <p classname="p-4 font-weight-bolder">Only buy from authorized retailers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Authenticity;
