import {AiFillCheckCircle} from 'react-icons/ai';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function Certificates() {
  return (
    <div className="main-div">
      <Navbar />
      <div className="container-fluid">
        <p className="text ml-5 certificate-heading">Certificates</p>
        <div className="row">
          <div className="col ">
            <img src="./img/certificate_img.jpg" className="w-100 p-5" alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="text-center certificate-heading2">
              View Certificates
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col  certificate-card">
            <div className="ccol-sm-4 ">
              <p className="text-center mt-4 ">
                <img
                  src="./img/certificate_emoji.webp"
                  className="w-25"
                  alt=""
                />
              </p>
            </div>
            <p className="text-center mb-5 mt-3 certificate-card-text">
              <a
                href="https://cdn.shopify.com/s/files/1/0272/0566/4803/files/Glanbia_Certificate_BuildMyBody.jpg?v=1595962934"
                target="_blank"
              >
                GLANBIA CERTIFICATE
              </a>
            </p>
          </div>
          <div className="col  ml-4 certificate-card">
            <div className="col ">
              <p className="text-center mt-4">
                <img
                  src="./img/certificate_emoji.webp"
                  className="w-25"
                  alt=""
                />
              </p>
            </div>
            <p className="text-center mb-5 mt-3 certificate-card-text">
              <a
                href="https://cdn.shopify.com/s/files/1/0272/0566/4803/files/MPN_Authorization_BuildMyBody.jpg?v=1595962932"
                target="_blank"
              >
                MUSCLEPRO NUTRITION CERTIFICATE
              </a>
            </p>
          </div>

          <div className="col ml-4 certificate-card">
            <div className="col ">
              <p className="text-center mt-4">
                <img
                  src="./img/certificate_emoji.webp"
                  className="w-25"
                  alt=""
                />
              </p>
            </div>
            <p className="text-center  mb-5 mt-3 certificate-card-text">
              <a
                href="https://cdn.shopify.com/s/files/1/0272/0566/4803/files/Pearl-International-Authorisation_BuildMyBody.jpg?v=1595962928"
                target="_blank"
              >
                PEARL INTERNATIONAL CERTIFICATE
              </a>
            </p>
          </div>

          <div className="col ml-4 certificate-card">
            <div className="col ">
              <p className="text-center mt-4">
                <img
                  src="./img/certificate_emoji.webp"
                  className="w-25"
                  alt=""
                />
              </p>
            </div>
            <p className="text-center  mb-5 mt-3 certificate-card-text">
              <a
                href="https://cdn.shopify.com/s/files/1/0272/0566/4803/files/MHI-cerificate-BuildMyBody.jpg?v=1595963106"
                target="_blank"
              >
                {' '}
                MUSCLE HOUSE CERTIFICATE
              </a>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 col-md-8">
            <p className="text ml-5 certificate-heading2">
              AUTHENTICITY DELIVERED
              <hr className="mt-0 certificate-hr" />
            </p>
            <p className="ml-5 certificate-auth-text">
              About half of the supplements sold in India are suspect - they are
              either parallel imports or fake. Fake supplements may contain
              banned substances, such as steroids, which may cause permanent
              damage to your body.
            </p>
            <br />
            <p className="ml-5 certificate-auth-text">
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
            <p className=" certificate-heading2">
              How to check if the product is genuine and of good quality?
              <hr className="mt-0 certificate-hr" />
            </p>
            <p className="d-flex certificate-auth-text2 ">
              <AiFillCheckCircle className="  mt-1 certificate-img" />
              Product should be sealed pack and have a long shelf life.
            </p>
            <p className="d-flex certificate-auth-text2">
              <AiFillCheckCircle className="  mt-1 certificate-img" />
              The importers MRP sticker must be there and should display the
              import date & FSSAI of the importer.
            </p>
            <p className="d-flex certificate-auth-text2">
              <AiFillCheckCircle className=" mt-1 certificate-img" />
              The batch number can be confirmed with the Brand itself & from the
              import also..
            </p>
            <p className="d-flex certificate-auth-text2">
              <AiFillCheckCircle className=" mt-1 certificate-img" />
              If still concerned, get the lab test done.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Certificates;
