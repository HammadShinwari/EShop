import React from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/heroSection/HeroSection";
import Filter from '../../components/filter/Filter';

function Home() {
  return (
    <div>
      <Layout>
        <HeroSection />
        <Filter />
      </Layout>
    </div>
  );
}

export default Home;
