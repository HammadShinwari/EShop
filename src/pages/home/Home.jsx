import React from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/heroSection/HeroSection";
import Filter from '../../components/filter/Filter';
import ProductCard from "../../components/productCard/ProductCard";
import Track from '../../components/track/Track';
import Testimonial from "../../components/testimonial/Testimonial";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";

function Home() {

  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);

  console.log(cartItem);

  const addCart = () => {
    dispatch(addToCart("shirt"));
  }

  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"));
  }

  return (
    <div>
      <Layout>
        <div className="flex gap-5 justify-center">
          <button className="bg-gray-300 p-2" onClick={() => addCart()}>add</button>
          <button className="bg-gray-300 p-2" onClick={() => deleteCart()}>del</button>
        </div>
        <HeroSection />
        <Filter />
        <ProductCard />
        <Track />
        <Testimonial />
      </Layout>
    </div>
  );
}

export default Home;
