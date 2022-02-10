import styled from "styled-components";

export const FilterWrapper = styled.div`
  position: relative;
  font-family: "Lato", sans-serif;
  width: 250px;

  grid-area: filter;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 4px;
  background-color: white;
  padding-left: 24px;
  > h1 {
    font-size: 16px;
  }
`;
FilterWrapper.displayName = "FilterWrapper";

export const SubHeaderContainer = styled.div`
  span {
    font-size: 17px;
    font-weight: 600;
  }
  svg {
    padding-right: 15px;
  }
`;
SubHeaderContainer.displayName = "SubHeaderContainer";
