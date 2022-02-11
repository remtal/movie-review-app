import {
  Date,
  Description,
  Genre,
  MovieItemWrapper,
  Name,
  Score,
  Thumbnail,
} from "./styles";

import React from "react";

interface Props {
  title: string;
  vote_average: string;
  genre: string;
  overview: string;
  release_date: string;
  movieThumbnail: string;
}

const IMG_API = "https://image.tmdb.org/t/p/w500";
export default function MovieItem({
  title,
  vote_average,
  genre,
  overview,
  release_date,
  movieThumbnail,
}: Props) {
  return (
    // Complete the MovieItem component
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
