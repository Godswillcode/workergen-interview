import { TiMessages } from "react-icons/ti";
import { MdOutlineCall } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { BsPrinter } from "react-icons/bs";

export const SidebarRight = () => {

  return (
    <div className="h-full w-full px-3 pb-14 pt-2 ">
       <div className="flex flex-col justify-start items-end gap-3 text-[16px] text-[#2C445D]">
       <BsPrinter />
       <TiMessages />
       <MdOutlineCall />
       <FaRegMessage />
       </div>
    </div>
  );
};
