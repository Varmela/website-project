import React from "react";
import Advertisement from "../components/Advertisement";
import CarouselPart from "../components/CarouselPart";
import Community from "../components/Community";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";
import tattoo from "../assets/image4.png";
import jewelry from "../assets/image5.png";
import piercing from "../assets/image6.png";
import medical from "../assets/image7.png";
import permanent from "../assets/image8.png";
import imageCommunity1 from '../assets/image9.png';
import imageCommunity2 from '../assets/image10.png';
import imageCommunity3 from '../assets/image11.png';
import Button from "../components/Button";

const HomePage = () => {
  return (
    <>
      <Header />
      <Advertisement />
      <div className="products-container">
        <Products title="Tattoo Supplies" photo={tattoo} />
        <Products title="Body Jewelry" photo={jewelry} />
        <Products title="Piercing Supplies" photo={piercing} />
        <Products title="Medical" photo={medical} />
        <Products title="Permanent" photo={permanent} />
      </div>
      <br />
      <div className="community-part">
      <Community photoCommunity={imageCommunity1} date='Jun 10, 2024' description='On hard work and evolution with tattoo artist Autumn Hudson' />
      <Community photoCommunity={imageCommunity2} date='Jun 10, 2024' description='On hard work and evolution with tattoo artist Autumn Hudson' />
      <Community photoCommunity={imageCommunity3} date='Jun 10, 2024' description='On hard work and evolution with tattoo artist Autumn Hudson' />
    </div>
    <div className="button-container">
      <Button title='See all blog posts' />
    </div>
        

      <CarouselPart />
      <Footer />
    </>
  );
};

export default HomePage;
