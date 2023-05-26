import PopularMenuShowing from "./PopularMenuShowing/PopularMenuShowing";
import SharedTitle from "../../../Components/SharedTitle/SharedTitle";
import useMenu from "../../../Hooks/Hooks";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularMenu = menu.filter(item => item.category === "popular");

  return (
    <div className="mb-20">
      <SharedTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SharedTitle>
      <div className="grid md:grid-cols-2 gap-5">
        {popularMenu.map((info) => (
          <PopularMenuShowing key={info._id} info={info}></PopularMenuShowing>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn bg-[#7FD8BE] uppercase  mt-10 border-0">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
