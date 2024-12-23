import { IModalProp } from "../types";
import { Modal } from "antd";

export const LeadDetails = ({ open, handleClose }: IModalProp) => {
  return (
    <Modal
      open={open}
      onCancel={() => handleClose()}
      footer={null}
      style={{ top: 15 }}
      title=""
    >
      <h3>Hello</h3>
    </Modal>
  );
};
