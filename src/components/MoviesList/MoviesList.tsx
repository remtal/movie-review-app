/* eslint-disable @typescript-eslint/no-unused-vars */

import MovieItem from "../MovieItem";
import { MoviesWrapper } from "./styles";
import React from "react";

interface Props {
  movies: string;
  genres: string;
}

export default function MoviesList({ movies, genres }: Props) {
  return (
    <MoviesWrapper>
      {/* Finish the MovieItem component and use it here to display the movie results */}
    </MoviesWrapper>
  );
}
