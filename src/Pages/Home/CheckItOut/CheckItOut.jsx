import React from "react";
import SharedTitle from "../../../Components/SharedTitle/SharedTitle";

const CheckItOut = () => {
  return (
    <div className="mb-20">
      <div
        className="hero min-h-screen bg-fixed"
        style={{
          backgroundImage: `url("https://i.ibb.co/Ny4FG99/rice1.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>

        <div className="text-neutral-content">
          <SharedTitle
            subHeading={"---Check it out---"}
            heading={"FROM OUR MENU"}
          ></SharedTitle>
          <div className="max-w-md flex justify-between gap-20">
            <div>
              <img className="" src="https://i.ibb.co/rGj3Tk5/Korean-fried-chicken6.jpg" alt="" />
            </div>
            <div>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
              </p>
              <button className="btn bg-[#7FD8BE] border-0">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckItOut;
