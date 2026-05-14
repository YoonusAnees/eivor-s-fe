import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Categories from '../components/home/Categories';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <Categories />
      <WhyChooseUs />
      <Newsletter />
    </div>
  );
};

export default Home;
