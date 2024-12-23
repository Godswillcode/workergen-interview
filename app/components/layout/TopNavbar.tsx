import { BsGrid3X3Gap } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { FiSettings } from "react-icons/fi";
import { FaQuestion, FaChalkboardUser, FaPlus } from "react-icons/fa6";
import userAvatar from "../../images/topNavUser.png";
import Image from "next/image";

export const TopNavbar = () => {
  return (
    <div className="bg-[#000F28] z-50 sticky top-0 py-[9px] px-2 text-[12px] w-full flex justify-between items-center text-gray-300">
      <div className="flex items-center gap-[6px]">
        <BsGrid3X3Gap />
        <span className="ml-2">Dynamics 365</span>
        <span className="text-gray-400">|</span>
        <span>Sales hub</span>
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
