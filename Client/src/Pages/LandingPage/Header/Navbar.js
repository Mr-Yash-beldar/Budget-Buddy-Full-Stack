import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Menu from "../mobile_bar.png";
import Close from "../close.png";

const Navbar = (props) => {

    const [isMobile, setIsMobile] = useState(true);
  const navigate = useNavigate();
  const handleLogout = async () => {
    const res = await fetch("user/logout");
    props.setIsLoggedIn(false);
    navigate("/");
  };
  return (
    <>
      <nav className="nav-mobile lg:hidden  ">
        <div
          className="pt-4 lg:flex lg:py-5 items-center lg:text-xl text-sm lg:justify-between justify-start"
          id="navbar"
        >
          <div className="flex">
            <h1 className="text-mj-yellow text-3xl font-semibold pt-4">
              Budget Buddy
            </h1>
            <button
              className=" ml-auto mt-4 bg-mj-yellow rounded-md "
              onClick={() => setIsMobile(!isMobile)}
            >
              {isMobile ? (
                <img src={Menu} className="h-10 w-10 p-2 "></img>
              ) : (
                <img src={Close} className="h-10 w-10 p-3 "></img>
              )}
            </button>
          </div>

          <div
            onClick={() => setIsMobile(true)}
            className={
              isMobile
                ? "text-mj-yellow hidden"
                : "text-mj-yellow grid grid-rows-3 w-fit ml-24 text-center text-xl "
            }
          >
            <Link to="/about-us">
              <div className="lg:px-4 px-1 py-4 cursor-pointer hover:bg-jp-black hover:rounded-md mx-2 ">
                <h1>About Us</h1>
              </div>
            </Link>
            <div
              onClick={props.openModalContact}
              className="lg:px-4 px-1 py-4 cursor-pointer hover:bg-jp-black hover:rounded-md ml-2 mr-4"
            >
              <h1>Contact Us</h1>
            </div>

            {props.isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-mj-yellow text-mj-black px-3 py-1 rounded-md font-semibold hover:scale-110 duration-200 ease-in-out"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={props.openModalLogin}
                className="bg-mj-yellow text-mj-black px-3 py-1 rounded-md font-semibold hover:scale-110 duration-200 ease-in-out"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>

      <div
        className="nav-desktop hidden lg:flex lg:py-5 items-center lg:text-xl text-sm lg:justify-between justify-start"
        id="navbar"
      >
        <h1 className="text-rp-yellow lg:text-4xl font-semibold text-xl">
          Budget Buddy
        </h1>
        <div className="grid grid-cols-3 lg:flex items-center lg:justify-between text-mj-yellow ">
          <Link to="/about-us">
            <div className="lg:px-4 px-1 py-4 cursor-pointer hover:bg-jp-black hover:rounded-md mx-2  ">
              <h1>Team</h1>
            </div>
          </Link>

          <Link to="#Feature">
            <div className="lg:px-4 px-1 py-4 cursor-pointer hover:bg-jp-black hover:rounded-md mx-2  ">
              <h1>Feature</h1>
            </div>
          </Link>

          <Link to="#About">
            <div className="lg:px-4 px-1 py-4 cursor-pointer hover:bg-jp-black hover:rounded-md mx-2  ">
              <h1>About</h1>
            </div>
          </Link>
          <div
            onClick={props.openModalContact}
            className="lg:px-4 px-1 py-4 cursor-pointer hover:bg-jp-black hover:rounded-md ml-2 mr-4"
          >
            <h1>Contact Us</h1>
          </div>

          {props.isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-mj-yellow text-mj-black px-3 py-1 rounded-md font-semibold hover:scale-110 duration-200 ease-in-out"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={props.openModalLogin}
              className="bg-mj-yellow text-mj-black px-3 py-1 rounded-md font-semibold hover:scale-110 duration-200 ease-in-out"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
