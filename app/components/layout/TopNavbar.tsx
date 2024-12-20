
import { BiSolidGrid } from "react-icons/bi";
export const TopNavbar = () => {
  return (
    <div className="bg-[#000F28] py-[10px] px-2 text-sm w-full flex justify-between items-center text-gray-300">
      <div className="flex items-center gap-2">
      <BiSolidGrid />
        <span>Dynamics 365</span>
        <span>|</span>
        <span>Sales hub</span>
      </div>
      <div>

      </div>
    </div>
  )
}
