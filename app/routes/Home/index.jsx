import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Carousel from './Carousel';
import Discount from './Discount';
import FeaturedProducts from './FeaturedProducts';
import FlashDeals from './FlashDeals';
import Verify from './Verify';
import BrandCaraousel from './BrandCaraousel';
import TopSelling from './TopSelling';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <FeaturedProducts />
      <Discount />
      <TopSelling />
      <Verify />
      <FlashDeals />
      <BrandCaraousel />
      <Discount />
      <Footer />
    </>
  );
};

export default Home;
