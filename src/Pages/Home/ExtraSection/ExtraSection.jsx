import React from "react";

const ExtraSection = () => {
  return (
    <div className="mb-20">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://i.ibb.co/Yb6XKhd/Korean-fried-chicken4.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div className="mb-5 text-black bg-white px-28 py-40">
              <h1 className="text-3xl text-[#7FD8BE]">Flavor Fusion</h1>
              <p>
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
