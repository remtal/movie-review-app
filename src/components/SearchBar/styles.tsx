import styled from "styled-components";

export const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 250px;
  height: 100px;
  margin-top: 39px;

  border-radius: 5px;
  background-color: white;
  padding: 20px;
  grid-area: search;
  grid-column: 3;
  @media (max-width: 768px) {
    grid-area: searches;
    background-color: transparent;
    width: 75%;
    margin-top: 0px;
    height: fit-content;
    padding: 0;
    padding-left: 20px;
  }
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

  input {
    width: 80%;
    position: absolute;
    bottom: 4px;
    font-size: 16px;
    border: none;
    appearance: none;
    outline: none;
    color: #c4ca18;
    font-family: "Lato", sans-serif;
    font-weight: 600;

    ::placeholder {
      color: #c4ca18;
    }
  }
  img {
    padding-right: 15px;
  }

  & .year {
    font-weight: 200;
  }
  /* svg {
    display: none;
  } */

  @media (max-width: 768px) {
    > input {
      background-color: transparent;
    }
    > svg {
      color: #c4ca18;
      position: absolute;
      right: -20%;
      bottom: -21%;
      border-bottom: 2px solid #c4ca18;
    }
  }
`;

export const YearFilterCont = styled(SearchFiltersCont)`
  @media (max-width: 768px) {
    display: none;
  }
`;
export const CategoryTitle = styled.div``;
