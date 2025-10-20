import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <nav>
      <Navbar />
      <Outlet />
    </nav>
  );
};

export default Root;
