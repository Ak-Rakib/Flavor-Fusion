/* eslint-disable react/prop-types */
import React from "react";
import PopularMenuShowing from "../../Pages/Home/PopularMenu/PopularMenuShowing/PopularMenuShowing";
import Cover from "../Cover/Cover";
import { Link } from "react-router-dom";

const SharedMenuItems = ({ items, title, img, details }) => {
  return (
    <div>
      <div className="mt-20 mb-10">
        {title && <Cover img={img} title={title} details={details}></Cover>}
      </div>
      <div className="grid md:grid-cols-2 gap-5 py-5">
        {items.map((info) => (
          <PopularMenuShowing key={info._id} info={info}></PopularMenuShowing>
        ))}
      </div>
      <div className="text-center mt-5 mb-5">
        <Link to={`/shop/${title}`}>
          <button className="btn bg-[#7FD8BE] uppercase border-0">
            order your favorite food
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SharedMenuItems;
