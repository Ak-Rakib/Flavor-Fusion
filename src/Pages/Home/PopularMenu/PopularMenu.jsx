import SharedTitle from "../../../Components/SharedTitle/SharedTitle";
import useMenu from "../../../Hooks/Hooks";
import SharedMenuItems from "../../../Shared/SharedMenuItems/SharedMenuItems";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularMenu = menu.filter((item) => item.category === "popular");

  return (
    <div className="mb-20">
      <SharedTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SharedTitle>
      <SharedMenuItems items={popularMenu}></SharedMenuItems>
      <div className="flex justify-center">
        <button className="btn bg-[#7FD8BE] uppercase  mt-10 border-0">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
