
import { BsGrid3X3Gap } from "react-icons/bs";
export const TopNavbar = () => {
  return (
    <div className="bg-[#000F28] py-[10px] px-2 text-[12px] w-full flex justify-between items-center text-gray-300">
      <div className="flex items-center gap-[6px]">
      <BsGrid3X3Gap />
        <span className="ml-2">Dynamics 365</span>
        <span className="text-gray-400">|</span>
        <span>Sales hub</span>
      </div>
      <div>
  
      </div>
    </div>
  )
}
