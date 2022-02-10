import styled from "styled-components";

export const GlobalStyle = styled.div`
  height: 100vw;
  width: 100vw;
  background-color: #f6f7f9;
`;

export const DiscoverWrapper = styled.main`
  display: grid;
  grid-template-columns: 325px;
  background-color: #f6f7f9;

  grid-template-areas: "nav body";
`;

export const BodyWrapper = styled.div`
  display: grid;
  grid-template-columns: 560px 1fr;
  grid-area: body;
  padding-top: 45px;
  grid-template-areas:
    "main search"
    ". filter";
`;

export const TotalCounter = styled.div`
  font-weight: 900;
`;

export const MovieResults = styled.div``;

export const MovieFilters = styled.div``;

export const MobilePageTitle = styled.header``;
