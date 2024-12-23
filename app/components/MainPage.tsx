"use client";

import { useState } from "react";
import { Analysis } from "./Analysis";
import BarChart from "./BarChart";
import { LeadTable } from "./LeadTable";
import { Navbar } from "./layout/Navbar";

export const MainPage = () => {
    const [showChartView, setShowChartView] = useState("focusedView")
  return (
    <div className="px-2 mt-3">
      <Navbar showChartView={showChartView} setShowChartView={setShowChartView}/>
      <div>
       {showChartView === "focusedView" ?  <Analysis/> : <BarChart /> }
        
        <LeadTable/>
      </div>
    </div>
  );
};
