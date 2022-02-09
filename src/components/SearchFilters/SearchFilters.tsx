/* eslint-disable @typescript-eslint/no-unused-vars */

import * as colors from "../../utils/colors";

import { CategoryTitle, FiltersWrapper, SearchFiltersCont } from "./styles";

import ExpandableFilter from "../ExpandableFilter";
import React from "react";
import SearchBar from "../SearchBar";

interface Props {
  genres: string;
  ratings: string;
  languages: string;
  searchMovies: string;
}
export default function SearchFilters({
  genres,
  ratings,
  languages,
  searchMovies,
}: Props) {
  return (
    <FiltersWrapper>
      <SearchFiltersCont className="search_inputs_cont">
        {/* Implement a "SearchBar" component and re-use it for the keyword and the year inputs */}
      </SearchFiltersCont>
      <SearchFiltersCont>
        <CategoryTitle>Movies</CategoryTitle>
        {/* Implement a component called "ExpandableFilter" and apply it to all filter categories */}
      </SearchFiltersCont>
    </FiltersWrapper>
  );
}
