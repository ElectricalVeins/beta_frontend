import { Form, Input, Radio } from 'antd';

export const LoginForm = ({ formSubmit }) => {
  const [form] = Form.useForm();

  return (
    <Form form={form} layout="vertical" name="login">
      <Form.Item name="login" label="Login" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Password" rules={[{ required: true }]}>
        <Input type="password" />
      </Form.Item>
      <Form.Item name="tier" rules={[{ required: true }]}>
        <Radio.Group>
          <Radio value="public">Public</Radio>
          <Radio value="private">Private</Radio>
        </Radio.Group>
      </Form.Item>
    </Form>
  );
};
