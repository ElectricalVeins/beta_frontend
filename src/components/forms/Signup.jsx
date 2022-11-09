import { Form, Input, Radio, Select } from 'antd';
import { timezones } from "../../utils/timezones";

export const Signup = ({ form }) => {
  return (
    <Form form={form} layout="vertical" name="signup">
        <Form.Item name="preferredTimezone" label="Timezone" rules={[{ required: true }]}>
            <Select
                showSearch
                placeholder="Select preferred timezone"
                optionFilterProp="children"
                filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={timezones.map((value) => ({value, label: value}))}
            />
        </Form.Item>

      <Form.Item name="login" label="Login" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="email" label="Email" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="password" label="Password" rules={[{ required: true }]}>
        <Input type="password" />
      </Form.Item>

      <Form.Item name="tier" rules={[{ required: true }]}>
        <Radio.Group>
          {/* Dynamic render based on api request - Show existing app tiers */}
          <Radio value="Default">Public</Radio>
          <Radio value="Internal">Internal</Radio>
        </Radio.Group>
      </Form.Item>
    </Form>
  );
};
