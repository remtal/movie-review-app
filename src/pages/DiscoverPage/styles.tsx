import styled from "styled-components";

export const GlobalStyle = styled.div`
  height: 100vw;
  width: 100vw;
  background-color: #f6f7f9;
`;

export const DiscoverWrapper = styled.main`
  display: grid;
  grid-template-columns: 370px 565px;
  grid-template-rows: 60px 1fr 1fr;
  background-color: #f6f7f9;

  grid-template-areas:
    "nav . ."
    "nav main search"
    "nav main filter"
    "nav main filter";
`;

export const TotalCounter = styled.div`
  font-weight: 900;
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  grid-area: main;
  > div {
    font-family: "Lato", sans-serif;
  }
`;
MovieContainer.displayName = "MovieContainer";
