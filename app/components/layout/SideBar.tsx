import { SidebarProps } from "@/app/types";
import { VscMenu } from "react-icons/vsc";
import { AiOutlineHome } from "react-icons/ai";
import "./style.css";

export const SideBar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div
      className={`h-screen px-2 pb-5 pt-3 bg-[#EFEFEF] border-r text-[#2C445D] sidebar ${
        isOpen ? "w-[227px]" : "w-[65px]"
      }`}
    >
      <VscMenu />

      <div className="navLinkWrap mt-4">
        <div className="navLink">
          <AiOutlineHome className="navIcon" /> <span>Home</span>
        </div>
      </div>
    </div>
  );
};
