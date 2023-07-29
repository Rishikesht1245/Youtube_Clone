import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import SearchResultVideoCard from "./SearchResultVideoCard";

const SearchResult = () => {
  const [results, setResults] = useState();
  const { searchQuery } = useParams();
  const { setLoading } = useContext(Context);

  // fetch search data
  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    fetchSearchResults();
  }, []);

  const fetchSearchResults = () => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${searchQuery}`).then((res) => {
      console.log(res);
      setResults(res?.contents);
      setLoading(false);
    });
  };
  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        {results?.map((item, index) => {
          return (
            <SearchResultVideoCard
              key={item?.video?.videoId}
              video={item?.video}
            />
          );
        })}
      </div>
    </div>
  );
};
export default SearchResult;
