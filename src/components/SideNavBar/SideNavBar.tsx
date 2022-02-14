/* eslint-disable @typescript-eslint/no-unused-vars */

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

import { GrClose } from "react-icons/gr";
import { HiMenu } from "react-icons/hi";
import arrow from "../../assets/arrow-icon.png";
import search from "../../assets/search-icon-white.png";

interface Props {
  className?: string;
}

export default function SideNavBar({ className }: Props) {
  const [open, setOpen] = useState(false);
  const animationVariants = {
    visible: {
      opacity: 1,
      transition: { duration: 0.25, ease: "easeInOut" },
    },
    hidden: {
      opacity: 0,
      transition: { duration: 0.25, ease: "easeInOut" },
    },
  };

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
          <MobileNav>
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
