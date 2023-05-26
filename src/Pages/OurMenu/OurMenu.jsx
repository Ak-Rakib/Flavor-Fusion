import React from "react";
import Cover from "../../Shared/Cover/Cover";
import SharedTitle from "../../Components/SharedTitle/SharedTitle";
import { Helmet } from "react-helmet-async";
import useMenu from "../../Hooks/Hooks";
import SharedMenuItems from "../../Shared/SharedMenuItems/SharedMenuItems";

const OurMenu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Flavor Fusion || Menu</title>
      </Helmet>
      <div className="mb-20">
        <Cover
          img={`https://i.ibb.co/zRHv7wM/pexels-waldemar-2290070.jpg`}
          title={"OUR MENU"}
          details={"Would You Like To Try A Dish?"}
        ></Cover>
      </div>
      <SharedTitle
        subHeading={"---Don't miss---"}
        heading={"TODAY'S OFFER"}
      ></SharedTitle>
      <SharedMenuItems items={offered}></SharedMenuItems>

      {/* for Dessert */}
      <SharedMenuItems
        items={dessert}
        img="https://i.ibb.co/gdKk60T/pexels-joaquin-egea-88917.jpg"
        title={"DESSERTS"}
        details={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></SharedMenuItems>

      {/* For Pizza */}
      <SharedMenuItems
        items={pizza}
        img="https://i.ibb.co/BcDdhZy/pexels-taryn-elliott-7172067.jpg"
        title={"PIZZA"}
        details={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></SharedMenuItems>

      {/* for Salad */}
      <SharedMenuItems
        items={salad}
        img="https://i.ibb.co/TbsfNwb/pexels-veer-sajid-15580730.jpg"
        title={"SALAD"}
        details={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></SharedMenuItems>

      {/* for soup */}
      <SharedMenuItems
        items={soup}
        img="https://i.ibb.co/YhhsW0d/pexels-cats-coming-955137.jpg"
        title={"SOUP"}
        details={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></SharedMenuItems>
    </div>
  );
};

export default OurMenu;
