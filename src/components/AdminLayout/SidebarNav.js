import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../images/admin.png";
import dashboard from "../../images/dashboard.png";
import list from "../../images/list.png";
import users from "../../images/users.png";
import user from "../../images/user.png";
import reset from "../../images/reset.png";
import { useUser } from "../../context/userContext";

export const SidebarNav = () => {
  const push = useNavigate();
  const { logout, userName } = useUser();
  const { pathname } = useLocation();
  console.log("🚀 ~ SidebarNav ~ pathname:", pathname);
  const [hovered, setHovered] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const menus = [
    {
      id: 1,
      title: "Dashboard",
      path: "/dashboard",
      icon: dashboard,
    },
    {
      id: 2,
      title: "Courses",
      path: "/admin/course",
      icon: list,
    },
    {
      id: 3,
      title: "Students",
      path: "/admin/student",
      icon: users,
    },

    {
      id: 90,
      title: "Blogs",
      path: "/admin/blog",
      icon: list,
    },
    {
      id: 91,
      title: "Admins",
      path: "/admin/admins",
      icon: users,
    },
    {
      id: 92,
      title: "Personal Information",
      path: "/admin/profile",
      icon: user,
    },
    {
      id: 93,
      title: "Reset Password",
      path: "/admin/reset-password",
      icon: reset,
    },
  ];
  const logoutHandler = () => {
    logout();
    push("/");
  };
  return (
    <div>
      <div
        style={{ minWidth: "250px" }}
        className="position-fixed top-0 start-0 vh-100 bg-white text-dark shadow-lg overflow-auto"
      >
        <div className="d-flex flex-column h-100 p-4">
          <div
            className="d-flex border-bottom mb-4 pb-1 border-warning"
            style={{ alignItems: "center" }}
          >
            <img
              width={30}
              src={logo}
              alt="logo"
              className="me-2"
              height={30}
            />
            <div>
              <h6 className="fs-5 m-0 p-0 fw-semibold text-truncate">
                Welcome to EmpowerHer
              </h6>
            </div>
          </div>

          <div className="flex-grow-1 mb-4">
            {menus?.map((page) => (
              <div className=" py-2 ">
                <NavLink
                  key={page.path}
                  onMouseEnter={() => {
                    setHovered(true);
                    setHoveredId(page.id);
                  }}
                  onMouseLeave={() => {
                    setHovered(false);
                    setHoveredId(null);
                  }}
                  // to={"/"}
                  to={page.path}
                  className={`d-block text-dark px-3 py-2 rounded ${
                    (pathname === page.path ||
                      (hovered && hoveredId === page.id)) &&
                    "bg-warning"
                  } `}
                  // activeClassName="bg-light text-dark"
                >
                  <img
                    width={20}
                    src={page.icon}
                    alt="logo"
                    className="me-3"
                    height={20}
                  />
                  {page.title}
                </NavLink>
              </div>
            ))}
          </div>

          <div className="mt-auto">
            <button
              className="btn btn-danger w-100 mt-4"
              onClick={logoutHandler}
            >
              LOGOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarNav;
