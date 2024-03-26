import React from "react";
import HeroSection from "./HeroSection";
import iphone from "../../assets/iphone-14-pro.webp";
import mac from "../../assets/mac-system-cut.jfif";
import FeaturedProducts from "./FeaturedProducts";

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="Buy Iphone 14 Pro"
        subtitle="Experience the power of the latest iphone 14 with our most Pro Camera ever."
        link="/product/6601fffab8bf02abd8df3ba4"
        image={iphone}
      />
      <FeaturedProducts />
      <HeroSection
        title="Build the ultimate setup"
        subtitle="You can add Studio Display and color-matched Magic accessories to your bag after configure you Mac mini."
        link="/product/6601fffab8bf02abd8df3bac"
        image={mac}
      />
    </div>
  );
};

export default HomePage;
