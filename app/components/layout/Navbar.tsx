import { IoIosArrowDown } from "react-icons/io";
import { TbGraph } from "react-icons/tb";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoMdAdd, IoIosRefresh } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import teamsLogo from "../../images/Microsoft_Teams.png";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { VscListFilter } from "react-icons/vsc";
import { MdEditRoad } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { Dropdown, MenuProps } from "antd";
import { TiMessages } from "react-icons/ti";
import { MdOutlineCall } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { BsPrinter } from "react-icons/bs";
import { useState } from "react";
import { Drawer } from "antd";
import { SideBar } from "./SideBar";


export interface toggleViewProps {
  showChartView: string;
  setShowChartView: (showChartView: string) => void;
}
export const Navbar = ({setShowChartView, showChartView}: toggleViewProps ) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const quickStyle =
    "flex items-center hover:text-[#325BC9] gap-[4px] cursor-pointer";

  const menuItems: MenuProps["items"] = [
    {
      key: "submenu",
      label: "Navbar Links",
      children: [
        { key: "1", label: "Show chart" },
        { key: "2", label: "Focused view" },
        { key: "3", label: "New" },
        { key: "4", label: "Refresh" },
        { key: "5", label: "Collaborate" },
        { key: "6", label: "Delete" },
        { key: "7", label: "Smart data" },
        { key: "8", label: "Edit filter" },
        { key: "9", label: "Edit columns" },
      ],
    },
    {
      key: "sideMenu",
      label: "Sidebar Menu",
      onClick: () => setOpenDrawer(true),
    },
    {
      key: "RightSideMenu",
      label: "Contact Links",
      children: [
        {
          key: "10",
          label: <BsPrinter className="cursor-pointer hover:text-[#325BC9]" />,
        },
        {
          key: "11",
          label: <TiMessages className="cursor-pointer hover:text-[#325BC9]" />,
        },
        {
          key: "12",
          label: (
            <MdOutlineCall className="cursor-pointer hover:text-[#325BC9]" />
          ),
        },
        {
          key: "13",
          label: (
            <FaRegMessage className="cursor-pointer hover:text-[#325BC9]" />
          ),
        },
      ],
    },
  ];

  return (
    <>
      <div className="bg-white px-2 py-[6px] flex justify-between items-center rounded text-[11px]">
        <div className={quickStyle}>
          <span>My open leads</span>
          <IoIosArrowDown />
        </div>

        <div className="lg:flex hidden items-center gap-3 ">
          <div className={showChartView === "showChat" ? "flex items-center text-[#325BC9] gap-[4px] cursor-pointer" : quickStyle} onClick={() => setShowChartView("showChat")}>
            <TbGraph size={15} />
            <span>Show chart</span>
          </div>
          <div className={showChartView === "focusedView" ? "flex items-center text-[#325BC9] gap-[4px] cursor-pointer" : quickStyle} onClick={() => setShowChartView("focusedView")}>
            <TfiMenuAlt />
            <span>Focused view</span>
          </div>
          <div className={quickStyle}>
            <IoMdAdd color="#A3C5A5" />
            <span>New</span>
          </div>
          <div className={quickStyle}>
            <IoIosRefresh />
            <span>Refresh</span>
          </div>
          <div className={quickStyle}>
            <Image src={teamsLogo} alt="teams logo" className="h-3 w-3" />
            <span>Collaborate</span>
          </div>
          <div className={quickStyle}>
            <RiDeleteBinLine />
            <span>Delete</span>
          </div>
          <div className={quickStyle}>
            <span className="text-[#ceeae0]">|</span>
            <IoIosArrowDown />

            <div>
              <BsThreeDotsVertical />
            </div>
          </div>

          <button className="border group transition ease-in-out duration-300 hover:bg-[#325BC9] hover:text-white rounded px-[6px] py-[2px]">
            <div className={quickStyle}>
              <VscGraph className="group-hover:text-white" />
              <span className="group-hover:text-white">Smart data</span>
            </div>
          </button>
          <button className="border group transition ease-in-out duration-300 hover:bg-[#325BC9] rounded px-[6px] py-[2px]">
            <div className={quickStyle}>
              <VscListFilter className="group-hover:text-white" />
              <span className="group-hover:text-white">Edit filters</span>
            </div>
          </button>
          <button className="border group transition ease-in-out duration-300 hover:bg-[#325BC9] rounded px-[6px] py-[2px]">
            <div className={quickStyle}>
              <MdEditRoad className="group-hover:text-white" />
              <span className="group-hover:text-white">Edit columns</span>
            </div>
          </button>
          <button className="border bg-[#325BC9] text-white flex items-center gap-2 rounded px-[6px] py-[2px]">
            <FaRegShareFromSquare />
            <div className={quickStyle}>
              <span className="text-white">|</span>
              <IoIosArrowDown className="text-white" />
            </div>
          </button>
        </div>

        <div className="lg:hidden flex">
          <Dropdown
            trigger={["click"]}
            menu={{
              items: menuItems,
            }}
          >
            <button className="border transition ease-in-out duration-300 hover:bg-[#325BC9] hover:text-white flex items-center gap-2 rounded px-[6px] py-[2px]">
              <span>Menu</span>
              <IoIosArrowDown />
            </button>
          </Dropdown>
        </div>
      </div>

      <Drawer
        style={{ backgroundColor: "#EFEFEF" }}
        title="Menu"
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
      >
        <SideBar show={false} />
      </Drawer>
    </>
  );
};
