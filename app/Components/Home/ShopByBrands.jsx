import React from 'react';
// import ShopBy from '../../../dist/client/img/shopbyprotien.jpeg'
import photo from '../../../dist/client/img/cellu.png';
import photo1 from '../../../dist/client/img/mt.png';
import photo3 from '../../../dist/client/img/mp.png';
import photo5 from '../../../dist/client/img/onn.png';
const ShopByBrands = () => {
  return (
    <>
      <section id="shopbb">
        <div style={{paddingTop:"3.7rem", paddingBottom:"3.7rem"}} >
          <div className="container ">
            <div
              className="d-flex justify-content-center mb-5"
              style={{flexDirection: 'column', alignItems: 'center'}}
            >
              <h1 className="custom-heading3">
                <em>Shop By Brands</em>
              </h1>
              <hr className="h1-hr" />
            </div>
            {/* <h1 class="d-flex justify-content-center align-items-center font-weight-bold custom-heading"><em>Shop By Brands</em></h1> */}
            <div className="row">
              <div
                className="col shopby-flex"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}
              >
                <img
                  src={photo}
                  className="     shopby-img"
                  // style={{background: 'burlywood'}}
                  alt=""
                />
                <img
                  src={photo1}
                  className="   cus3  shopby-img  left"
                  // style={{background: 'darkslategrey'}}
                  alt=""
                />
                {/* <img src={photo2} className='      ml-3' style={{ background: 'lightcoral' }} alt="" /> */}
              </div>
            </div>

            <div className="row">
              <div
                className="col shopby-flex mt-lg-3 "
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}
              >
                <img
                  src={photo3}
                  className="   cus2    shopby-img  "
                  // style={{background: 'beige'}}
                  alt=""
                />
                {/* <img src={photo4} className='      ml-3' style={{ background: 'aliceblue' }} alt="" /> */}
                <img
                  src={photo5}
                  className="     shopby-img   cus2 left"
                  // style={{background: 'bisque'}}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopByBrands;
