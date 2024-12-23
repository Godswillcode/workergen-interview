import Image from "next/image";
import { leadProps } from "../constant";
import { IModalProp } from "../types";
import { Modal } from "antd";
import titleLog from ".././images/leadDetailsTitle.png";

interface IProps extends IModalProp {
  data?: leadProps;
}

export const LeadDetails = ({ open, handleClose, data }: IProps) => {
  console.log(data);
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
      title={
        <div className="flex items-center gap-2">
          <Image src={titleLog} alt="logo" className="h-4 w-4" />
          <span className="text-sm">Engage with {data?.name}</span>
        </div>
      }
    >
      <div className="">
        <div className="flex items-center gap-2">
          <Image
            src={data?.userImage ?? ""}
            alt={data?.name ?? ""}
            className="rounded-full"
            width={6} height={6}
          />
          <div>
            <h4 className="font-semibold">Jane Reyes</h4>
            <p className="text-gray-500">COO - Northwind Traders</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};
