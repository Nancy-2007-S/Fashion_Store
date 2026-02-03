import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <NavLink
          className="sidebar-option"
          to={"/add"}
        >
          <img className="sidebar-icon" src={assets.add_icon} alt="Add Items" />
          <p className="sidebar-label">Add Items</p>
        </NavLink>
        <NavLink
          className="sidebar-option"
          to={"/list"}
        >
          <img className="sidebar-icon" src={assets.parcel_icon} alt="List Items" />
          <p className="sidebar-label">List Items</p>
        </NavLink>
        <NavLink
          className="sidebar-option"
          to={"/orders"}
        >
          <img className="sidebar-icon" src={assets.order_icon} alt="Add Products" />
          <p className="sidebar-label">View Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
