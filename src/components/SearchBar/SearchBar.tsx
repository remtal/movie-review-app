/* eslint-disable @typescript-eslint/no-unused-vars */

import * as colors from "../../utils/colors";

import { FiltersWrapper, SearchFiltersCont } from "./styles";

import React from "react";
import calender from "../../assets/year-icon.png";
import expandableFilter from "../ExpandableFilter";
import searchBar from "../SearchBar";
import searchIcon from "../../assets/search-icon-yellow.png";

// interface Props {
//   genres: string;
//   ratings: string;
//   languages: string;
//   searchMovies: string;
// }
export default function SearchFilters() {
  return (
    <FiltersWrapper>
      <form action="/" method="get">
        <SearchFiltersCont>
          <img src={searchIcon} alt="search" />
          <input type="text" id="movie-search" />
        </SearchFiltersCont>
      </form>
      <SearchFiltersCont>
        <img src={calender} alt="filter" />
      </SearchFiltersCont>
    </FiltersWrapper>
  );
}
