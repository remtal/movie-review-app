import {
  CloseIcon,
  HamburgerIcon,
  HeaderText,
  MobileHeader,
  MobileNav,
  MobileNavBlur,
  NavIcon,
  SideNavBarCont,
  SideNavHeader,
  SideNavMainLink,
} from "./styles";
import React, { useState } from "react";

import arrow from "../../assets/arrow-icon.png";
import search from "../../assets/search-icon-white.png";

interface Props {
  className?: string;
}

export default function SideNavBar({ className }: Props) {
  const [open, setOpen] = useState(true);

  return (
    <SideNavBarCont className={className}>
      <MobileHeader className={className}>
        {!open && <MobileNavBlur />}
        {open ? (
          <HamburgerIcon onClick={() => setOpen(!open)} size="40px" />
        ) : (
          <CloseIcon onClick={() => setOpen(!open)} size="40px" />
        )}
        <h1>Discover</h1>

        {!open && (
          <MobileNav initial={{ width: 0 }} animate={{ width: 200 }}>
            <h1>Wesley</h1>
            <h1>Discover</h1>
            <h1>Watched</h1>
            <h1>Saved</h1>
          </MobileNav>
        )}
      </MobileHeader>

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
