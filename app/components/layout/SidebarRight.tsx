import { TiMessages } from "react-icons/ti";
import { MdOutlineCall } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { BsPrinter } from "react-icons/bs";

export const SidebarRight = () => {

  return (
    <div className="h-full w-full px-3 pb-14 pt-2 ">
       <div className="flex flex-col justify-start items-end gap-3 text-[16px] text-[#2C445D]">
       <BsPrinter className="cursor-pointer hover:text-[#325BC9]"/>
       <TiMessages className="cursor-pointer hover:text-[#325BC9]"/>
       <MdOutlineCall className="cursor-pointer hover:text-[#325BC9]"/>
       <FaRegMessage className="cursor-pointer hover:text-[#325BC9]"/>
       </div>
    </div>
  );
};
