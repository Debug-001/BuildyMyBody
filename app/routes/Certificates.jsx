import { AiFillCheckCircle } from 'react-icons/ai';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useState } from 'react';
import Try from './try';
import data from './data';
function Certificates() {
  const [selectedCategory, setSelectedCategory] = useState('Category1');
  const uniqueCategories = [...new Set(data.map(item => item.category))];
  return (
    <>
      <div className="main-div" style={{ background: '#FAF4EF' }}>
        <Navbar />
        <div className="container-fluid">
          <p className="text ml-5 certificate-heading" style={{ color: 'black' }} >Certificates</p>
          <div className="row">
            <div className="col ">
              <img src="./img/certificate_img.webp" className="w-100 p-5" alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="text-center certificate-heading2 " style={{ color: '#474544' }}>
                View Certificates
              </p>
            </div>
          </div>
          <div className="row">

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="certificate-card ">
                <p className="text-center mt-4 ">
                  <img
                    src="./img/certificate_emoji.png"
                    className="w-25"
                    alt=""
                  />
                </p>
              </div>
              <p className="text-center mb-5 mt-3 certificate-card-text " style={{ color: '#474544' }}>
                <a
                  href="https://cdn.shopify.com/s/files/1/0272/0566/4803/files/Glanbia_Certificate_BuildMyBody.jpg?v=1595962934"
                  target="_blank"
                  className='  '
                  style={{ color: '#474544' }}
                >
                  GLANBIA CERTIFICATE
                </a>
              </p>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="certificate-card">
                <p className="text-center mt-4">
                  <img
                    src="./img/certificate_emoji.png"
                    className="w-25   "
                    alt=""
                  />
                </p>
              </div>
              <p className="text-center mb-5 mt-3 certificate-card-text" >
                <a
                  href="https://cdn.shopify.com/s/files/1/0272/0566/4803/files/MPN_Authorization_BuildMyBody.jpg?v=1595962932"
                  target="_blank"
                  className='  '
                  style={{ color: '#474544' }}
                >
                  MUSCLEPRO NUTRITION CERTIFICATE
                </a>
              </p>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="certificate-card">
                <p className="text-center mt-4">
                  <img
                    src="./img/certificate_emoji.png"
                    className="w-25   "
                    alt=""
                  />
                </p>
              </div>
              <p className="text-center  mb-5 mt-3 certificate-card-text" >
                <a
                  href="https://cdn.shopify.com/s/files/1/0272/0566/4803/files/Pearl-International-Authorisation_BuildMyBody.jpg?v=1595962928"
                  target="_blank"
                  className='  '
                  style={{ color: '#474544' }}
                >
                  PEARL INTERNATIONAL CERTIFICATE
                </a>
              </p>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="certificate-card ">
                <p className="text-center mt-4">
                  <img
                    src="./img/certificate_emoji.png"
                    className="w-25"
                    alt=""
                  />
                </p>
              </div>
              <p className="text-center  mb-5 mt-3 certificate-card-text" >
                <a
                  href="https://cdn.shopify.com/s/files/1/0272/0566/4803/files/MHI-cerificate-BuildMyBody.jpg?v=1595963106"
                  target="_blank"
                  className='  '
                  style={{ color: '#474544' }}
                >
                  {' '}
                  MUSCLE HOUSE CERTIFICATE
                </a>
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 col-md-8">
              <p className="text ml-5 certificate-heading2" style={{ color: '#474544' }}>
                AUTHENTICITY DELIVERED
                <hr className="mt-0 certificate-hr" />
              </p>
              <p className="ml-5 certificate-auth-text" style={{ color: '#474544' }}>
                About half of the supplements sold in India are suspect - they are
                either parallel imports or fake. Fake supplements may contain
                banned substances, such as steroids, which may cause permanent
                damage to your body.
              </p>
              <br />
              <p className="ml-5 certificate-auth-text" style={{ color: '#474544' }}>
                At BuildMyBody, we strive to provide 100% authentic products to
                our customers by maintaining tight quality control during sourcing
                and distribution of supplements. We also offer 7-day return policy
                to our customers, in case you are not satisfied with the product
                quality.
              </p>
            </div>
            <div className="col ">
              <img
                src="./img/certicate-authenticity.png"
                className="ml-5 mt-5"
                alt=""
              />
            </div>
          </div>

          <div className="row">
            <div className="col ml-5 mt-5">
              <p className=" certificate-heading2   " style={{ color: '#474544' }}>
                How to check if the product is genuine and of good quality?
                <hr className="mt-0 certificate-hr" />
              </p>
              <p className="d-flex certificate-auth-text2 " style={{ color: '#474544' }}>
                <AiFillCheckCircle className="  mt-1 certificate-img" />
                Product should be sealed pack and have a long shelf life.
              </p>
              <p className="d-flex certificate-auth-text2" style={{ color: '#474544' }}>
                <AiFillCheckCircle className="  mt-1 certificate-img" />
                The importers MRP sticker must be there and should display the
                import date & FSSAI of the importer.
              </p>
              <p className="d-flex certificate-auth-text2" style={{ color: '#474544' }}>
                <AiFillCheckCircle className=" mt-1 certificate-img" />
                The batch number can be confirmed with the Brand itself & from the
                import also..
              </p>
              <p className="d-flex certificate-auth-text2 " style={{ color: '#474544' }}>
                <AiFillCheckCircle className=" mt-1 certificate-img" />
                If still concerned, get the lab test done.
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row flex-sm-column flex-lg-row flex-md-row">
            <div className="col-lg-4 col-md-5 d-flex flex-column " >
              {/* <button onClick={() => setSelectedCategory('All')}>All</button> */}
              <button onClick={() => setSelectedCategory('Category1')} className='p-2 mt-5' style={{ background: '#FAF4EF', color: '#474544', cursor: 'pointer' }}>
                <p className='text-left'>Kar Enterprises</p>
              </button>
              <button onClick={() => setSelectedCategory('Category2')} className='p-2' style={{ background: '#FAF4EF', color: '#474544', cursor: 'pointer' }}>
                <p className='text-left'>MusclePro Nutrition(MPN)</p>
              </button>
              <button onClick={() => setSelectedCategory('Category3')} className='p-2' style={{ background: '#FAF4EF', color: '#474544', cursor: 'pointer' }}>
                <p className='text-left'>Bright Comodities</p>
              </button>
              <button onClick={() => setSelectedCategory('Category4')} className='p-2' style={{ background: '#FAF4EF', color: '#474544', cursor: 'pointer' }}>
                <p className='text-left'>Pearl International</p>
              </button>
              <button onClick={() => setSelectedCategory('Category5')} className='p-2' style={{ background: '#FAF4EF', color: '#474544', cursor: 'pointer' }}>
                <p className='text-left'>ARC Distributors</p>
              </button>
              <button onClick={() => setSelectedCategory('Category6')} className='p-2' style={{ background: '#FAF4EF', color: '#474544', cursor: 'pointer' }}>
                <p className='text-left'>Shree Balaji Overseas</p>
              </button>
              <button onClick={() => setSelectedCategory('Category7')} className='p-2' style={{ background: '#FAF4EF', color: '#474544', cursor: 'pointer' }}>
                <p className='text-left'>Paradise Nutrition</p>
              </button>
              <button onClick={() => setSelectedCategory('Category8')} className='p-2' style={{ background: '#FAF4EF', color: '#474544', cursor: 'pointer' }}>
                <p className='text-left'>Unlimited Nutrition</p>
              </button>
              <button onClick={() => setSelectedCategory('Category9')} className='p-2' style={{ background: '#FAF4EF', color: '#474544', cursor: 'pointer' }}>
                <p className='text-left'>Musclehouse</p>
              </button>
              <button onClick={() => setSelectedCategory('Category10')} className='p-2' style={{ background: '#FAF4EF', color: '#474544', cursor: 'pointer' }}>
                <p className='text-left'>Molecule Hub</p>
              </button>
              <button onClick={() => setSelectedCategory('Category11')} className='p-2' style={{ background: '#FAF4EF', color: '#474544', cursor: 'pointer' }}>
                <p className='text-left'>SSNC</p>
              </button>
              <button onClick={() => setSelectedCategory('Category12')} className='p-2' style={{ background: '#FAF4EF', color: '#474544', cursor: 'pointer' }}>
                <p className='text-left'>AM Lifestyle</p>
              </button>

            </div>
            <div className="col mt-5   ">
              {data
                .filter(item => selectedCategory === 'All' || item.category === selectedCategory) // Adjust 'category' to your actual category property
                .map((item, index) => (
                  <Try

                    key={index}
                    email={item.email}
                    aboutUs={item.aboutUs}
                    name={item.name}
                    website={item.website}
                    phone={item.phone}
                  />
                ))}
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default Certificates;
