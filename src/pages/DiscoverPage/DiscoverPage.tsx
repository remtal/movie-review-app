/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import * as colors from "../../utils/colors";
import * as fetcher from "../../utils/fetcher";

import { DiscoverWrapper, GlobalStyle, MovieContainer } from "./styles";
import { useEffect, useState } from "react";

import Axios from "axios";
import ExpandableFilter from "../../components/ExpandableFilter";
import MovieItem from "../../components/MovieItem";
import SearchBar from "../../components/SearchBar";
import SideNavBar from "../../components/SideNavBar";

export default function Discover() {
  const [data, setData] = useState<any[]>([]);
  const apiKey = process.env.REACT_APP_API;
  useEffect(() => {
    Axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
    ).then((response) => {
      setData(response.data.results);
    });
  }, [apiKey]);
  console.log(data);
  // Write a function to preload the popular movies when page loads & get the movie genres

  // Write a function to trigger the API request and load the search results based on the keyword and year given as parameters

  return (
    <GlobalStyle>
      <DiscoverWrapper>
        <SideNavBar />
        <MovieContainer>
          <div>{data.length} movies </div>
          {data?.map((item, index) => {
            return (
              <MovieItem
                key={index}
                movieThumbnail={item.poster_path}
                title={item.title}
                vote_average={item.vote_average}
                genre={item.genre_ids}
                overview={item.overview}
                release_date={item.release_date}
              />
            );
          })}
        </MovieContainer>
        {/* <SearchBar /> */}
        {/* <ExpandableFilter /> */}
      </DiscoverWrapper>
    </GlobalStyle>
  );
}
