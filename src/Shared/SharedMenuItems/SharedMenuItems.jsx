/* eslint-disable react/prop-types */
import React from "react";
import PopularMenuShowing from "../../Pages/Home/PopularMenu/PopularMenuShowing/PopularMenuShowing";
import Cover from "../Cover/Cover";

const SharedMenuItems = ({ items, title, img, details }) => {
  return (
    <div>
     <div className="mt-20 mb-10">
     {title && (
        <Cover
          img={img}
          title={title}
          details={details}
        ></Cover>
      )}
     </div>
      <div className="grid md:grid-cols-2 gap-5 py-5">
        {items.map((info) => (
          <PopularMenuShowing key={info._id} info={info}></PopularMenuShowing>
        ))}
      </div>
    </div>
  );
};

export default SharedMenuItems;
