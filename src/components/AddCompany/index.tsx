import companyService from '@/services/companyService';
import store from '@/store';
import { companySize } from '@/utils/const';
import { deBounce } from '@/utils/utils';
import { Form, Input, Button, Modal, Select, message } from 'antd';
import styles from './index.module.scss';

const { Option } = Select;

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 19 },
};
const tailLayout = {
  wrapperCol: { span: 24 },
};

const AddCompany = (props: any) => {
  const [userState, userStateDispatchers] = store.useModel('user')
  const { addCompanyModal, hideModal } = props;
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    console.log(values);
    const param = {
      ...values,
      userId: userState.currentUser.userId
    }
    const res = await companyService.addCompany(param);
    if (res) {
      message.success('添加成功！');
      form.resetFields();
      hideModal();
    }
  };

  return (
    <Modal title="添加公司" visible={addCompanyModal} onCancel={hideModal} footer={null}>
      <Form {...layout} form={form} name="add-company" onFinish={deBounce(onFinish, 500)}>
        <Form.Item
          name="name"
          label="公司名称"
          rules={
            [
              {
                required: true,
                message: '请填写公司名称!',
              },
            ]
          }
        >
          <Input placeholder="请填写公司名称（30字内）" maxLength={30} />
        </Form.Item>
        <Form.Item
          name="microName"
          label="公司简称"
          rules={
            [
              {
                required: true,
                message: '请填写公司简称!',
              },
            ]
          }
        >
          <Input placeholder="请填写公司简称（15字内）" maxLength={15} />
        </Form.Item>
        <Form.Item name="companySize" label="公司规模" rules={[{ required: true, message: '请选择公司规模' }]}>
          <Select
            placeholder="请选择公司规模"
          >
            {
              companySize.map((item) => {
                return <Option key={item.value} value={item.value}>{item.name}</Option>;
              })
            }
          </Select>
        </Form.Item>
        <Form.Item
          name="introduction"
          label="公司简介"
          rules={
            [
              {
                required: true,
                message: '请填写公司简介',
              },
            ]
          }
        >
          <Input.TextArea placeholder="请填写公司简介（100字内）" maxLength={100} />
        </Form.Item>
        <Form.Item {...tailLayout} className={styles.submit}>
          <Button type="primary" htmlType="submit">
            确定
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddCompany;
