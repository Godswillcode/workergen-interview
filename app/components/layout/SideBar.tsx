import { SidebarProps } from "@/app/types";
import "./style.css";
import { VscMenu } from "react-icons/vsc";
import { AiOutlineHome } from "react-icons/ai";
import { LuClock4 } from "react-icons/lu";
import { SlArrowDown } from "react-icons/sl";
import { BsPinAngle } from "react-icons/bs";
import { notification } from "antd";
export const SideBar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const toggle = () => setIsOpen(!isOpen);
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.info({
      message: "Information",
      description: "Page coming soon.",
      placement: "top",
    });
  };
  return (
    <>
      {" "}
      {contextHolder}
      <div
        className={`h-screen px-2 pb-5 pt-3 bg-[#EFEFEF] border-r text-[#2C445D] sidebar ${
          isOpen ? "w-[150px]" : "w-[30px]"
        }`}
      >
        <VscMenu />
        {/* onClick={toggle} */}

        <div className="navLinkWrap mt-4" onClick={openNotification}>
          <div className="navLink">
            <AiOutlineHome className="navIcon" /> <span>Home</span>
          </div>
        </div>
        <div className="navLinkWrap" onClick={openNotification}>
          <div className="navLink">
            <LuClock4 className="navIcon" /> <span>Recent</span>
          </div>
          <SlArrowDown className="navIconArrowDown" />
        </div>
        <div className="navLinkWrap" onClick={openNotification}>
          <div className="navLink">
            <BsPinAngle className="navIcon" /> <span>Pinned</span>
          </div>
          <SlArrowDown className="navIconArrowDown" />
        </div>
        <h2>My work</h2>
        
      </div>
    </>
  );
};
