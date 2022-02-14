import * as colors from "../../utils/colors";

import { GrClose } from "react-icons/gr";
import { HiMenu } from "react-icons/hi";
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
  @media (max-width: 768px) {
    background-color: transparent;
    position: relative;
    display: contents;
    z-index: 99;
  }
`;

export const SideNavHeader = styled.h1`
  position: relative;
  @media (max-width: 768px) {
    display: none;
  }
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
  @media (max-width: 768px) {
    display: none;
  }
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
  @media (max-width: 768px) {
    display: none;
  }
`;

export const HamburgerIcon = styled(HiMenu)`
  display: none;
  @media (max-width: 768px) {
    color: ${colors.sideNavBar};
    display: fixed;
  }
`;

export const MobileHeader = styled.div`
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 20px;
    padding-left: 20px;

    > h1 {
      font-family: "Lato", sans-serif;
      color: ${colors.sideNavBar};
    }
  }
`;
MobileHeader.displayName = "MobileHeader";

export const MobileNav = styled.ul<{ open?: boolean }>`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    background-color: ${colors.sideNavBar};
    position: fixed;
    top: 0;
    margin-top: 0px;
    left: 0;
    height: 100vh;
    width: 60%;
    z-index: 100000;

    gap: 20px;
    font-size: 16px;
    padding-top: 80px;
    transition: transform 0.3s ease-in-out;

    transform: ${({ open }) => (open ? "translateX(100%)" : "translateY(0)")};
  }
`;
MobileNav.displayName = "MobileNav";

export const CloseIcon = styled(GrClose)`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    z-index: 100001;
    position: fixed;

    path {
      stroke: white;
    }
  }
`;

export const MobileNavBlur = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  display: flex;
  padding-top: 25%;

  @media (max-width: 768px) {
    display: block;
    backdrop-filter: blur(2px);
  }
`;
MobileNavBlur.displayName = "MobileNavBlur";
