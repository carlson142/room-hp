import React from "react";
import styled from "styled-components";
import { IoCloseOutline } from "react-icons/io5";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100vw;

  background-color: #00000097;

  z-index: 999;
`;

const Menu = styled.div`
  width: 100%;
  height: 15vh;

  background-color: white;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 6rem;

  @media (max-width: 460px) {
    padding: 0 3rem;
  }
`;

const IconCont = styled.div``;

const List = styled.ul`
  list-style: none;
  display: flex;
`;

const Element = styled.li`
  font-size: 1.6rem;
  font-weight: 600;

  &:not(:first-child) {
    margin-left: 2rem;
  }
`;

const MobileMenu = ({ showMobMenu }) => {
  return (
    <Container>
      <Menu>
        <IconCont onClick={showMobMenu}>
          <IoCloseOutline size={25} />
        </IconCont>

        <List>
          <Element>home</Element>
          <Element>shop</Element>
          <Element>about</Element>
          <Element>contact</Element>
        </List>
      </Menu>
    </Container>
  );
};

export default MobileMenu;
