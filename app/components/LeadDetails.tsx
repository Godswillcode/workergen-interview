import { leadProps } from "../constant";
import { IModalProp } from "../types";
import { Modal } from "antd";

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
      }}
      title=""
    >
      <h3>Hello</h3>
    </Modal>
  );
};
