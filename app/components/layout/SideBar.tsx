import { SidebarProps } from "@/app/types";
import "./style.css";
import { VscMenu } from "react-icons/vsc";
import { AiOutlineHome } from "react-icons/ai";
import { LuClock4 } from "react-icons/lu";
import { SlArrowDown } from "react-icons/sl";
import { BsPinAngle } from "react-icons/bs";
import { notification } from "antd";
import { LuRocket } from "react-icons/lu";
import { TbMathSymbols, TbBucket } from "react-icons/tb";
import { MdOutlineSettingsPhone } from "react-icons/md";
import { PiDoorOpenDuotone, PiFolders } from "react-icons/pi";
import { TbUserQuestion } from "react-icons/tb";
import { BiUser, BiExpandVertical } from "react-icons/bi";
import {
  GrDocumentTime,
  GrDocumentText,
  GrDocumentStore,
} from "react-icons/gr";
import { FiPackage } from "react-icons/fi";
import { GiVendingMachine } from "react-icons/gi";

interface IShowMenuIcon {
  show: boolean;
}
export const SideBar = ({ show }: IShowMenuIcon) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.info({
      message: "Info",
      description: "Page coming soon...",
      placement: "top",
    });
  };
  return (
    <>
      {" "}
      {contextHolder}
      <div
        className={`h-screen shadow-sm overflow-y-auto pb-14 pt-2  bg-[#EFEFEF] border-r text-[#2C445D] sidebar w-[180px]`}
      >
       {show && <div className="px-2">
          <VscMenu className="cursor-pointer hover:text-[#325BC9]" />
        </div>}

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
          <div className="navLink py-[5px]">
            <div className="flex items-center gap-[3px]">
              <div className="h-[15px] w-[2.4px] rounded text-base bg-[#325BC9]" />
              <MdOutlineSettingsPhone className="navIcon" />
            </div>
            <span>Leads</span>
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

        <h2>Collateral</h2>
        <div className="navLinkWrap" onClick={openNotification}>
          <div className="navLink">
            <GrDocumentTime className="navIcon" /> <span>Quotes</span>
          </div>
        </div>
        <div className="navLinkWrap" onClick={openNotification}>
          <div className="navLink">
            <GrDocumentText className="navIcon" /> <span>Orders</span>
          </div>
        </div>
        <div className="navLinkWrap" onClick={openNotification}>
          <div className="navLink">
            <GrDocumentStore className="navIcon" /> <span>Invoices</span>
          </div>
        </div>
        <div className="navLinkWrap" onClick={openNotification}>
          <div className="navLink">
            <FiPackage className="navIcon" /> <span>Products</span>
          </div>
        </div>
        <div className="navLinkWrap" onClick={openNotification}>
          <div className="navLink">
            <GiVendingMachine className="navIcon" />{" "}
            <span>Sales Literature</span>
          </div>
        </div>
        <h2>Marketing</h2>
        <div className="navLinkWrap" onClick={openNotification}>
          <div className="navLink">
            <GiVendingMachine className="navIcon" />{" "}
            <span>Sales Literature</span>
          </div>
        </div>
        <div className="navLinkWrap" onClick={openNotification}>
          <div className="navLink">
            <GiVendingMachine className="navIcon" />{" "}
            <span>Sales Literature</span>
          </div>
        </div>

        <h3 className="text-[12px] font-semibold mt-5 px-2 pb-1">
          Performance
        </h3>

        <div className="flex items-center justify-between py-1 px-2 text-sm border border-gray-300">
          <div className="flex items-center gap-2">
            <div className="bg-[#624783] px-2 text-white">s</div>{" "}
            <span className="text-xs">Sales</span>
          </div>
          <BiExpandVertical />
        </div>
      </div>
    </>
  );
};
