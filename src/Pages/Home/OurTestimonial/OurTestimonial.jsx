import React, { useEffect, useState } from "react";
import SharedTitle from "../../../Components/SharedTitle/SharedTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";

const OurTestimonial = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);

  return (
    <div>
      <SharedTitle
        subHeading={"---What Our Clients Say---"}
        heading={"TESTIMONIALS"}
      ></SharedTitle>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {review.map((r) => (
            <SwiperSlide key={r._id}>
              <div className="flex flex-col items-center justify-center p-20">
                <Rating style={{ maxWidth: 180 }} value={r.rating} readOnly />
                {/* <p>Rating: {r.rating}</p> */}
                <p className="mt-5 mb-5">{r.details}</p>
                <h1 className="text-3xl uppercase text-[#7FD8BE]">{r.name}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurTestimonial;
