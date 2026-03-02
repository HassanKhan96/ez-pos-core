import { CheckCircleTwoTone } from "@ant-design/icons";
import { Modal, Space, Typography } from "antd";

type Props = {
  message: string;
  onClose: () => void;
};

export function SuccessModal({ message, onClose }: Props) {
  return (
    <Modal
      open
      title={null}
      onOk={onClose}
      onCancel={onClose}
      okText="OK"
      cancelButtonProps={{ style: { display: "none" } }}
      centered
    >
      <Space align="start" size={12}>
        <CheckCircleTwoTone twoToneColor="#16a34a" style={{ fontSize: 22, marginTop: 2 }} />
        <Space direction="vertical" size={2}>
          <Typography.Text strong>Notice</Typography.Text>
          <Typography.Text>{message}</Typography.Text>
        </Space>
      </Space>
    </Modal>
  );
}
