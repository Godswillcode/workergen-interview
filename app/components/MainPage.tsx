"use client";

import { Analysis } from "./Analysis";
import { LeadTable } from "./LeadTable";
import { Navbar } from "./layout/Navbar";
import { SidebarRight } from "./layout/SidebarRight";

export const MainPage = () => {
  return (
    <div className="px-2 mt-3">
      <Navbar />

      <div>
        <Analysis/>
        <LeadTable/>
      </div>
    </div>
  );
};
