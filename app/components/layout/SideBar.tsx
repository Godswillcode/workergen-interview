import { SidebarProps } from "@/app/types";
import "./style.css";
import { VscMenu } from "react-icons/vsc";
import { AiOutlineHome } from "react-icons/ai";
import { LuClock4 } from "react-icons/lu";
import { SlArrowDown } from "react-icons/sl";
import { BsPinAngle } from "react-icons/bs";
import { notification } from "antd";
import { LuRocket } from "react-icons/lu";
import { TbMathSymbols, TbBucket  } from "react-icons/tb"
import { MdOutlineSettingsPhone } from "react-icons/md";
import { PiDoorOpenDuotone, PiFolders } from "react-icons/pi";
import { TbUserQuestion } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
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
          isOpen ? "w-[180px]" : "w-[30px]"
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
        <div className="navLinkWrap" onClick={openNotification}>
          <div className="navLink">
            <LuRocket className="navIcon" /> <span>Sales Accelerator</span>
          </div>
        </div>
        <div className="navLinkWrap" onClick={openNotification}>
          <div className="navLink">
            <TbMathSymbols className="navIcon" /> <span>Dashboards</span>
          </div>
        </div>
        <div className="navLinkWrap" onClick={openNotification}>
          <div className="navLink">
            <TbBucket className="navIcon" /> <span>Activities</span>
          </div>
        </div>
        <h2>Customers</h2>
        <div className="navLinkWrap" onClick={openNotification}>
          <div className="navLink">
            <PiFolders className="navIcon" /> <span>Accounts</span>
          </div>
        </div>
        <div className="navLinkWrap" onClick={openNotification}>
          <div className="navLink">
            <BiUser className="navIcon" /> <span>Contacts</span>
          </div>
        </div>
        <h2>Sales</h2>
        <div className="navLinkWrap bg-white" onClick={openNotification}>
          <div className="navLink">
            <MdOutlineSettingsPhone className="navIcon" /> <span>Leads</span>
          </div>
        </div>
        <div className="navLinkWrap" onClick={openNotification}>
          <div className="navLink">
            <PiDoorOpenDuotone className="navIcon" /> <span>Opportunities</span>
          </div>
        </div>
        <div className="navLinkWrap" onClick={openNotification}>
          <div className="navLink">
            <TbUserQuestion className="navIcon" /> <span>Competitors</span>
          </div>
        </div>
      </div>
    </>
  );
};
