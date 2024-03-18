import { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { CartForm } from '@shopify/hydrogen';
import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';
import { MediaFile, ShopPayButton } from '@shopify/hydrogen-react';
import { Image, Money } from '@shopify/hydrogen';
import ProductCarousal from './ProductCarousal';
import ProductOptions from './ProductOptions';
import ProductForm from './ProductForm';
import Protien from '../../img/protien.png';
import { Link } from '@remix-run/react';
import discountsvg from '../../img/discountsvg.png'

const Product = ({ data }) => {
  const {
    product,
    selectedVariant,
    FeaturedProductsCollection,
    TrendingProductsCollection,
    storeDomain,
    orderable,
  } = data;

  useEffect(() => {
    document.title = `${product.title}`;
  }, [product.title]);


  const [qty, setQty] = useState(1);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false);
    setIsOpen3(false);
  };
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
    setIsOpen1(false);
    setIsOpen3(false);
  };
  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
    setIsOpen1(false);
    setIsOpen2(false);
  };
  const toggleDropdown4 = () => {
    setIsOpen4(!isOpen4);
    setIsOpen5(false);
    setIsOpen6(false);
  };
  const toggleDropdown5 = () => {
    setIsOpen5(!isOpen5);
    setIsOpen4(false);
    setIsOpen6(false);
  };
  const toggleDropdown6 = () => {
    setIsOpen5(!isOpen6);
    setIsOpen4(false);
    setIsOpen6(false);
  };

  const [pincode, setPincode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [deliverable, setDeliverable] = useState(false);
  const checkPincode = async () => {
    try {
      const response = await fetch(
        `https://api.postalpincode.in/pincode/${pincode}`,
      );
      const data = await response.json();
      if (data && data[0]?.Status === 'Success') {
        const postOfficeData = data[0].PostOffice[0];
        const deliveryStatus = postOfficeData.Deliverystatus;
        if (deliveryStatus === 'Yes') {
          setDeliverable(true);
          setErrorMessage('Deliverable to your location. Order Now!');
        } else {
          setDeliverable(false);
          setErrorMessage('Delivery  available to your location.  Order now!');
        }
      } else {
        setDeliverable(false);
        setErrorMessage('Enter a valid PIN code');
      }
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
    } catch (error) {
      console.error('Error fetching data from the API:', error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  const amount = selectedVariant ? selectedVariant.amount : null;

  return (
    <>
      <Navbar />
      <section id="products-section">
        <div className="product">
          <div className="container-fluid">
            <div className="row ">
              {/* image column  */}

              <div className="col-sm-12 col-md-12 col-lg-4 mt-5">
                <ProductCarousal media={product.media.nodes} />
              </div>


              {/* middle column  */}
              <div className="col-sm-12 col-lg-6 col-md-12 mt-5 " style={{ padding: '0rem 1rem' }}>
                <h2
                  className="text-lg-left text-md-center text-sm-center product-title-size"
                  style={{ fontWeight: '800' }}
                >
                  {product.title}
                </h2>
                <div className="row mt-2 d-flex option-flex">
                  {/* weight/flavour section  */}
                  <div className="col-lg-6 col-md-6 col-12 flex-column">
                    <div>
                      <div className="d-flex" style={{ fontSize: '25px' }}>
                        <p className="title  ">Price:</p>
                        <span>
                          <Money
                            withoutTrailingZeros
                            data={selectedVariant.compareAtPrice}
                            className="ml-2"
                            as="del"
                            style={{ color: '#ff2828' }}
                          />
                        </span>
                      </div>
                      <h2 className="d-flex title flex-wrap ">
                        <div className="d-flex">
                          MRP:
                          <Money
                            withoutTrailingZeros
                            data={selectedVariant.price}
                            className="ml-2"
                            style={{ fontSize: '38px' }}
                          />
                        </div>
                        <div>
                          <div className="ml-1 mt-1 d-flex align-items-center ">
                            <p
                              style={{ color: '#ff2828' }}
                              className="product-btn p-2"
                            >
                              {Math.ceil(
                                ((selectedVariant.compareAtPrice.amount -
                                  selectedVariant.price.amount) /
                                  selectedVariant.compareAtPrice.amount) *
                                100,
                              )}
                              % off
                            </p>
                          </div>
                        </div>
                      </h2>
                    </div>
                    <div className="d-flex width-input mt-3 border border-dark justify-content-between p-1">
                      <div>
                        <button
                          style={{ border: 'none', background: 'none' }}
                          className="ml-4"
                          onClick={() => {
                            setQuantity((prevQty) =>
                              prevQty <= 1 ? 1 : prevQty - 1,
                            );
                          }}
                        >
                          {' '}
                          <FaMinus />
                        </button>
                      </div>
                      <div className="">
                        <span className="num">{quantity}</span>
                      </div>

                      <div>
                        <button
                          style={{ border: 'none', background: 'none' }}
                          className="mr-4"
                          onClick={() => {
                            setQuantity((prevQty) =>
                              prevQty >= 10 ? 10 : prevQty + 1,
                            );
                          }}
                        >
                          {' '}
                          <FaPlus />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 title mt-3 mt-lg-0 mt-md-0">
                    <ProductOptions
                      options={product.options}
                      selectedVariant={selectedVariant}
                    />
                  </div>

                  <div className=" mt-5 ">
                    <div className=" each-product-btn d-flex">
                      <div>
                        <ProductForm
                          variantId={selectedVariant?.id}
                          quantity={quantity}
                        />
                      </div>

                      <div className="ml-0 ml-sm-2 ml-lg-2 ml-md-2 mt-2 mt-sm-0 mt-lg-0 mt-md-0" >

                        {orderable && (

                          <ShopPayButton
                            storeDomain={storeDomain}
                            variantIds={[selectedVariant?.id]}
                            className="custom-buy-now"
                            target="_blank"
                          />
                        )}


                      </div>

                    </div>
                  </div>
                  <hr className="w-100" />
                  <h4
                    className="mt-5 title font-weight-bolder"
                    style={{ color: '#282828' }}
                  >
                    Check Delivery
                  </h4>
                  <div className="input-group mb-3 m-lg-0 title d-flex flex-column ">
                    <div className="d-flex">
                      <input
                        type="number"
                        className="form-control w-100"
                        placeholder="Enter Pincode"
                        aria-describedby="basic-addon2"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          onClick={checkPincode}
                        >
                          Check
                        </button>
                      </div>
                    </div>
                    <div className="mt-1">
                      <p
                        className={`error-message ${deliverable ? 'success' : 'error'
                          }`}
                      >
                        {errorMessage}
                      </p>
                    </div>
                  </div>

                  {/* <div className="return mt-4 mb-3">
                    <div>
                      <h4
                        className="font-weight-bolder"
                        style={{ color: '#282828' }}
                      >
                        Return and Replacement Policy
                      </h4>
                      <p>
                        <em
                          className="font-weight-bolder"
                          style={{ color: '#ff2828' }}
                        >
                          7-days replacement policy
                        </em>
                      </p>
                      <div>
                        <button
                          onClick={toggleDropdown4}
                          className="w-100 text-left p-3"
                          style={{ border: '1px solid transparent' }}
                        >
                          <span
                            className="font-weight-bold"
                            style={{ color: '#282828' }}
                          >
                            View Policy
                          </span>
                        </button>
                        {isOpen4 && (
                          <div style={{ fontSize: '14px' }}>
                            <span className="" data-show="">
                              <p className="mt-1">
                                We offer you complete peace of mind while ordering
                                at BuildMyBody - you can return all items within 7
                                days of receipt of goods.
                                <br /> <br />
                                Please ensure however that the product is unused
                                and the tags, boxes and other packaging is intact.
                                If you are not satisfied with what you have
                                bought, we'll gladly take it back within 7 days
                                from the date of delivery.
                                <br /> <br />
                                If you have paid by card then we will reverse the
                                payment. In case of Cash on Delivery or Bank
                                Deposits as modes of payment, we will issue a
                                cheque in the registered name of the customer.
                                <br />{' '}
                                <span style={{ fontWeight: 'bold' }}>
                                  {' '}
                                  Wrong item if received: We apologize if you have
                                  received the wrong item by mistake.
                                </span>{' '}
                                <br />
                                <br />
                                <h5>Refund:</h5>
                                This is not common and we want to resolve this as
                                quickly as possible for you. To receive a refund
                                or a replacement, you must return the item in the
                                same condition you received it and within 7 days
                                from the day on which you received the item.
                              </p>
                            </span>
                          </div>
                        )}
                      </div>
                      <div>
                        <button
                          onClick={toggleDropdown5}
                          className="w-100 text-left p-3 mt-2"
                          style={{ border: '1px solid transparent' }}
                        >
                          <span
                            className="font-weight-bold"
                            style={{ color: '#282828' }}
                          >
                            Product will be only replaced if it follows the
                            following conditions:
                          </span>
                        </button>
                        {isOpen5 && (
                          <div style={{ fontSize: '14px' }}>
                            <ul className="mt-2">
                              <li className="mt-1">
                                1) Product should be sealed. We will not accept
                                the return product if it finds unpacked or
                                unsealed in any condition.
                              </li>
                              <li className="mt-1">
                                2) Our 7 days Return Policy period starts on the
                                day when you receive the product. In case, you are
                                not satisfied with the product, you need to inform
                                us at given email address: care@buildmybody.in
                                within 7 days only, otherwise order will be not
                                replaced or returned.
                              </li>
                              <li className="mt-1">
                                3) We will only guarantee with the replacement of
                                the product. Only in extreme circumstances, your
                                product may be returned with refunds.
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    <p
                      className="font-weight-bold mt-2"
                      style={{ color: 'black', fontSize: '1.2rem' }}
                    >
                      For further details, feel free to
                      <span>
                        <Link to="/contact"> Contact Us.</Link>
                      </span>
                      <p className="mt-1">
                        <span>Email: </span>
                        <a href="">care@buildmybody.in</a>
                        <br />
                        <span>Phone: </span>
                        <a href="">+91 8860963626</a>
                      </p>
                    </p>
                  </div> */}
                </div>

                {/* featured products section   */}

              </div>
              {/* <div
                id="third"
                className="col-lg-2 flex-lg-column mt-0 mt-lg-5 mt-md-5 mt-sm-0 d-none d-lg-flex "
              >
                <h4 className="d-flex justify-content-center font-weight-bolder ">
                  <em style={{ fontSize: '2rem' }} className="text-center">
                    FEATURED PRODUCTS
                  </em>
                </h4>
                <div className="custom-fl-product d-md-flex flex-lg-column justify-content-around">
                  {FeaturedProductsCollection.collection.products.nodes.map(
                    (product) => (
                      <>
                        <Link
                          key={product.handle}
                          to={`/product/${product.handle}`}
                          className="d-flex mt-4 flex-column"
                        >
                          <div
                            className="w-100 card-container"
                            style={{ maxWidth: '250px', margin: '0 auto' }}
                          >
                            <Image
                              data={product.variants.nodes[0].image}
                              style={{
                                objectFit: 'contain',
                                height: '100%',
                              }}
                              alt={product.title}
                              className="single-product-img"
                            />
                            <div className='all-discount' >
                              <img src={discountsvg} className='w-100' alt="Discount" />
                            </div>
                            <div className="text-center" style={{ position: 'absolute', top: '1px', right: '7px' }}>
                              <p className='text-light' style={{ fontWeight: '700' }}>
                                {Math.ceil(
                                  ((product.variants.nodes[0].compareAtPrice
                                    .amount -
                                    product.variants.nodes[0].price.amount) /
                                    product.variants.nodes[0].compareAtPrice
                                      .amount) *
                                  100,
                                )}
                                %
                              </p>
                            </div>
                          </div>
                        </Link>
                        <div>
                          <p
                            className="font-weight-bold mt-4  text-center text-dark d-flex justify-content-center align-items-center flex-column"
                            style={{ fontSize: '.9rem' }}
                          >
                            {product.title}
                          </p>
                          <h6 className="mt-3 font-weight-bold  text-center text-dark d-flex align-items-center justify-content-center">
                            {product.variants.nodes[0].compareAtPrice && (
                              <del className="discount-text">
                                ₹
                                {
                                  product.variants.nodes[0].compareAtPrice
                                    .amount
                                }
                              </del>
                            )}{' '}
                            <Money
                              withoutTrailingZeros
                              data={product.variants?.nodes[0].price}
                              style={{
                                color: '#ff2828 !important',
                                fontSize: '22px',
                              }}
                              className="ml-2"
                            />
                          </h6>
                          <div className="text-center each-product-btn">
                            <ProductForm
                              variantId={product.variants?.nodes[0].id}
                            />
                          </div>
                        </div>
                      </>
                    ),
                  )}
                </div>
              </div> */}
              <div className="container-fluid ">
                {/* <hr /> */}
                <div className="row">
                  <div className="col-lg-10 " id="product-tabs">
                    <ul
                      className="nav nav-tabs mt-4 d-flex justify-content-start justify-content-lg-around justify-content-md-around w-100"
                      style={{ background: 'black' }}
                      id="myTab"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active   "
                          id="descr-tab"
                          data-toggle="tab"
                          href="#home"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          Description
                        </a>
                      </li>
                      {/* <div className="vl mt-2 py-3 mx-2"></div> */}
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="howto-tab"
                          data-toggle="tab"
                          href="#profile"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          Directions To Use
                        </a>
                      </li>
                      {/* <div className="vl mt-2 py-3 mx-2"></div> */}
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="reviews-tab"
                          data-toggle="tab"
                          href="#contact"
                          role="tab"
                          aria-controls="contact"
                          aria-selected="false"
                        >
                          Reviews
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content mt-3" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="descr-tab"
                        dangerouslySetInnerHTML={{
                          __html: product.descriptionHtml,
                        }}
                      ></div>
                      {/* <div>
                     
                      {dropdownOpen && (
                        
                        <div className="dropdown-content">
                        
                          <div
                            className="tab-pane fade show active"
                            id="home"
                            role="tabpanel"
                            aria-labelledby="descr-tab"
                            dangerouslySetInnerHTML={{
                              __html: product.descriptionHtml,
                            }}
                          />
                          
                        </div>
                      )}
                    </div> */}
                      <div
                        className="tab-pane fade"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="howto-tab"
                      >
                        <div>
                          <div>
                            <button
                              onClick={toggleDropdown1}
                              className="w-100 text-left p-3"
                              style={{ border: '1px solid transparent' }}
                            >
                              <span className="ques-product">Question</span>
                              <span
                                data-title="Question"
                                className="ml-5"
                                data-show=""
                              >
                                What should I do if I receive a Damaged item,
                                wrong product or missing units in my order?
                              </span>
                            </button>
                            {isOpen1 && (
                              <div style={{ fontSize: '14px' }}>
                                <br /> <br />
                                <span className="answer-product">Answer</span>
                                <span
                                  data-title="Answer"
                                  className=""
                                  data-show=""
                                >
                                  <p className="mt-4">
                                    If an item is found damaged or incorrect as
                                    per description on our website or units are
                                    missing as per ordered quantity, please send a
                                    snapshot of the outer packaging, MRP Hologram,
                                    Batch Number and images of products received
                                    with invoice copy to our customer care at
                                    care@buildmybody.in or call us on +91 9494
                                    979191.
                                  </p>
                                  <p className="mt-4">
                                    Once you raise the concern we will investigate
                                    for same you will get revert in 24-48 hrs. If
                                    we need we might raise the concern to brand or
                                    importer and in those situations, we need to
                                    wait for the revert from same.
                                  </p>
                                  <p className="mt-5">
                                    Once the investigation is over if we arrange a
                                    reverse pickup then below will be the process:
                                  </p>
                                  <p className="mt-4">
                                    1/ Our courier partner will take 1-2 working
                                    days to pick up the product/item from you.
                                    <br /> <br />
                                    2/As reverse pick up is done by standard
                                    delivery it takes minimum 5-7 working days to
                                    get back to our warehouse.
                                    <br /> <br />
                                    3/Once the product is received back to us
                                    quality team check it and give update related
                                    to the product condition, as we need the
                                    product in the same condition as delivered to
                                    you.
                                    <br /> <br />
                                    4/On receiving a positive response we will get
                                    back to you and as per your request we will
                                    replace or refund you for the order
                                    (replacement are subject to availability of
                                    the particular product.
                                    <br /> <br />
                                    5/ In case we receive a negative response the
                                    product would be sent back to you in the same
                                    condition.
                                  </p>
                                </span>
                              </div>
                            )}
                          </div>
                          <div>
                            <button
                              onClick={toggleDropdown2}
                              className="w-100 text-left p-3 mt-4"
                              style={{ border: '1px solid transparent' }}
                            >
                              <span className="ques-product">Question</span>
                              <span
                                data-title="Question"
                                className="ml-5"
                                data-show=""
                              >
                                Is there a policy for returns?
                              </span>
                            </button>
                            {isOpen2 && (
                              <div style={{ fontSize: '14px' }}>
                                <br />
                                <br />
                                <span className="answer-product">Answer</span>
                                <span
                                  data-title="Answer"
                                  className=""
                                  data-show=""
                                >
                                  <p className="mt-4">
                                    Yes. Products should be received in original
                                    packaging and sealed condition. <br /> Opened
                                    or used boxes will not be accepted as returns.
                                    For issues like rashes, stomach upset,
                                    headache, flavor like/dislike, flavor
                                    difference from one brand to other etc.
                                    products would not be applicable for return.
                                    Please consult with the doctor before buying
                                    the product
                                  </p>
                                </span>
                              </div>
                            )}
                          </div>
                          <div>
                            <button
                              onClick={toggleDropdown3}
                              className="w-100 text-left p-3 mt-4"
                              style={{ border: '1px solid transparent' }}
                            >
                              <span className="ques-product">Question</span>
                              <span
                                data-title="Question"
                                className="ml-5"
                                data-show=""
                              >
                                What are the modes of refund available after
                                cancellation?
                              </span>
                            </button>
                            {isOpen3 && (
                              <div style={{ fontSize: '14px' }}>
                                <br />
                                <br />
                                <span className="answer-product">Answer</span>
                                <span
                                  data-title="Answer"
                                  className=""
                                  data-show=""
                                >
                                  <p className="mt-4">
                                    In order to confirm cancellation of item(s) in
                                    your order, you need to indicate your refund
                                    preference. <br /> The money will be refunded
                                    back to the payment mode/account that was
                                    originally used to make the transaction. Once
                                    you have requested the cancellation of item(s)
                                    in your order, BuildMyBody will complete the
                                    cancellation and initiate the refund,
                                    depending on your preference.
                                  </p>
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="contact"
                        role="tabpanel"
                        aria-labelledby="reviews-tab"
                      >
                        Etsy mixtape wayfarers, ethical wes anderson tofu before
                        they sold out mcsweeney's organic lomo retro fanny pack
                        lo-fi farm-to-table readymade. Messenger bag gentrify
                        pitchfork tattooed craft beer, iphone skateboard locavore
                        carles etsy salvia banksy hoodie helvetica. DIY synth PBR
                        banksy irony. Leggings gentrify squid 8-bit cred
                        pitchfork. Williamsburg banh mi whatever gluten-free,
                        carles pitchfork biodiesel fixie etsy retro mlkshk vice
                        blog. Scenester cred you probably haven't heard of them,
                        vinyl craft beer blog stumptown. Pitchfork sustainable
                        tofu synth chambray yr.
                      </div>
                    </div>
                  </div>
                  <div
                    id="third"
                    className="col-lg-2 flex-lg-column mt-0 mt-lg-5 mt-md-5 mt-sm-0 d-flex d-lg-none "
                  >
                    <h4 className="d-flex justify-content-center font-weight-bolder ">
                      <em style={{ fontSize: '2rem' }} className="text-center">
                        FEATURED PRODUCTS
                      </em>
                    </h4>
                    <div className="custom-fl-product d-md-flex flex-lg-column ">
                      {FeaturedProductsCollection.collection.products.nodes.map(
                        (product) => (
                          <>
                            <Link
                              key={product.handle}
                              to={`/product/${product.handle}`}
                              className="d-flex mt-4 flex-column"
                            >
                              <div
                                className="w-100 card-container"
                                style={{ maxWidth: '250px', margin: '0 auto' }}
                              >
                                <Image
                                  data={product.variants.nodes[0].image}
                                  style={{
                                    objectFit: 'contain',
                                    height: '100%',
                                  }}
                                  alt={product.title}
                                  className="single-product-img"
                                />
                                <div className='all-discount' >
                                  <img src={discountsvg} className='w-100' alt="Discount" />
                                </div>
                                <div className="text-light" style={{ position: 'absolute', top: '1px', right: '7px' }}>
                                  <p style={{ fontWeight: '700' }}>
                                    {Math.ceil(
                                      ((product.variants.nodes[0].compareAtPrice
                                        .amount -
                                        product.variants.nodes[0].price.amount) /
                                        product.variants.nodes[0].compareAtPrice
                                          .amount) *
                                      100,
                                    )}
                                    %
                                  </p>
                                </div>
                              </div>
                            </Link>
                            <div className="d-flex justify-content-center align-items-center flex-column">
                              <h6 className="font-weight-bold mt-4  text-center text-dark">
                                {product.title}
                              </h6>
                              <h6 className="mt-3 font-weight-bold  text-center text-dark d-flex align-items-center justify-content-center">
                                {product.variants.nodes[0].compareAtPrice && (
                                  <del className="discount-text">
                                    ₹
                                    {
                                      product.variants.nodes[0].compareAtPrice
                                        .amount
                                    }
                                  </del>
                                )}{' '}
                                <Money
                                  withoutTrailingZeros
                                  data={product.variants?.nodes[0].price}
                                  style={{
                                    color: '#ff2828 !important',
                                    fontSize: '22px',
                                  }}
                                  className="ml-2"
                                />
                              </h6>
                              <div className="text-center each-product-btn">
                                <ProductForm
                                  variantId={product.variants?.nodes[0].id}
                                />
                              </div>
                            </div>
                          </>
                        ),
                      )}
                    </div>
                  </div>
                  <div
                    id="third"
                    className="col-lg-2 flex-lg-column mt-5 mt-lg-4 mt-md-4 mt-sm-2"
                  >
                    <h4 className="d-flex justify-content-center align-items-center font-weight-bolder  text-center">
                      <em style={{ fontSize: '2rem' }}>RELATED PRODUCTS</em>
                    </h4>
                    <div className="custom-fl-product d-md-flex flex-lg-column ">
                      {TrendingProductsCollection.collection.products.nodes.map(
                        (product) => (
                          <>
                            {' '}
                            <Link
                              key={product.handle}
                              to={`/product/${product.handle}`}
                              className="d-flex mt-4 flex-column"
                            >
                              <div
                                className="w-100 card-container"
                                style={{ maxWidth: '250px', margin: '0 auto' }}
                              >
                                <Image
                                  data={product.variants.nodes[0].image}
                                  style={{
                                    objectFit: 'contain',
                                    height: '100%',
                                  }}
                                  className="single-product-img"
                                  alt={product.title}
                                />
                                <div className='all-discount' >
                                  <img src={discountsvg} className='w-100' alt="Discount" />
                                </div>
                                <div className="text-light" style={{ position: 'absolute', top: '2px', right: '5px' }}>
                                  <p style={{ fontWeight: '700' }}>
                                    {Math.ceil(
                                      ((product.variants.nodes[0].compareAtPrice
                                        .amount -
                                        product.variants.nodes[0].price.amount) /
                                        product.variants.nodes[0].compareAtPrice
                                          .amount) *
                                      100,
                                    )}
                                    %
                                  </p>
                                </div>
                              </div>
                            </Link>
                            <div className="d-flex justify-content-center align-items-center flex-column">
                              <p
                                className="font-weight-bold mt-4  text-center text-dark d-flex justify-content-center align-items-center flex-column"
                                style={{ fontSize: '.9rem' }}
                              >
                                {product.title}
                              </p>
                              <h6 className="mt-3 font-weight-bold  text-center text-dark d-flex align-items-center justify-content-center">
                                {product.variants.nodes[0].compareAtPrice && (
                                  <del className="discount-text">
                                    ₹
                                    {
                                      product.variants.nodes[0].compareAtPrice
                                        .amount
                                    }
                                  </del>
                                )}{' '}
                                <Money
                                  withoutTrailingZeros
                                  data={product.variants?.nodes[0].price}
                                  style={{
                                    color: '#ff2828 !important',
                                    fontSize: '22px',
                                  }}
                                  className="ml-2"
                                />
                              </h6>

                              <div className="text-center each-product-btn d-flex justify-content-center align-items-center ">
                                <ProductForm
                                  variantId={product.variants?.nodes[0].id}
                                />
                              </div>
                            </div>
                          </>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Product;
