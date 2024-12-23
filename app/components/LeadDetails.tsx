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
      style={{ top: 15 }}
      title=""
    >
      <h3>Hello</h3>
    </Modal>
  );
};
