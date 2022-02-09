import * as colors from "../../utils/colors";

import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const SideNavBarCont = styled.div`
  position: fixed;
  z-index: 9;
  width: 280px;
  height: 100%;
  background-color: ${colors.sideNavBar};
`;

export const SideNavMainLink = styled(Link)`
  position: relative;
  display: block;
  padding: 25px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
`;

export const NavIcon = styled.div`
  position: absolute;
  right: 35px;
  top: 50%;
`;

export const SideNavHeader = styled.div``;

export const HeaderText = styled.div``;

export const NavLink = styled(Link)`
  display: block;
`;
