import {useContext} from "react";
import {UserContext} from "../../ctx/user";
import API from "../../api/requests";
import {AbstractButtonModalForm} from "./AbstractButtonModalForm";
import {Form, Input, Radio, Select} from "antd";

export const AccountEdit = (props) => {
    const [user, setUser] = useContext(UserContext);
    const handler = async (values) => {
        const res = await API.updateUser(user.id, values);
        setUser(res.data);
    };
    return (
        <AbstractButtonModalForm
            formComponent={EditForm}
            text="User edit"
            onSuccess={handler}
        />
    );
};

/*Copy of signup? */
const EditForm = ({form}) => {
    const [user] = useContext(UserContext);
    return (
        <Form form={form} layout="vertical" name="user_edit" initialValues={user}>
            <Form.Item name="preferredTimezone" label="Timezone" rules={[{required: true}]}>
                <Select
                    showSearch
                    placeholder="Select preferred timezone"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={Intl.supportedValuesOf('timeZone').map((value) => ({value, label: value}))}
                />
            </Form.Item>

            <Form.Item name="login" label="Login" rules={[{required: true}]}>
                <Input/>
            </Form.Item>

            <Form.Item name="email" label="Email" rules={[{required: true}]}>
                <Input/>
            </Form.Item>

            <Form.Item name="password" label="Password" rules={[{required: true}]}>
                <Input type="password"/>
            </Form.Item>

            <Form.Item name="tier" rules={[{required: true}]}>
                <Radio.Group>
                    {/* Dynamic render based on api request - Show existing app tiers */}
                    <Radio value="Default">Public</Radio>
                    <Radio value="Internal">Internal</Radio>
                </Radio.Group>
            </Form.Item>
        </Form>
    );
};

