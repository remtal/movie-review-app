/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import * as colors from "../../utils/colors";
import * as fetcher from "../../utils/fetcher";

import {
  DiscoverWrapper,
  MobilePageTitle,
  MovieFilters,
  MovieResults,
} from "./styles";

import MovieItem from "../../components/MovieItem";
import MovieList from "../../components/MoviesList";
import React from "react";
import SearchFilters from "../../components/SearchFilters";
import SideNavBar from "../../components/SideNavBar";

export default function Discover() {
  // Write a function to preload the popular movies when page loads & get the movie genres

  // Write a function to trigger the API request and load the search results based on the keyword and year given as parameters

  return (
    <DiscoverWrapper>
      <SideNavBar />
      <MovieItem />
      <SearchFilters />
    </DiscoverWrapper>
  );
}
