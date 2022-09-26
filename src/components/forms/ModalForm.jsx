import { Form, Modal } from 'antd';

export const ModalForm = ({ formComponent: FormComponent, controls, name }) => {
  const [form] = Form.useForm();
  const [open, setOpen] = controls;

  const closeModal = () => setOpen(false);

  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    closeModal();
  };
  const onCancel = () => closeModal();

  const formSubmit = async () => {
    try {
      const data = await form.validateFields();
      form.resetFields();
      onCreate(data);
    } catch (error) {
      console.log('Validate Failed:', error);
    }
  };
  return (
    <Modal
      open={open}
      title={name}
      okText={name}
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={formSubmit}
    >
      <FormComponent form={form} />
    </Modal>
  );
};
