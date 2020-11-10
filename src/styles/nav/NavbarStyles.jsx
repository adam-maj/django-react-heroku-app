import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  position: fixed;
  top: 0px;
  width: 100vw;
  height: 64px;
  background: black;
`

export const NavTabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 500px;
`

export const NavTab = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 24px;
  color: white;
  cursor: pointer;
`