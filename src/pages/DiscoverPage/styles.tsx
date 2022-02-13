import { SearchFiltersCont } from "../../components/SearchBar/styles";
import styled from "styled-components";

export const GlobalStyle = styled.div`
  height: 100vw;
  width: 100vw;
`;

export const DiscoverWrapper = styled.main`
  display: grid;
  grid-template-columns: 370px 766px 1fr;
  grid-template-rows: 60px 198px 220px;
  background-color: #f6f7f9;

  grid-template-areas:
    "nav . ."
    "nav main search"
    "nav main filter"
    "nav main filter";

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-right: 10px;
    gap: 5px;
  }
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  grid-area: main;
  > div {
    font-family: "Lato", sans-serif;
  }

  @media (max-width: 768px) {
  }
`;
MovieContainer.displayName = "MovieContainer";

export const MobilePageTitle = styled.h1`
  @media (max-width: 768px) {
    display: flex;
    gap: 20px;
    grid-area: title;
    font-family: "Lato", sans-serif;
  }
`;

export const MobileSearch = styled(SearchFiltersCont)`
  @media (max-width: 768px) {
  }
`;
