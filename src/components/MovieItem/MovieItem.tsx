/* eslint-disable react-hooks/exhaustive-deps */

import {
  Date,
  Description,
  Genre,
  MovieItemWrapper,
  Name,
  Score,
  Thumbnail,
} from "./styles";
import React, { useEffect, useState } from "react";

import Axios from "axios";

interface Props {
  title: string;
  vote_average: string;
  genre: string;
  overview: string;
  release_date: string;
  movieThumbnail: string;
}

const IMG_API = "https://image.tmdb.org/t/p/w500";
const GENRE_API = `https://api.themoviedb.org/3/genre/movie/list?api_key=8345f890f01ebb699c49936f558f9506&language=en-US
`;

export default function MovieItem({
  title,
  vote_average,
  overview,
  release_date,
  genre,
  movieThumbnail,
}: Props) {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    Axios.get(GENRE_API)
      .then((response) => {
        setData(response.data.results);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <MovieItemWrapper>
      <Thumbnail src={IMG_API + movieThumbnail} />
      <div>
        <Name>{title}</Name>
        <Score>{vote_average}</Score>
      </div>
      <Genre>{genre}</Genre>
      <Description>{overview}</Description>
      <Date>{release_date}</Date>
    </MovieItemWrapper>
  );
}
