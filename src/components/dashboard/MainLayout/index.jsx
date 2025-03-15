import React from "react";
import { Outlet } from "react-router-dom";

import MainSidebar from "./MainSidebar";
import TopBar from "./TopBar";

export default function Mainlayout() {
  return (
    <div className="app">
      <MainSidebar />
      <main className="content">
        <TopBar />
        <Outlet />
      </main>
    </div>
  );
}
