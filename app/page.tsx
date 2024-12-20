import { SideBar } from "./components/layout/SideBar";
import { TopNavbar } from "./components/layout/TopNavbar";
import { MainPage } from "./components/MainPage";

export default function Home() {
  return (
    <div>
      <TopNavbar />
      <div>
        <div>
          <SideBar />
        </div>

        <div>
          <MainPage />
        </div>
      </div>
    </div>
  );
}
