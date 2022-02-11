import React, { useState } from "react";
import styled from "styled-components";
import { IoMenuOutline } from "react-icons/io5";

import Logo from "../../images/logo.svg";
import MobileMenu from "../MobileMenu/MobileMenu";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-width: 45rem;

  position: fixed;
  top: 6rem;
  left: 6rem;

  z-index: 100;

  @media (max-width: 1155px) {
    position: absolute;
  }

  @media (max-width: 560px) {
    min-width: 100vw;
    min-height: 3rem;
    left: 0;
  }
`;

const LogoCont = styled.div`
  @media (max-width: 560px) {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }
`;

const LogoImg = styled.img``;

const Menu = styled.ul`
  list-style: none;

  display: flex;

  @media (max-width: 560px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  color: white;
  font-size: 1.4rem;
  cursor: pointer;

  position: relative;

  &:not(:first-child) {
    margin-left: 3rem;
  }

  &::after {
    content: "";
    display: block;

    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translate(-50%);

    width: 40%;
    height: 2px;

    background-color: white;
    opacity: 0;

    transition: all 0.2s ease-in;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const Hamburger = styled.div`
  display: none;

  @media (max-width: 560px) {
    display: block;

    position: absolute;
    top: 0;
    left: 6rem;
  }

  @media (max-width: 460px) {
    left: 3rem;
  }
`;

const Header = () => {
  const [showMobile, setShowMobile] = useState(false);

  const showMobMenu = () => {
    setShowMobile(!showMobile);
  };

  return (
    <Container>
      <Hamburger onClick={showMobMenu}>
        <IoMenuOutline size={25} color="white" />
      </Hamburger>

      {showMobile ? <MobileMenu showMobMenu={showMobMenu} /> : null}

      <LogoCont>
        <LogoImg src={Logo} />
      </LogoCont>

      <Menu>
        <MenuItem>home</MenuItem>
        <MenuItem>shop</MenuItem>
        <MenuItem>about</MenuItem>
        <MenuItem>contact</MenuItem>
      </Menu>
    </Container>
  );
};

export default Header;
