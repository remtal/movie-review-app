/* eslint-disable @typescript-eslint/no-unused-vars */

import { FiltersWrapper, SearchFiltersCont, YearFilterCont } from "./styles";
import React, { useState } from "react";

import Axios from "axios";
import { IoIosOptions } from "react-icons/io";
import calender from "../../assets/year-icon.png";
import searchIcon from "../../assets/search-icon-yellow.png";

interface Props {
  updateData: (response: any[]) => void;
  className?: string;
}

export default function SearchFilters({ updateData, className }: Props) {
  const [data, setData] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const apiKey = process.env.REACT_APP_API;

  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;

  const handleSubmit = (e: any) => {
    e.preventDefault();

    Axios.get(SEARCH_API + search).then((response) => {
      setData(response.data.results);
      updateData(response.data.results);
    });
  };

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <FiltersWrapper className={className}>
      <form onSubmit={handleSubmit}>
        <SearchFiltersCont className={className}>
          <img src={searchIcon} alt="search" />
          <input
            type="text"
            className="search"
            placeholder="Search for movies"
            value={search}
            onChange={handleChange}
          />
          <IoIosOptions size="35px" />
        </SearchFiltersCont>
      </form>
      <form action="/" method="get">
        <YearFilterCont>
          <img src={calender} alt="filter" />
          <input
            type="text"
            className="year"
            id="movie-search"
            placeholder="Year of Release"
          />
        </YearFilterCont>
      </form>
    </FiltersWrapper>
  );
}
