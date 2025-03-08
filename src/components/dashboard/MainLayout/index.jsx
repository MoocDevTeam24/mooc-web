import React from "react";
import { Outlet } from "react-router-dom";

import MainSidebar from "./MainSidebar";
import Topbar from "./Topbar";

export default function Mainlayout() {
  return (
    <div className="app">
      <MainSidebar />
      <main className="content">
        <Topbar />
        <Outlet />
      </main>
    </div>
  );
}
