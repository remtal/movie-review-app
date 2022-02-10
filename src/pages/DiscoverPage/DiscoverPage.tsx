/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import * as colors from "../../utils/colors";
import * as fetcher from "../../utils/fetcher";

import {
  BodyWrapper,
  DiscoverWrapper,
  GlobalStyle,
  MobilePageTitle,
  MovieFilters,
  MovieResults,
} from "./styles";

import Checkbox from "../../components/Checkbox/Checkbox";
import MovieItem from "../../components/MovieItem";
import MovieList from "../../components/MoviesList";
import React from "react";
import SearchBar from "../../components/SearchBar";
import SearchFilter from "../../components/SearchFilters";
import SideNavBar from "../../components/SideNavBar";

export default function Discover() {
  // Write a function to preload the popular movies when page loads & get the movie genres

  // Write a function to trigger the API request and load the search results based on the keyword and year given as parameters

  return (
    <GlobalStyle>
      <DiscoverWrapper>
        <SideNavBar />
        <BodyWrapper>
          <MovieItem />
          <SearchBar />
          <SearchFilter />
        </BodyWrapper>
      </DiscoverWrapper>
    </GlobalStyle>
  );
}
