import { Form, Input, Radio } from 'antd';

export const Login = ({ form }) => {
  return (
    <Form form={form} layout="vertical" name="login">
      <Form.Item name="login" label="Login" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="password" label="Password" rules={[{ required: true }]}>
        <Input type="password" />
      </Form.Item>
    </Form>
  );
};
