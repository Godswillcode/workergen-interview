import Image from "next/image";
import { leadProps } from "../constant";
import { IModalProp } from "../types";
import { Modal } from "antd";
import titleLog from ".././images/leadDetailsTitle.png";
import userAvatar from ".././images/userAvatar.png";
import linkedInLogo from ".././images/linkedinLogo.png";
import { BsStars } from "react-icons/bs";
import { MdOutlineModeEdit } from "react-icons/md";
import { AiOutlineSend, AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import value from ".././images/value.png";
import decision from ".././images/decision.png";
import intent from ".././images/intent.png";
import lock from ".././images/lock.png";
import saleLogo from ".././images/salesLogo.png";
import { IoIosArrowDown } from "react-icons/io";
import sliderDot from ".././images/CaroselLine.png";

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
        top: 10,
        borderRadius: "8px",
        padding: "2px",
        background: "linear-gradient(to right, #9BA5FF, #ce8178, #62C4C3)",
        fontSize: "10px",
      }}
      width="45rem"
      title={
        <div className="flex items-center gap-2">
          <Image src={titleLog} alt="logo" className="h-4 w-4" />
          <span className="text-sm">Engage with {data?.name}</span>
        </div>
      }
    >
      <div className="text-[11px] mt-5">
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
              <div className="flex items-center gap-[6px]">
                <Image src={linkedInLogo} alt="linkedin" className="h-3 w-3" />
                |<p className="text-gray-500 text-[10px]">{data?.position}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-md flex gap-y-3 flex-col sm:flex-row justify-between bg-gradient-to-r from-[#E9F0FD] to-[#ECECFE] p-2 mt-4">
          <div className="flex items-center gap-2">
            <BsStars color="#325BC9" />
            <span className="gradient-text">
              {data?.name} may be interested in upgrading machine for the store
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex group items-center gap-[4px] hover:bg-[#49495e] rounded border bg-white px-2">
              <MdOutlineModeEdit className="group-hover:text-white" />
              <span className="gradient-text">Edit</span>
            </button>

            <button className="flex group pb-[2px] text-white bg-gradient-to-r from-[#325BC9] to-[#8049D2] group items-center gap-[4px] rounded border px-2">
              <AiOutlineSend />
              <span className="group-hover:text-black">Approve and send</span>
            </button>
          </div>
        </div>

        <div className="rounded mt-3 pt-3 flex items-center gap-3 px-2 border-b shadow-sm">
          <span className="pb-[10px]">Engage</span>
          <div className="border-b-2 pb-2 border-[#3E70BF]">Research</div>
        </div>

        <div className="bg-white rounded p-2 border mt-5">
          <div className="bg-[#F1F5FF] rounded pl-3 pb-2">
            <div className="flex justify-end">
              <BsStars
                color="#325BC9"
                className="bg-white -mr-1 h-6 w-6 rounded-full flex items-center justify-center"
              />
            </div>
            <h3 className="-mt-3 font-semibold gradient-text">
              Why I picked this lead
            </h3>

            <ul className="mt-2 list-disc ml-5">
              <li>
                <span>
                  {data?.name} is a
                  <span className="font-medium">key decision maker</span> and
                  was browsing{" "}
                  <span className="font-medium">&apos;espresso machines&apos;</span>{" "}
                  on First Coffee&apos;s website.
                </span>
                <span className="border bg-white rounded px-1 ml-2">1</span>
              </li>
              <li>
                <span>
                  Multiple people at the company have reported
                  &apos;slowness&apos; during{" "}
                  <span className="font-medium">Service request</span>
                </span>
                <span className="border bg-white rounded px-1 ml-2">2</span>
              </li>
              <li>
                <span>
                  {data?.position} currently sees{" "}
                  <span className="font-medium">
                    ${data?.revenueAmount}m in revenue
                  </span>{" "}
                  from their in-store coffee shops.
                </span>
                <span className="border bg-white rounded px-1 ml-2">3</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 mt-4">
              <div className="border flex gap-3 items-center bg-white rounded-md pl-2 pr-3 py-2">
                <Image src={decision} className="h-10 w-10" alt="decision" />
                <div>
                  <p>Decision maker</p>
                  <h3 className="font-semibold text-[14px] gradient-text">
                    Yes
                  </h3>
                </div>
              </div>
              <div className="border flex gap-3 items-center bg-white rounded-md pl-2 pr-3 py-2">
                <Image src={value} className="h-10 w-10" alt="decision" />
                <div>
                  <p>Potential deal value</p>
                  <h3 className="font-semibold text-[14px] gradient-text">
                    $1m
                  </h3>
                </div>
              </div>
              <div className="border flex gap-3 items-center bg-white rounded-md pl-2 pr-10 py-2">
                <Image src={intent} className="h-10 w-10" alt="decision" />
                <div>
                  <p>Intent</p>
                  <h3 className="font-semibold text-[14px] gradient-text">
                    High
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-y-2 justify-between mt-3">
            <div className="flex items-center gap-2">
              <div className="rounded border p-1 bg-[#F1F5FF]">
                <Image src={lock} alt="lock" className="h-4 w-4" />
              </div>
              <button className="rounded gap-2 flex items-center border py-[2.5px] px-[6px] bg-[#F1F5FF]">
                <span>1</span>
                <Image src={saleLogo} alt="sales" className="h-4 w-4" />
                <span>D365 Sales</span>
              </button>
              <button className="rounded border py-[2.5px] px-[6px] bg-[#F1F5FF]">
                +2
              </button>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-[#F1F5FF] rounded-md py-1 px-2">
                AI-generated content may be incorrect
              </div>
              <div className="flex gap-2">
                <AiOutlineLike size={13} />
                <AiOutlineDislike size={13} />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-md p-3 border mt-5">
          <div className="flex justify-between">
            <h3 className="font-medium">About {data?.name}</h3>
            <IoIosArrowDown />
          </div>

          <p>{data?.aboutMe}</p>
        </div>

        <div className="flex items-center justify-between mt-5 flex-wrap">
          <div className="flex gap-2">
            <span>Showing 1 of 20</span>
            <span>|</span>

            <span className="font-medium text-[#325BC9]">Show all</span>
          </div>
          <Image src={sliderDot} alt="dots" height={7} />

          <div className="flex gap-2">
            <AiOutlineLike size={15} />
            <AiOutlineDislike size={15} />
          </div>
        </div>
      </div>
    </Modal>
  );
};
