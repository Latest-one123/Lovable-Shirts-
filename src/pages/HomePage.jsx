import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/home/Hero';
import ProductList from '@/components/products/ProductList';
import Features from '@/components/home/Features';

const HomePage = ({ onAddToCart, onToggleFavorite, favorites }) => {
  return (
    <>
      <Helmet>
        <title>T-shirt & More - Premium Youth Fashion</title>
        <meta name="description" content="Discover premium printed youth T-shirts with modern designs. Shop our exclusive collection of graphic tees, neon prints, and artistic designs." />
      </Helmet>
      <Hero />
      <ProductList 
        onAddToCart={onAddToCart} 
        onToggleFavorite={onToggleFavorite}
        favorites={favorites}
      />
      <Features />
    </>
  );
};

export default HomePage;