import React, { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/Hooks";
import SharedCard from "../../Shared/SharedCard/SharedCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const OurShop = () => {
  const categories = ["SALAD", "PIZZA", "SOUPS", "DESSERTS", "DRINKS"];
  const { category } = useParams();
  //   console.log(category);
  const initialIndex = categories.indexOf(category);
  const [menu] = useMenu();
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        Flavor Fusion || Shop
      </Helmet>
      <Cover
        img="https://i.ibb.co/Yb6XKhd/Korean-fried-chicken4.jpg"
        title={"OUR SHOP"}
        details={"WOULD YOU LIKE TO TRY A DISH?"}
      ></Cover>
      <div className="mt-10 text-center mb-10">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>

          <TabPanel>
            <div className="grid md:grid-cols-3 gap-10">
              {salad.map((menu) => (
                <SharedCard key={menu._id} menu={menu}></SharedCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 gap-10">
              {pizza.map((menu) => (
                <SharedCard key={menu._id} menu={menu}></SharedCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 gap-10">
              {soup.map((menu) => (
                <SharedCard key={menu._id} menu={menu}></SharedCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 gap-10">
              {dessert.map((menu) => (
                <SharedCard key={menu._id} menu={menu}></SharedCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 gap-10">
              {drinks.map((menu) => (
                <SharedCard key={menu._id} menu={menu}></SharedCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
