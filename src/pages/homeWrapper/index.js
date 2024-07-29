import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

function HomeWrapper() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default HomeWrapper;
