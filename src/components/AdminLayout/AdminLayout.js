import React from "react";
import { BrowserRouter } from "react-router-dom";
import SidebarNav from "./SidebarNav";
import Navbar from "../Navbar/Navbar";
import Header from "../header/Header";
import Scrollbar from "../scrollbar/scrollbar";

const AdminLayout = ({ children }) => {
  return (
    <div className="row">
      <div className=" d-none d-lg-block col-2">
        <SidebarNav />
      </div>
      <div className="col-12 col-lg-10">
        <Header hclass={"wpo-header-style-4"} />
        <div className="px-0 px-md-4">
          <div className=" ps-0 ps-md-4">{children}</div>
        </div>
      </div>
      <Scrollbar />
    </div>
  );
};

export default AdminLayout;
