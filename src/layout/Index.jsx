import React from 'react'
import Nav from './nav'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default Layout;