import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css"
import { FaHome, FaCalendar, FaWallet, FaHamburger, FaInbox, FaShoppingCart, FaShoppingBag, FaPhone } from 'react-icons/fa';



const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-[#7FD8BE] text-base-content">
          {/* Sidebar content here */}
          <li>
            <a className="">
              <span className="text-4xl text-white">F</span>lavor-Fusion
            </a>
          </li>


          {/* Active link style set in index.css */}

          
          <li>
            <NavLink to="/dashboard/home" className="uppercase"><FaHome></FaHome>user Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation" className="uppercase"><FaCalendar></FaCalendar>Reservation</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history" className="uppercase"><FaWallet></FaWallet>payment history</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myCart" className="uppercase"><FaShoppingCart></FaShoppingCart>my cart</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review" className="uppercase"><FaInbox></FaInbox>Add review</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking" className="uppercase"><FaCalendar></FaCalendar>my booking</NavLink>
          </li>
          <div className="divider"></div> 
          <li>
            <NavLink to="/dashboard/home" className="uppercase"><FaHome></FaHome>Home</NavLink>
          </li>
          <li>
            <NavLink to="/menu" className="uppercase"><FaHamburger></FaHamburger>Menu</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/shop/salad" className="uppercase"><FaShoppingBag></FaShoppingBag>Shop</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/contact" className="uppercase"><FaPhone></FaPhone>Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
