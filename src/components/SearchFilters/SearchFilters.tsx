/* eslint-disable @typescript-eslint/no-unused-vars */

import * as colors from "../../utils/colors";

import { FilterWrapper, SubHeaderContainer } from "./styles";

import { AiOutlineMinus } from "react-icons/ai";
import React from "react";

export default function SearchFilters() {
  return (
    <FilterWrapper>
      <h1>Movie</h1>
      <SubHeaderContainer>
        <AiOutlineMinus size="20px" />
        <span>Select genre(s)</span>
      </SubHeaderContainer>
    </FilterWrapper>
  );
}
