import Image from "next/image";
import { leadProps } from "../constant";
import { IModalProp } from "../types";
import { Modal } from "antd";
import titleLog from ".././images/leadDetailsTitle.png";
import userAvatar from ".././images/userAvatar.png";
import linkedInLogo from ".././images/linkedinLogo.png";
import { BsStars } from "react-icons/bs";
import { MdOutlineModeEdit } from "react-icons/md";

interface IProps extends IModalProp {
  data?: leadProps;
}

export const LeadDetails = ({ open, handleClose, data }: IProps) => {
  return (
    <Modal
      open={open}
      onCancel={() => handleClose()}
      footer={null}
      style={{
        top: 90,
        borderRadius: "8px",
        padding: "2px",
        background: "linear-gradient(to right, #9BA5FF, #ce8178, #62C4C3)",
        fontSize: "10px",
      }}
      width="42rem"
      title={
        <div className="flex items-center gap-2">
          <Image src={titleLog} alt="logo" className="h-4 w-4" />
          <span className="text-sm">Engage with {data?.name}</span>
        </div>
      }
    >
      <div className="text-[12px] mt-5">
        <div className="">
          <div className="flex rounded-md shadow p-2 items-center gap-2">
            <Image
              src={data?.userImage ?? userAvatar}
              alt={data?.name ?? "user logo"}
              className="rounded-full"
              width={45}
              height={45}
            />
            <div>
              <h4 className="font-semibold text-[12px]">{data?.name}</h4>
              <div className="flex items-center gap-[6px]"> <Image src={linkedInLogo} alt="linkedin" className="h-3 w-3"/> |
              <p className="text-gray-500 text-[10px]">{data?.position}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-md flex items-center justify-between bg-gradient-to-r from-[#E9F0FD] to-[#ECECFE] p-2 mt-4">
           <div className="flex items-center gap-2">
           <BsStars color="#325BC9" />
            <span className="gradient-text">{data?.name} may be interested in upgrading machine for the store</span>
           </div>

           <div className="flex items-center gap-2">
              <button className="flex group items-center gap-[4px] hover:bg-[#49495e] rounded border bg-white px-2"><MdOutlineModeEdit className="group-hover:text-white"/> <span className="gradient-text">Edit</span></button>

              <button className="flex group items-center gap-[4px] rounded border px-2"> <span>Approve and send</span></button>
           </div>
        </div>
      </div>
    </Modal>
  );
};
