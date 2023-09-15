import React from 'react'
// import ShopBy from '../../../dist/client/img/shopbyprotien.jpeg'
import photo from '../../../dist/client/img/bc6.jpg'
import photo1 from '../../../dist/client/img/bc1.jpg'
import photo2 from '../../../dist/client/img/bc2.jpg'
import photo3 from '../../../dist/client/img/bc3.jpg'
import photo4 from '../../../dist/client/img/bc4.jpg'
import photo5 from '../../../dist/client/img/bc5.jpg'
import on from '../../../dist/client/img/onbrand.jpg'
const ShopByBrands = () => {
    return (
        <>
            <div style={{ background: '#FAF4EF' }}>
                <div className='container '>
                    <h1 class="d-flex justify-content-center align-items-center font-weight-bold custom-heading"><em>Shop By Brands</em></h1>
                    <div className="row">
                        <div className="col shopby-flex" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <img src={photo} className='border border-dark   shopby-img' style={{ background: 'burlywood' }} alt="" />
                            <img src={photo1} className='border border-dark cus3  shopby-img  left' style={{ background: 'darkslategrey' }} alt="" />
                            {/* <img src={photo2} className='border border-dark    ml-3' style={{ background: 'lightcoral' }} alt="" /> */}
                        </div>

                    </div>

                    <div className="row">
                        <div className="col shopby-flex mt-lg-3 " style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <img src={photo3} className='border border-dark cus2    shopby-img  ' style={{ background: 'beige' }} alt="" />
                            {/* <img src={photo4} className='border border-dark    ml-3' style={{ background: 'aliceblue' }} alt="" /> */}
                            <img src={photo5} className='border border-dark   shopby-img   cus2 left' style={{ background: 'bisque' }} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopByBrands
