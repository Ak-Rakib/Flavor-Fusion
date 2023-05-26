import React from "react";
import Cover from "../../Shared/Cover/Cover";
import PopularMenu from "../Home/PopularMenu/PopularMenu";

const OurMenu = () => {
  return (
    <div>
      <div className="mb-20">
        <Cover
          img={`https://i.ibb.co/zRHv7wM/pexels-waldemar-2290070.jpg`}
          title={"OUR MENU"}
          details={"Would You Like To Try A Dish?"}
        ></Cover>
      </div>
      <PopularMenu></PopularMenu>
      <div className="mb-20">
        <Cover
          img={`https://i.ibb.co/BcDdhZy/pexels-taryn-elliott-7172067.jpg`}
          title={"PIZZA"}
          details={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.?"
          }
        ></Cover>
      </div>
      <PopularMenu></PopularMenu>
      <div className="mb-20">
        <Cover
          img={`https://i.ibb.co/gdKk60T/pexels-joaquin-egea-88917.jpg`}
          title={"DESSERTS"}
          details={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Cover>
      </div>
      <PopularMenu></PopularMenu>
      <div className="mb-20">
        <Cover
          img={`https://i.ibb.co/YhhsW0d/pexels-cats-coming-955137.jpg`}
          title={"SOUP"}
          details={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Cover>
      </div>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default OurMenu;
