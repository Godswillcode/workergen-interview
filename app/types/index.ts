export interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export interface IModalProp {
  id?: number;
  open: boolean;
  handleClose: () => void; 
}
