import styled from "styled-components";

export const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 250px;
  height: 100px;
  border-radius: 5px;
  background-color: white;
  padding: 20px;
  grid-area: filter;
`;

export const SearchFiltersCont = styled.div`
  position: relative;
  :after {
    content: "";
    position: absolute;
    top: 37px;
    left: 0;
    right: 0px;
    height: 0.5em;
    border-top: 2px solid #c4ca18;
  }
  /* transition: all 0.3s ease-in-out; */
`;

export const CategoryTitle = styled.div``;
