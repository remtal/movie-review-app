import styled from "styled-components";

export const CustomCheckbox = styled.input`
  appearance: none;
  grid-area: checkbox;
  margin-right: 14px;
  width: 12px;
  height: 12px;
  border-radius: 90px;
  background-color: blue;
  position: relative;
  z-index: 0;
  color: blue;

  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    bottom: -50%;
    left: -50%;
    width: 18px;
    height: 18px;
    border-radius: 90px;
    border: 3px solid blue;
    background-color: transparent;
  }
`;
