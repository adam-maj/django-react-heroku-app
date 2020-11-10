import React, { useContext } from 'react';
import { Nav, NavTabs, NavTab } from '../../styles/nav/NavbarStyles';
import { Link } from '../../styles/main/MainStyles';
import { UserContext } from '../../context/UserContext';
import * as api from '../../api/api';

export default function Navbar() {
  const { username, setGlobalUsername } = useContext(UserContext);

  function logout() {
    api.logout()
    setGlobalUsername(null)
  }

  if (username) {
    return (
      <Nav>
      <Link href="/">
        <NavTab>Brand</NavTab>
      </Link>
      <NavTabs>
        <NavTab>{username}</NavTab>
        <Link href='/register'>
          <NavTab>Register</NavTab>
        </Link>
        <Link href='/login'>
          <NavTab onClick={logout}>
            Logout
          </NavTab>
        </Link>
      </NavTabs>
    </Nav>
    )
  }

  return (
    <Nav>
      <Link href="/">
        <NavTab>Brand</NavTab>
      </Link>
      <NavTabs>
        <NavTab>{username}</NavTab>
        <Link href='/register'>
          <NavTab>Register</NavTab>
        </Link>
        <Link href='/login'>
          <NavTab>
            Login
          </NavTab>
        </Link>
      </NavTabs>
    </Nav>
  )
}
