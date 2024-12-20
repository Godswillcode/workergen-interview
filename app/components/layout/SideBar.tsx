import { SidebarProps } from "@/app/types";


export const SideBar = ({ isOpen, setIsOpen }: SidebarProps) => {
    const toggle = () => setIsOpen(!isOpen);
  return (
    <div>SideBar</div>
  )
}
