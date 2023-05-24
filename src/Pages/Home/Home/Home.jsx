import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  return (
    <Carousel>
      <div>
        <img src="https://i.ibb.co/xXDLJSt/rice4.jpg" />
      </div>
      <div>
        <img src="https://i.ibb.co/M22DsvN/rice2.jpg" />
      </div>
      <div>
        <img src="https://i.ibb.co/4j4Whn5/kimchi2.jpg" />
      </div>
    </Carousel>
  );
};

export default Home;
