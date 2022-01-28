import { PlusOutlined } from '@ant-design/icons';
import { Divider, Input, Select, Space, Spin, Typography } from 'antd';
import { SelectProps } from 'antd/es/select';
import debounce from 'lodash/debounce';
import { deBounce } from '@/utils/utils';
import { useMemo, useRef, useState } from 'react';
const { Text } = Typography;


export interface DebounceSelectProps<ValueType = any>
  extends Omit<SelectProps<ValueType>, 'options' | 'children'> {
  fetchOptions: (search: string) => Promise<ValueType[]>;
  debounceTimeout?: number;
}

function DebounceSelect<
  ValueType extends { key?: string; label: React.ReactNode; value: string | number } = any,
  >({ fetchOptions, debounceTimeout = 800, ...props }: DebounceSelectProps) {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState<ValueType[]>([]);
  const fetchRef = useRef(0);

  const debounceFetcher = useMemo(() => {
    const loadOptions = (value: string) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);

      fetchOptions(value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }

        setOptions(newOptions);
        setFetching(false);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);

  return (
    <Select<ValueType>
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
      options={options}
    />
  );
}

// Usage of DebounceSelect
interface UserValue {
  label: string;
  value: string;
}

async function fetchUserList(username: string): Promise<UserValue[]> {
  console.log('fetching user', username);

  return fetch('https://randomuser.me/api/?results=5')
    .then((response) => response.json())
    .then((body) =>
      body.results.map(
        (user: { name: { first: string; last: string }; login: { username: string } }) => ({
          label: `${user.name.first} ${user.name.last}`,
          value: user.login.username,
        }),
      ));
}

const AddCompany = (props: any) => {
  const { getCompanyId } = props;
  const [value, setValue] = useState<UserValue[]>([]);
  const [newCoName, setNewCoName] = useState('');

  const onNameChange = (event) => {
    setNewCoName(event.target.value);
  };

  const addItem = () => {
    console.log('addItem 调用新增公司接口');
  };

  return (
    <DebounceSelect
      // mode="multiple"
      showSearch
      value={value}
      placeholder="请选择公司名称"
      fetchOptions={fetchUserList}
      onChange={(newValue) => {
        setValue(newValue);
        getCompanyId(newValue);
      }}
      style={{ width: '100%' }}
      dropdownRender={(menu) => (
        <div>
          {menu}
          <Divider style={{ margin: '4px 0' }} />
          <Space> <Text type="warning">未搜到？在下方新增一个吧~~</Text></Space>
          <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
            <Input style={{ flex: 'auto' }} value={newCoName} onChange={onNameChange} />
            <a
              style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
              onClick={deBounce(addItem)}
            >
              <PlusOutlined /> 新增
            </a>
          </div>
        </div>
      )}
    />
  );
};


export default AddCompany;
