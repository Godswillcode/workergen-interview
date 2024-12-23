import { TiMessages } from "react-icons/ti";
import { MdOutlineCall } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { BsPrinter } from "react-icons/bs";
import { Popover } from "antd";

export const SidebarRight = () => {
  return (
    <div className="z-40 right-0 fixed">
      <div className="h-full  w-full px-3 pb-14 pt-2 ">
        <div className="flex flex-col justify-start items-end gap-3 text-[16px] text-[#2C445D]">
          <Popover placement="left" title="Create ticket">
            <BsPrinter className="cursor-pointer hover:text-[#325BC9]" />
          </Popover>
          <Popover placement="left" title="Message us">
            {" "}
            <TiMessages className="cursor-pointer hover:text-[#325BC9]" />
          </Popover>
          <Popover placement="left" title="Call us">
            <MdOutlineCall className="cursor-pointer hover:text-[#325BC9]" />
          </Popover>
          <Popover placement="left" title="Chat us">
            {" "}
            <FaRegMessage className="cursor-pointer hover:text-[#325BC9]" />
          </Popover>
        </div>
      </div>
    </div>
  );
};
