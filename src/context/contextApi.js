import React, { createContext, useState, useEffect } from "react";

import { fetchDataFromApi } from "../utils/api";

//global context
export const Context = createContext();

export const AppContext = (props) => {
  //initializing the states
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectCategories, setSelectCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  //useEffect for fetching data from api during initial render and on change in categories
  useEffect(() => {
    fetchSelectedCategoryData(selectCategories);
  }, [selectCategories]);

  // fetch data function -- query contains the category name
  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
      setSearchResults(contents);
      setLoading(false);
    });
  };

  // making the data to be available in global.  Context
  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {/* props.children will be the content inside <AppContext><AppContext/> */}
      {props.children}
    </Context.Provider>
  );
};
