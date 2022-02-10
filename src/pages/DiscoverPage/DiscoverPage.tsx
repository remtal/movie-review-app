/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import * as colors from "../../utils/colors";
import * as fetcher from "../../utils/fetcher";

import { DiscoverWrapper, GlobalStyle } from "./styles";
import { useEffect, useState } from "react";

import Axios from "axios";
import ExpandableFilter from "../../components/ExpandableFilter";
import MovieItem from "../../components/MovieItem";
import SearchBar from "../../components/SearchBar";
import SideNavBar from "../../components/SideNavBar";

export default function Discover() {
  const [data, setData] = useState([]);
  const apiKey = process.env.REACT_APP_API;
  useEffect(() => {
    Axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`).then(
      (response) => {
        setData(response.data);
      }
    );
  }, [apiKey]);
  console.log(data);
  // Write a function to preload the popular movies when page loads & get the movie genres

  // Write a function to trigger the API request and load the search results based on the keyword and year given as parameters

  return (
    <GlobalStyle>
      <DiscoverWrapper>
        <SideNavBar />
        <MovieItem />
        <SearchBar />
        <ExpandableFilter />
      </DiscoverWrapper>
    </GlobalStyle>
  );
}
