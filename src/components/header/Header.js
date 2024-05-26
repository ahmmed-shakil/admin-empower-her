import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";
import Logo from "../../images/logo_main.png";
import userImg from "../../images/user.png";
import HeaderTopbar from "../HeaderTopbar/HeaderTopbar";

const Header = (props) => {
  const [menuActive, setMenuState] = useState(false);
  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <header id="header" className="shadow-sm ps-3 w-100">
      <HeaderTopbar topbarClass={props.topbarClass} />
      <div className={`wpo-site-header ${props.hclass}`}>
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-4 col-3 d-lg-none dl-block">
                <div className="mobail-menu">
                  <MobileMenu />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="navbar-header">
                  <Link
                    onClick={ClickHandler}
                    className="navbar-brand"
                    to="/home"
                  >
                    <img height={60} width={60} src={Logo} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-1 col-1">
                <div
                  id="navbar"
                  className="collapse navbar-collapse navigation-holder"
                >
                  <button className="menu-close">
                    <i className="ti-close"></i>
                  </button>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-2">
                <div className="header-right">
                  <div
                    id="navbar"
                    className="collapse navbar-collapse navigation-holder"
                  >
                    <button className="menu-close">
                      <i className="ti-close"></i>
                    </button>
                    <ul className="nav navbar-nav mb-0 mb-lg-0">
                      <li>
                        <Link
                          onClick={ClickHandler}
                          className=" d-flex align-items-center"
                          to="/admin/profile"
                        >
                          <img
                            height={24}
                            width={24}
                            src={userImg}
                            alt="logo"
                          />{" "}
                          <h6 className=" m-0 p-0 ms-2">John Doe</h6>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
