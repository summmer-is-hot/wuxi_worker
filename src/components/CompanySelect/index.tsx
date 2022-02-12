import companyService from '@/services/companyService';
import { PlusOutlined } from '@ant-design/icons';
import { Divider, Select, Spin, Typography } from 'antd';
import { SelectProps } from 'antd/es/select';
import debounce from 'lodash/debounce';
import { useMemo, useRef, useState } from 'react';
import AddCompany from '../AddCompany';

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
      notFoundContent={fetching ? <Spin size="small" /> : "暂未搜索到哦~~"}
      {...props}
      options={options}
    />
  );
}

// Usage of DebounceSelect
interface CompanyValue {
  label: string;
  value: string;
}


const CompanySelect = (props: any) => {
  const { getCompanyId } = props;
  const [value, setValue] = useState<CompanyValue[]>([]);
  const [showAddCompany, setShowAddCompany] = useState(false);

  const getCompanyList = async (searchVal: any) => {
    console.log('searchVal :>> ', searchVal);
    const param = {
      name: searchVal || '',
    };
    const companyListRes = await companyService.getCompanyList(param);
    if (companyListRes) {
      return companyListRes.result.map(
        (item: any) => ({
          label: item.name,
          value: item.id,
        }),
      );
    }
  };

  const addItem = () => {
    setShowAddCompany(true);
  };
  const hideModal = () => {
    setShowAddCompany(false);
  };

  return (
    <>
      <DebounceSelect
        // mode="multiple"
        showSearch
        value={value}
        placeholder="请选择公司名称"
        fetchOptions={getCompanyList}
        onChange={(newValue) => {
          setValue(newValue);
          getCompanyId(newValue);
        }}
        style={{ width: '100%' }}
        dropdownRender={(menu) => (
          <div>
            {menu}
            <Divider style={{ margin: '4px 0' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 8 }}>
              <Text type="warning">未搜索到？试试新增？</Text>

              <a
                style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                onClick={addItem}
              >
                <PlusOutlined /> 新增
              </a>
            </div>
          </div>
        )}
      />
      {
        showAddCompany && <AddCompany addCompanyModal={showAddCompany} hideModal={hideModal} />
      }
    </>
  );
};


export default CompanySelect;
