"use client";

import { useState } from "react";
import { SideBar } from "./components/layout/SideBar";
import { TopNavbar } from "./components/layout/TopNavbar";
import { MainPage } from "./components/MainPage";
import { SidebarRight } from "./components/layout/SidebarRight";

export default function Home() {
  return (
    <div>
      <TopNavbar />

      <div className="flex w-full relative">
        <div className={`w-[14rem] fixed z-40 overflow-hidden lg:flex hidden`}>
          <SideBar />
        </div>

        <div className="w-full lg:ml-[11.5rem] pb-10">
          <MainPage />
        </div>
        <div className={`w-[3rem] overflow-hidden lg:flex hidden`}>
          <SidebarRight />
        </div>
      </div>
    </div>
  );
}
