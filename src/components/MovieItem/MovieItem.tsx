import {
  Date,
  Description,
  Genre,
  MovieItemWrapper,
  Name,
  Score,
} from "./styles";

import React from "react";

export default function MovieItem() {
  return (
    // Complete the MovieItem component
    <MovieItemWrapper>
      <div>
        <Name>Bad Genius</Name>
        <Score>7.5</Score>
      </div>
      <Genre>Action</Genre>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </Description>
      <Date>2017-05-03</Date>
    </MovieItemWrapper>
  );
}
