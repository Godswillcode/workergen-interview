import { Modal } from "antd";
import { IModalProp } from "../types";
import anaLysisLogo from "../images/logoAnalysis.png";
import Image from "next/image";
import { IoIosArrowUp, IoMdCopy } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CgFileDocument } from "react-icons/cg";
import { TbMenu4 } from "react-icons/tb";
import { LiaShareSquareSolid } from "react-icons/lia";
import outlookLogo from "../images/outlook-logo.png";
import { LiaTimesSolid } from "react-icons/lia";

export const AgentSkill = ({ open, handleClose }: IModalProp) => {
  return (
    <Modal
      open={open}
      onCancel={() => handleClose()}
      footer={null}
      style={{
        top: 20,
        borderRadius: "8px",
        padding: "0.7px",
        background: "linear-gradient(to right, #9BA5FF, #ce8178, #62C4C3)",
      }}
      width="47rem"
    >
      <div className="text-[12px] mt-8">
        <div className="flex items-center gap-[6px]">
          <Image src={anaLysisLogo} alt="logo" className="h-4 w-4" />
          <h3 className="font-semibold text-[13px]">Agent skill</h3>
        </div>

        <div className="border font-medium rounded shadow-sm px-3 py-4 mt-4">
          <div className="flex items-center justify-between mb-4">
            <h3>
              Check if on-hand inventory will allow all sales order to ship
              without delay
            </h3>
            <IoIosArrowUp />
          </div>

          <div>
            <div className="flex items-center gap-2">
              When{" "}
              <div className="flex gap-1 items-center bg-[#F1F5FF] rounded-lg pb-[1px] px-2 text-[#2893c4]">
                <CiUser /> <span>any vendor</span>{" "}
              </div>
              send an email with charges to{" "}
              <div className="flex gap-1 items-center bg-[#F1F5FF] rounded-lg pb-[1px] px-2 text-[#2893c4]">
                <CgFileDocument /> <span>confirm purchase orders</span>{" "}
              </div>{" "}
              , check if the resulting
            </div>

            <div className="flex items-center gap-2 my-2">
              <div className="flex gap-1 items-center bg-[#F1F5FF] rounded-lg pb-[1px] px-2 text-[#2893c4]">
                <TbMenu4 /> <span>on-hold inventory</span>{" "}
              </div>
              will allow{" "}
              <div className="flex gap-1 items-center bg-[#F1F5FF] rounded-lg pb-[1px] px-2 text-[#2893c4]">
                <IoMdCopy /> <span>all sales orders</span>{" "}
              </div>{" "}
              to{" "}
              <div className="flex gap-1 items-center bg-[#F1F5FF] rounded-lg pb-[1px] px-2 text-[#2893c4]">
                <LiaShareSquareSolid /> <span>ship without delay</span>{" "}
              </div>{" "}
              . if so,
            </div>

            <div className="flex items-center gap-2 mt-2">
              <div className="flex gap-1 items-center bg-[#F1F5FF] rounded-lg pb-[1px] px-2 text-[#2893c4]">
                <LiaShareSquareSolid /> <span>update the purchase order</span>{" "}
              </div>{" "}
              to reflect the changes.
            </div>
          </div>
        </div>

        <div className="flex items-center gap-[6px] mt-5">
          <Image src={outlookLogo} alt="logo" className="h-4 w-6" />
          <h3 className="font-semibold text-[13px]">Enable email access</h3>
        </div>
        <p className="pt-1 text-[13px] pb-3">
          Allow the agent to access email inboxes to mail from known vendors
        </p>

        <div className="flex items-center gap-3">
          <div className="rounded cursor-pointer border w-full shadow-sm flex items-center py-[4px] px-1">
            <div className="bg-[#F1F5FF] items-center gap-1 pr-2 flex rounded-lg">
              <span className="bg-red-100 h-[22px] w-[22px] rounded-full items-item flex justify-center">
                p
              </span>
              <span>purchasing@contoso.com</span>
              <span className="text-[#b7bdcd]">|</span>
              <LiaTimesSolid size={17} className="pt-1" />
            </div>
          </div>
          <button className="bg-[#2164E0] w-[8rem] hover:bg-black rounded py-[6px] px-4 text-white">
            Allow access
          </button>
        </div>
      </div>
    </Modal>
  );
};
