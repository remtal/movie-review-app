import * as colors from "../../utils/colors";

import styled from "styled-components";

export const CheckboxContainer = styled.div`
  height: 15px;
  width: 15px;
`;

export const CheckboxBorder = styled.div`
  border: 1px solid ${colors.fontColor};
  position: relative;
  border-radius: 4px;
  height: 15px;
  width: 15px;
`;

export const CheckboxIndicator = styled.div`
  position: absolute;
  z-index: 1;
  background: ${colors.fontColor};
  width: 13px;
  height: 13px;
  margin: 1px;
  border-radius: 4px;
`;
