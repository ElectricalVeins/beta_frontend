import { Form, Modal } from 'antd';
import { notificateError } from '../../utils/notification';

export const ModalForm = ({
  formComponent: FormComponent,
  controls,
  name,
  onSuccess,
}) => {
  const [form] = Form.useForm();
  const [open, setOpen] = controls;

  const closeModal = () => setOpen(false);

  const onCreate = async (values) => {
    console.log('Received values of form: ', values);
    await onSuccess(values);
    closeModal();
  };
  const onCancel = () => closeModal();

  const formSubmit = async () => {
    try {
      const data = await form.validateFields();
      await onCreate(data);
      form.resetFields();
    } catch (error) {
      console.log('Validate Failed:', error);
      notificateError(error);
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
