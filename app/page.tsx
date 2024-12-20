import { Main } from "next/document";
import { Navbar } from "./components/layout/Navbar";
import { SideBar } from "./components/layout/SideBar";
import { TopNavbar } from "./components/layout/TopNavbar";

export default function Home() {
  return (
    <div>
      <TopNavbar />
      <div>
        <div>
          <SideBar />
        </div>

        <div>
          <Main />
        </div>
      </div>
    </div>
  );
}
