import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {
  DropButton,
  DropdownContent,
  DropdownItem,
  FilterWrapper,
  Filters,
  SubHeaderContainer,
} from "./styles";
import React, { useState } from "react";

import Checkbox from "../Checkbox";

export default function ExpandableFilter() {
  const genres = [
    {
      name: "Action",
    },
    {
      name: "Adventure",
    },
    {
      name: "Animation",
    },
    {
      name: "Comedy",
    },
    {
      name: "Crime Film",
    },
    {
      name: "Documentary",
    },
    {
      name: "Drama",
    },
    {
      name: "Erotic",
    },
    {
      name: "Family",
    },
    {
      name: "Fantasy",
    },
    {
      name: "History",
    },
    {
      name: "Horror",
    },
  ];

  const languages = [
    {
      name: "Greek",
    },
    {
      name: "English",
    },
    {
      name: "Russian",
    },
    {
      name: "Polish",
    },
  ];
  const [genreCollapse, setGenreCollapse] = useState(false);
  const [languageCollapse, setLanguageCollapse] = useState(false);
  const [voteCollapse, setVoteCollapse] = useState(false);

  return (
    <FilterWrapper>
      <h1>Movie</h1>
      <SubHeaderContainer>
        <Filters>
          <DropButton onClick={() => setGenreCollapse(!genreCollapse)}>
            {genreCollapse ? (
              <AiOutlineMinus size="20px" />
            ) : (
              <AiOutlinePlus size="20px" />
            )}
          </DropButton>
          <DropdownContent>
            <span>Select genre(s)</span>
            {genreCollapse &&
              genres.map(({ name }, key) => (
                <DropdownItem key={key}>
                  <Checkbox />
                  <span>{name}</span>
                </DropdownItem>
              ))}
          </DropdownContent>
        </Filters>
        <Filters>
          <DropButton onClick={() => setVoteCollapse(!voteCollapse)}>
            {voteCollapse ? (
              <AiOutlineMinus size="20px" />
            ) : (
              <AiOutlinePlus size="20px" />
            )}
          </DropButton>
          <span>Select min. vote</span>
        </Filters>
        <Filters>
          <DropButton onClick={() => setLanguageCollapse(!languageCollapse)}>
            {languageCollapse ? (
              <AiOutlineMinus size="20px" />
            ) : (
              <AiOutlinePlus size="20px" />
            )}
          </DropButton>
          <DropdownContent>
            <span>Select language</span>
            {languageCollapse &&
              languages.map(({ name }, key) => (
                <DropdownItem key={key}>
                  <Checkbox />
                  <span>{name}</span>
                </DropdownItem>
              ))}
          </DropdownContent>
        </Filters>
      </SubHeaderContainer>
    </FilterWrapper>
  );
}
