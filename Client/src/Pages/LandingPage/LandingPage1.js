import React, { useEffect } from "react";
import Header from "./Header/Navbar";
import Footer from "./Footer/Footer";
import Vector from "./Vector.svg";

export default function LandingPage(props) {
 useEffect(() => {
      const checklogin = async () => {
        const res = await fetch("/user/auth");
        const data = await res.json();
        console.log(data);
        if (data.msg === "Login to Proceed") {
          props.setIsLoggedIn(false);
        } else {
          props.setIsLoggedIn(true);
        }
      };
      checklogin();
    });

  return (
    <div className="w-full h-full bg-rp-black lg:px-24 px-8">
      <Header
        openModalContact={props.openModalContact}
        openModalLogin={props.openModalLogin}
        isLoggedIn={props.isLoggedIn}
        setIsLoggedIn={props.setIsLoggedIn}
      />

      <div className="lg:grid lg:grid-cols-2 text-slate-300 lg:h-5/6 mt-32 lg:mt-4">
        <div className="my-auto">
          <div className="lg:text-5xl lg:py-3 text-2xl p-1 mt-16">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-mj-yellow sm:text-7xl">
              Budget Buddy
            </h2>
            {/* <span className="text-mj-yellow underline"> Budget Buddy </span> */}
            Your Personal Budgeting Assistant
          </div>
          <br />
        </div>
        <div className="my-auto mt-20 w-full">
          <img src={Vector} alt="join now" />
        </div>
      </div>

      <Footer
        isLoggedIn={props.isLoggedIn}
        openModalSignup={props.openModalSignup}
      />
    </div>
  );
}
