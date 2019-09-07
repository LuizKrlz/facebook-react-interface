import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  height: 6.4rem;
  background: #4a90e2;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  width: 100%;
  z-index: 900;
`;

export const Menu = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;

  span {
    margin-right: 0.5rem;
    font-weight: bold;
  }
`;
