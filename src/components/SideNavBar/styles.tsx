import * as colors from "../../utils/colors";

import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const SideNavBarCont = styled.div`
  display: grid;
  grid-template-rows: 0.1fr 0.4fr 0.8fr 0.8fr 0.8fr;
  position: fixed;
  z-index: 9;
  width: 230px;
  padding-left: 40px;
  padding-right: 20px;
  height: 100%;
  background-color: ${colors.sideNavBar};
  font-family: "Lato", sans-serif;
  color: white;

  grid-area: nav;
`;

export const SideNavHeader = styled.h1`
  position: relative;
`;

export const SideNavMainLink = styled(SideNavHeader)`
  position: relative;
  /* background-color: #c4ca18; */

  height: 70%;
`;

export const NavIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 0%;
`;

export const HeaderText = styled.div`
  position: relative;
  > h2 {
    font-weight: 400;

    :after {
      content: "";
      position: absolute;
      top: 58px;
      left: 0;
      right: -20px;
      height: 0.5em;
      border-top: 1px solid #31475f;
      z-index: -1;
    }
  }
  > p {
    font-weight: 300;
    opacity: 0.9;
  }
`;

export const NavLink = styled(Link)`
  display: block;
`;
