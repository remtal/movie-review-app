import styled from "styled-components";

export const FilterWrapper = styled.div`
  position: relative;
  font-family: "Lato", sans-serif;

  width: 250px;
  padding: 20px;
  height: fit-content;
  grid-area: filter;
  display: flex;
  border-radius: 5px;

  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: white;
  grid-column: 3;
  grid-row: 3;

  > h1 {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
FilterWrapper.displayName = "FilterWrapper";

export const SubHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 17px;
    font-weight: 600;
  }
  svg {
    padding-right: 15px;
    cursor: pointer;
  }
`;
SubHeaderContainer.displayName = "SubHeaderContainer";

export const Filters = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
Filters.displayName = "Filters";

export const DropdownContent = styled.div``;
DropdownContent.displayName = "DropdownContent";

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  > span {
    font-weight: 400;
  }
  margin-top: 10px;
`;
DropdownItem.displayName = "DropdownItem";

export const DropButton = styled.div``;
DropButton.displayName = "DropButton";
