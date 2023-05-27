/* eslint-disable react/prop-types */
import React from "react";

const SharedCard = ({ menu }) => {
  // eslint-disable-next-line no-unused-vars
  const { image, name, recipe } = menu;
  return (
    <div>
      <div className="card w-96 bg-base-300 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" className="w-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn bg-[#7FD8BE] uppercase border-0">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharedCard;
