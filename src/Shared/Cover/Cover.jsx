/* eslint-disable react/prop-types */
import React from "react";
import { Parallax } from 'react-parallax';

const Cover = ({ img, title, details }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      style={{height:"600px"}}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div
        className="hero h-[600px]"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">{details}</p>
          </div>
        </div>
      </div>
      <div style={{ height: "200px" }} />
    </Parallax>
  );
};

export default Cover;
