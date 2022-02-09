/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  HeaderText,
  NavIcon,
  NavLink,
  SideNavBarCont,
  SideNavHeader,
  SideNavMainLink,
} from "./styles";

import React from "react";
import arrow from "../../assets/arrow-icon.png";
import search from "../../assets/search-icon-white.png";

// const { isOpen } = this.state;

export default function SideNavBar() {
  /* Write the necessary functions to show and hide the side bar on small devices */

  return (
    <SideNavBarCont>
      <SideNavHeader>
        Wesley
        <NavIcon>
          <img src={arrow} alt="arrow" />
        </NavIcon>
      </SideNavHeader>
      <SideNavMainLink>
        Discover
        <NavIcon>
          <img src={search} alt="search" />
        </NavIcon>
      </SideNavMainLink>

      <HeaderText>
        <h2>Watched</h2>
        <p>Movies</p>
        <p>TV Shows</p>
      </HeaderText>
      <HeaderText>
        <h2>Saved</h2>
        <p>Movies</p>
        <p>TV Shows</p>
      </HeaderText>
    </SideNavBarCont>
  );
}
