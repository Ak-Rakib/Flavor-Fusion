import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import SharedTitle from "../../../Components/SharedTitle/SharedTitle";

const Swipe = () => {
  return (
    <div className="mt-20 mb-20">
      <SharedTitle
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      ></SharedTitle>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/mc6NDwL/pexels-eyad-tariq-3879495.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/xXDLJSt/rice4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/4j4Whn5/kimchi2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/qxPGRxk/kimchi1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/BVk4dnN/kimchi4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/Yb6XKhd/Korean-fried-chicken4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/HnqwXj2/Korean-fried-chicken5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/jJx284t/Korean-fried-chicken3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/Xbmtz4H/kimchi3.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Swipe;
