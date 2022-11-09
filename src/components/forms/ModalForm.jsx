import { Form, Modal } from 'antd';
import { useState } from 'react';
import { notificateError } from '../../utils/notification';

export const ModalForm = ({
  formComponent: FormComponent,
  controls,
  name,
  onSuccess,
}) => {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);
  const [open, setOpen] = controls;

  const closeModal = () => setOpen(false);

  const onCancel = () => closeModal();

  const formSubmit = async () => {
    setSubmitting(true);
    try {
      const data = await form.validateFields();
      await onSuccess(data);
      closeModal();
      form.resetFields();
    } catch (error) {
      if (error.message) {
        notificateError(error);
      }
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Modal
      open={open}
      title={name}
      okText={submitting ? 'Submitting' : name}
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={formSubmit}
      confirmLoading={submitting}
      okButtonProps={{ disabled: submitting }}
      maskStyle={submitting ? { backgroundColor: 'rgba(0,0,0,0.6)' } : null}
    >
      <FormComponent form={form} />
    </Modal>
  );
};
