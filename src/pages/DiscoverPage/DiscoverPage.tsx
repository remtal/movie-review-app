/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import * as colors from "../../utils/colors";
import * as fetcher from "../../utils/fetcher";

import {
  DiscoverWrapper,
  GlobalStyle,
  MobilePageTitle,
  MobileSearch,
  MovieContainer,
} from "./styles";
import { useEffect, useState } from "react";

import Axios from "axios";
import ExpandableFilter from "../../components/ExpandableFilter";
import { HiMenu } from "react-icons/hi";
import MovieItem from "../../components/MovieItem";
import SearchBar from "../../components/SearchBar";
import SideNavBar from "../../components/SideNavBar";

export default function Discover() {
  const [data, setData] = useState<any[]>([]);
  const apiKey = process.env.REACT_APP_API;

  const DISCOVER_API = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

  useEffect(() => {
    Axios.get(DISCOVER_API).then((response) => {
      setData(response.data.results);
    });
  }, [DISCOVER_API, apiKey]);

  function updateData(response: any[]) {
    setData(response);
  }

  return (
    <GlobalStyle>
      <DiscoverWrapper>
        <MobilePageTitle>
          {" "}
          <HiMenu size="40px" />
          Discover
        </MobilePageTitle>
        <SideNavBar />
        <MovieContainer>
          <div>{data.length} movies </div>
          {data?.map((item, index) => {
            return (
              <MovieItem
                key={item.id}
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

        <SearchBar updateData={updateData} />
        <ExpandableFilter />
      </DiscoverWrapper>
    </GlobalStyle>
  );
}
