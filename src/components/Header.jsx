import React, { useContext, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

// importing the images from assets
import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";

//importing the required icons from react-icons library
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { Context } from "../context/contextApi";
import Loader from "../shared/Loader";

const Header = () => {
  //for binding the input value to the input field
  const [searchQuery, setSearchQuery] = useState("");

  //collecting data from context api
  const { loading, mobileMenu, setMobileMenu } = useContext(Context);

  //for making navigation to different routes useNavigate hook is used.
  const navigate = useNavigate();

  //Function to handle searching
  const searchQueryHandler = (event, source) => {
    // event.key getting the pressed key of keyboard or clicked the search BTN
    if (
      (event?.key === "Enter" || source === "button") &&
      searchQuery?.length > 0
    ) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };

  // mobile menu toggle -- on mobile show icon for left navigation bar
  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  //getting the pathname from the current Location object
  const { pathname } = useLocation();
  //filter(Boolean) will remove the falsy values (undefined or empty values) from teh path name.
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black">
      {/* if lading true render <Loader/> else it will return loading*/}
      {loading && <Loader />}

      {/* ============== logo section ============== */}
      <div className="flex h-5 items-center">
        {/* showing hand burger icon in mobile view */}
        {pageName !== "video" && (
          <div
            className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
            onClick={mobileMenuToggle}
          >
            {mobileMenu ? (
              <CgClose className="text-white text-xl" />
            ) : (
              <SlMenu className="text-white text-xl" />
            )}
          </div>
        )}
        <Link to="/" className="flex h-5 items-center">
          {/* logo */}
          <img
            className="h-full hidden dark:md:block"
            src={ytLogo}
            alt="Youtube"
          />
          {/* Mobile logo */}
          <img
            className="h-full dark:md:hidden"
            src={ytLogoMobile}
            alt="Youtube"
          />
        </Link>
        {/* group class used to apply styles for all items */}
      </div>
      {/* ============== logo section ends here ============== */}

      {/* ============== Search section ============== */}
      <div className="group flex items-center">
        <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
          {/* search icon only visible in md devices when the input is focused*/}
          <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
            <IoIosSearch className="text-white text-xl" />
          </div>
          {/* input field */}
          <input
            type="text"
            className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={(event) => searchQueryHandler(event, "input")}
            value={searchQuery}
          />
          {/* search button */}
        </div>
        <button
          className="w-[40px] h-8 md:w-[60px] md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]"
          onClick={(event) => searchQueryHandler(event, "button")}
        >
          <IoIosSearch className="text-white text-xl" />
        </button>
      </div>
      {/* ============= Search section ends here =============== */}

      {/* ===========   Right side icons -- video add, bell and profile icon ===============*/}
      <div className="flex items-center">
        <div className="hidden md:flex">
          <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <RiVideoAddLine className="text-white text-xl cursor-pointer" />
          </div>
          <div className="flex items-center ml-2 justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <FiBell className="text-white text-xl cursor-pointer" />
          </div>
          <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
            <img
              src="https://xsgames.co/randomusers/avatar.php?g=male"
              alt="Profile Image"
            />
          </div>
        </div>
      </div>
      {/* =================== Right side section ends here ================== */}
    </div>
  );
};
export default Header;
