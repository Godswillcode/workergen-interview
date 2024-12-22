"use client";

import { useState } from "react";
import { SideBar } from "./components/layout/SideBar";
import { TopNavbar } from "./components/layout/TopNavbar";
import { MainPage } from "./components/MainPage";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <TopNavbar />

      <div className="flex w-full relative">
        <div className={`w-[14rem] fixed z-40 overflow-hidden lg:flex hidden`}>
          <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <div className={isOpen ? "w-full lg:ml-[12rem] pb-10" : "lg:ml-16 pb-10 w-full"}>
          <MainPage />
        </div>
      </div>
    </div>
  );
}
