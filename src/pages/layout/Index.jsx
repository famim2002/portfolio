import React from "react";

import { Outlet } from "react-router";
import NavBar from "./NavBar"

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
