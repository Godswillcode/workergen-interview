import { BsGrid3X3Gap } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { FiSettings } from "react-icons/fi";
import { FaQuestion, FaChalkboardUser, FaPlus } from "react-icons/fa6";
import userAvatar from "../../images/topNavUser.png";
import Image from "next/image";
import { RiMenu2Line } from "react-icons/ri";
import { Dropdown, MenuProps } from "antd";

export const TopNavbar = () => {
  const menuItems: MenuProps["items"] = [
    {
      key: "Dynamics",
      label: "Dynamics 365",
    },
    {
      key: "sales",
      label: "Sales hub",
    },
  ];

  return (
    <div className="bg-[#000F28] z-50 sticky top-0 py-[9px] px-2 text-[12px] w-full flex justify-between items-center text-gray-300">
      <div className="flex items-center gap-[6px]">
        <BsGrid3X3Gap />
        <Dropdown
          trigger={["click"]}
          menu={{
            items: menuItems,
          }}
        >
          <div>
            <RiMenu2Line size={14} className="sm:hidden flex cursor-pointer" />
          </div>
        </Dropdown>
        <div className="hidden sm:flex items-center gap-[6px]">
          <span className="ml-2">Dynamics 365</span>
          <span className="text-gray-400">|</span>
          <span>Sales hub</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <HiOutlineLightBulb />
        <FaPlus />
        <FiSettings />
        <FaQuestion />
        <FaChalkboardUser />
        <Image src={userAvatar} alt="" className="h-5 w-5" />
      </div>
    </div>
  );
};
