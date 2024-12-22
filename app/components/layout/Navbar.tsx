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

export const Navbar = () => {
  const quickStyle = "flex items-center gap-[4px]";

  return (
    <div className="bg-white px-2 py-[6px] flex justify-between items-center rounded text-[11px]">
      <div className={quickStyle}>
        <span>My open leads</span>
        <IoIosArrowDown />
      </div>

      <div className="flex items-center gap-3">
        <div className={quickStyle}>
          <TbGraph size={15} />
          <span>Show chart</span>
        </div>
        <div className={quickStyle}>
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

        <button className="border rounded px-[6px] py-[2px]">
        <div className={quickStyle}>
          <VscGraph />
          <span>Smart data</span>
        </div>
        </button>
        <button className="border rounded px-[6px] py-[2px]">
        <div className={quickStyle}>
          <VscListFilter />
          <span>Edit filters</span>
        </div>
        </button>
        <button className="border rounded px-[6px] py-[2px]">
        <div className={quickStyle}>
          <MdEditRoad />
          <span>Edit columns</span>
        </div>
        </button>
      </div>
    </div>
  );
};

