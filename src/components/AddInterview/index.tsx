import { Form, Input, Button, Modal } from 'antd';
import CompanySelect from '../CompanySelect';
import styles from './index.module.scss';

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 19 },
};
const tailLayout = {
  wrapperCol: { span: 24 },
};

const AddInterview = (props: any) => {
  const { addInterviewModal, hideModal } = props;
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  const getCompanyId = (value: any) => {
    form.setFieldsValue({
      name: value.value,
    });
    console.log('getCompanyId :>> ', value);
  };

  return (
    <Modal title="添加面经" visible={addInterviewModal} onCancel={hideModal} footer={null}>
      <Form {...layout} form={form} name="add-interview" onFinish={onFinish}>
        <Form.Item name="name" label="公司名称" rules={[{ required: true, message: '请选择公司名称' }]}>
          {/* <Input /> */}
          <CompanySelect getCompanyId={getCompanyId} />
        </Form.Item>
        <Form.Item name="interview" label="面试经验" rules={[{ required: true, message: '请填写面试经验' }]}>
          <Input.TextArea placeholder="请填写面试经验" />
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

export default AddInterview;
