import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";

const LeftNav = () => {
  const { selectCategories, setSelectCategories, mobileMenu } =
    useContext(Context);

  const navigate = useNavigate();

  // changing the categories based on user input and change in category will render fetch function
  const clickHandler = (name, item) => {
    switch (item) {
      case "category":
        return setSelectCategories(name);
      case "home":
        return setSelectCategories(name);
      case "menu":
        return false;
    }
  };

  return (
    // left navigation bar , for mobiles display it as hand-burger icon and use translate property for displaying it on clicking
    <div
      className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
        mobileMenu ? "translate-x-0" : ""
      }`}
    >
      {/* Categories and Menus */}
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <nav key={item.name}>
              <LeftNavMenuItem
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate("/");
                }}
                className={`${
                  selectCategories === item.name ? "bg-white/[0.15]" : ""
                }`}
              />

              {item.divider && <hr className="border-white/[0.2] my-5" />}
            </nav>
          );
        })}
        <hr className="border-white/[0.2] my-5" />

        <div className="text-white/[0.5] text-[12px]">
          Clone By : Rishikesh T
        </div>
      </div>
    </div>
  );
};
export default LeftNav;
